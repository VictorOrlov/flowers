import React from 'react';
import { mount } from 'enzyme';
import Pagination from '..';

const mockFn = jest.fn();
const component = mount(
  <Pagination
    current={2}
    total={25}
    perPage={5}
    pageRange={1}
    onPageChange={mockFn}
  />
);

it('snapshot for Pagination Component', ()=> {
  expect(component).toMatchSnapshot();
});

// it('check onClick in Pagination Component', ()=> {
//   console.log(component.find('.pagination__mid').children().props())
//   let prev = component.find(".pagination__left").children();
//   prev.simulate('click');
//   expect(mockFn).toHaveBeenCalledTimes(1)

// })