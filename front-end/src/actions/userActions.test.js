// Demo testing actions (but perhaps too simple of tests, not needed)
import * as userActions from './userActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('User Actions', () => {
  describe('createUSerSuccess', () => {
    test('should create a CREATE_USER_SUCCESS action', () => {
      // arrange
      const user = {id: '1', username: 'kyrcha'};
      const expectedAction = {
        type: types.CREATE_USER_SUCCESS,
        user: user
      }
      // act
      const action = userActions.createUserSuccess(user);

      // assert
      expect(action).toEqual(expectedAction);
    })
  })
});


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  test('should create BEGIN_AJAX_CALL and LOAD_USER_SUCCESS when loading  users', done => {
    // https://github.com/nock/nock/issues/699 needs the CORS
    nock('http://localhost:3000')
      .get('/users').reply(200, {body: {users:[{id:1, username: 'A'}, {id: 2, username: 'B'}]}}, {'Access-Control-Allow-Origin': '*'});
    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_USERS_SUCCESS, body: {users:[{id:1, username: 'A'}, {id: 2, username: 'B'}]}}
    ];
    const store = mockStore({users: []}, expectedActions);
    store.dispatch(userActions.loadUsers()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_USERS_SUCCESS);
      done();
    });
  });

});
