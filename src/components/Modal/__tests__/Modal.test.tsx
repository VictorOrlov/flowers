import React from 'react';
import { mount } from 'enzyme';
import { Modal } from '..';
import { ModalHeader } from '../ModalHeader';

it("check onClick Modal Component", ()=> {
  const mockFn = jest.fn();
  const component = mount(
    <Modal onClose={mockFn}>Test</Modal>
  );
  component.simulate('click');
  expect(mockFn).toHaveBeenCalledTimes(1);
});

it("check onClick Mod Component", ()=> {
  const mockFn = jest.fn();
  const component = mount(
    <ModalHeader onClose={mockFn} />
  );
  component.find('button').simulate('click');
  expect(mockFn).toHaveBeenCalledTimes(1);
});