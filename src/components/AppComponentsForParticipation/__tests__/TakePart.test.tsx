import React from 'react';
import { mount } from 'enzyme';
import TakePartNotAuth from '../TakePart';
import { MemoryRouter } from 'react-router';
import ButtonLink from '@/components/Button/ButtonLink';

it('check button in TakePartNotAuth Component', ()=>{
const component = mount(
  <MemoryRouter>
    <TakePartNotAuth />
  </MemoryRouter>
);
expect(component).toBeTruthy();
expect(component.find(ButtonLink).props().to).toBe('/auth/esia_oauth');
})