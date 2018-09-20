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
      <section class="section">
      <div class="container">
        <h1 class="title">Users Page</h1>
        <h2 class="subtitle">
          Manage users
        </h2>
        <Link className="button" to="/user">Add</Link>
        <UserList users={users} />
      </div>
    </section>
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
