import React from 'react';
import UserListRow from './UserListRow';
import PropTypes from 'prop-types';

const UserList = ({users}) => {
  console.log(users);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user =>
          <UserListRow key={user.id} user={user} />
        )}
      </tbody>
    </table>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserList;
