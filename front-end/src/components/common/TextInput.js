import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'input';
  if(error && error.length > 0) {
    wrapperClass += " is-danger";
  }

  return (
    <div className="field">
      <label className="label" htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        className={wrapperClass}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="help is-danger">{error}</p>}
    </div>
  );

}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
}

export default TextInput;
