import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UserListRow = ({user}) => {
  return (
    <tr>
      <td><Link to={`/user/${user.id}`}>{user.id}</Link></td>
      <td>{user.username}</td>
    </tr>
  );
}

UserListRow.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserListRow;
