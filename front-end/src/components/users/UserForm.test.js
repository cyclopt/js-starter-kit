import React from 'react';
import UserForm from './UserForm';
import {shallow} from 'enzyme';

function setup(saving) {
  const props = {
    user: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<UserForm {...props} />);
}


describe('UserForm via', () => {
  it('renders form and username label', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('p').text()).toEqual('Add or Update a user');
  });
  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  })
  it('save button is labeled "Saving" when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  })
});
