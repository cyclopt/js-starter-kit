// Demo of testing reducers
import userReducer from './userReducer';
import * as actions from '../actions/userActions';

describe('User Reducer', () => {
  test('should add user when passed CREATE_USER_SUCCESS', () => {
    const initialState = [
      {username: 'A'},
      {username: 'B'}
    ];

    const newUser = {username: 'C'};

    const action = actions.createUserSuccess(newUser);

    const newState = userReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].username).toEqual('A')
    expect(newState[1].username).toEqual('B')
    expect(newState[2].username).toEqual('C')
  });
  test('should update user when passed UPDATE_USER_SUCCESS', () => {
    const initialState = [
      {id: 1, username: 'A'},
      {id: 2, username: 'B'},
      {id: 3, username: 'C'}
    ];

    const user = {id: 2, username: 'New B'};

    const action = actions.updateUserSuccess(user);

    const newState = userReducer(initialState, action);
    const updatedUser = newState.find(a => a.id === user.id);
    const untouchedUser = newState.find(a => a.id === 1);

    //assert
    expect(updatedUser.username).toEqual('New B');
    expect(untouchedUser.username).toEqual('A');
    expect(newState.length).toEqual(3);
  });

});
