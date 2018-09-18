import React from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions'
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import UserForm from './UserForm';

class ManageUserPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: Object.assign({}, props.user),
      errors: {}
    }

    this.updateUserState = this.updateUserState.bind(this);
    this.saveUser = this.saveUser.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if(this.props.user.id !== nextProps.user.id) {
      this.setState({user: Object.assign({}, nextProps.user)});
    }
  }

  updateUserState(event) {
    const field = event.target.name;
    let user = Object.assign({}, this.state.user);
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  saveUser(event) {
    event.preventDefault();
    this.props.actions.saveUser(this.state.user);
    this.context.router.history.push('/users')
  }

  render() {
    return (
      <UserForm
        user={this.state.user}
        errors={this.state.errors}
        onChange={this.updateUserState}
        onSave={this.saveUser}
      />
    );
  }
}

ManageUserPage.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

ManageUserPage.contextTypes = {
  router: PropTypes.object
}

function getUserById(users, id) {
  console.log(users);
  const user = users.filter(user => {
    console.log(id)
    console.log(user.id)
    console.log(user.id === parseInt(id, 10));
    return user.id === parseInt(id, 10)
  });
  console.log(id);
  console.log(user);
  if(user.length) return user[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const userId = ownProps.match.params.id
  let user = {username: ''};
  if(userId && state.users.length > 0) {
    user = getUserById(state.users, userId)
  }
  return {
    user: user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);
