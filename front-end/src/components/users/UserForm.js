import React from 'react';
import TextInput from '../common/TextInput';
import PropTypes from 'prop-types';

const UserForm = ({user, onSave, onChange, saving, errors}) => {
  return(
    <form>
      <p>Add or Update a user</p>
      <TextInput
        name="username"
        label="Username"
        value={user.username}
        onChange={onChange}
        error={errors.username}
      />
      <div className="field">
        <div className="control">
          <input
            type="submit"
            disabled={saving}
            value={saving ? 'Saving...' : 'Save'}
            className="button is-info"
            onClick={onSave}
          />
        </div>
      </div>
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
