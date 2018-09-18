import React from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions'
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import UserList from './UserList';

class UsersPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {username: ''}
    }
  }

  render() {
    const {users} = this.props;
    return (
      <div>
        <h1>Users Page</h1>
        <Link to="/user">Add</Link>
        <UserList users={users} />
      </div>
    );
  }
}

UsersPage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
