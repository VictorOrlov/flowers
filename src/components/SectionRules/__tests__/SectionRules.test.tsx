import React from 'react';
import { mount } from 'enzyme';
import SectionRules from '..';
import { fakeCompititions } from '../../../fakeDada';

const component = mount(
  <SectionRules competitions={fakeCompititions}/>
)

it ('displaying data prop in SectionRules', ()=>{
  expect(component.find('.row').at(2).childAt(0).text()).toBe(fakeCompititions[0].name);
  expect(component.find('.row').at(2).childAt(5).text()).toBe(fakeCompititions[5].name);
});

it("snapshot SectionRules Component", ()=>{
  expect(component).toMatchSnapshot();
});