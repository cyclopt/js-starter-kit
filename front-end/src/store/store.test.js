import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as userActions from '../actions/userActions';

describe('Store', function() {
  test('Should handle creating users', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const user = {
      username: 'A'
    }

    // act
    const action = userActions.createUserSuccess(user);
    store.dispatch(action);

    // assert
    const actual = store.getState().users[0];
    const expected = {
      username: 'A'
    };
    expect(actual).toEqual(expected);
  })
})
