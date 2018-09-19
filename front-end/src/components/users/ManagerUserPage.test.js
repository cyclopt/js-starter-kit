import React from 'react';
import {mount} from 'enzyme';
import {ManageUserPage} from './ManageUserPage';

function setup(saving) {
  const props = {
    user: {username:''},
    actions: {saveUser: () => {return Promise.resolve();}}
  };

  return mount(<ManageUserPage {...props} />);
}

describe('Manage User Page', () => {
  test('sets error message when trying to save empty title', () => {
    const wrapper = setup(false);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).not.toBe('Title must be at least 5 characters.');
  });
});
