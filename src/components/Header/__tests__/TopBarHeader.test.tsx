import React from 'react';
import TopBar from '../top-bar';
import { mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import { UserApproved, UserNotAuth, UserRemainVoicesEnded, UserNoParticipation } from '@/fakeDada/fakeUsers';


const TopBarComponent = (user: any) =>(
  mount(
    <MemoryRouter>
      <TopBar currentUser={user} />
    </MemoryRouter>
  )
);

it('checking the clickability of the icon in TopBar', ()=> {
  const component = TopBarComponent(UserApproved)
  const a = component.find(Link);
  expect(a.props().to).toBe('/');
  expect(a.children().props().children.props.className).toBe('gerb_header');
});

describe('correct value remainVoices in TopBar', ()=> {
  it('remainVoices = 7', ()=> {
    const component = TopBarComponent(UserApproved)
    const count = component.find(".last_userRemainVoices");
    expect(count.text()).toBe('7');
    expect(component.find(TopBar).children()).toMatchSnapshot();
  });

  it('user = null', ()=> {
    const component = TopBarComponent(UserNotAuth);
    expect(component.children().text()).toBeFalsy();
  });

  it('user.participant = null & remainVoices = 4', ()=> {
    const component = TopBarComponent(UserNoParticipation);
    const count = component.find(".last_userRemainVoices");
    expect(count.text()).toBe('4');
  });

  it('remainVoices = 0', ()=> {
    const component = TopBarComponent(UserRemainVoicesEnded);
    const count = component.find(".last_userRemainVoices");
    expect(count.text()).toBe('0');
  });
})