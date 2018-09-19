import React from 'react';
import TextInput from '../common/TextInput';
import PropTypes from 'prop-types';

const UserForm = ({user, onSave, onChange, saving, errors}) => {
  return(
    <form>
      <h1>Manage User</h1>
      <TextInput
        name="username"
        label="Username"
        value={user.username}
        onChange={onChange}
        error={errors.username}
      />
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  )
}

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
}

export default UserForm;
