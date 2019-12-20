import React from 'react';
import { mount } from 'enzyme';
import RequestCard from '..';


const request = {
  title: "test title",
  competition: "test name",
  photos: "gagaga"
};

const component = mount(
  <RequestCard request={request} className=""/>
);

it('check displaying img in RequestCard Component', ()=> {
  expect(component.find(".img-fluid").prop("src")).toBe("gagaga");
  let underPhoto = mount(<RequestCard request={{title:"", competition:""}} className=""/>);
  expect(underPhoto.find(".img-fluid").prop("src")).toBe("images/gerb.svg")
});

it('check props in RequestCard Component', ()=> {
  expect(component.find(".ProjectCard__description").childAt(0).text()).toBe("test title");
  expect(component.find(".ProjectCard__description").childAt(1).text()).toBe("test name");
})