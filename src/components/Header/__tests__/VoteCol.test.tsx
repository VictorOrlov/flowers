import React from 'react';
import {VoteCol} from '../header-components/VoteCol';
import { mount } from 'enzyme';
import { 
  UserApproved, UserNotAuth, UserCreated, UserNoParticipation, 
  UserDeclined, UserDeleted, UserDeletedForNewRequest, UserUpdated, UserRemainVoicesEnded 
} from "../../../fakeDada/fakeUsers";
import { StaticRouter } from 'react-router';
import ButtonLink from '../../Button/ButtonLink';


const location = {
  hash: "",
  pathname: "/",
  search: "",
  state: undefined
};
const match = {
  isExact: true,
  params: {},
  path: "/",
  url: "/"
};

const voteColResult = (currentUser: any) => (
  mount(
    <StaticRouter>
      <VoteCol
        requestsCount={1234}
        voicesCount={7777}
        currentUser={currentUser}
        location={location}
        match={match}
      />
    </StaticRouter>
  )
)

it('correct displaing values in VoteCol', ()=>{
  const component = voteColResult(UserNotAuth);
  const requestsCount = component.find('span.vote_counter').at(0).text();
  const voicesCount = component.find('span.vote_counter').at(1).text();
  expect(requestsCount).toBe("1234 ");
  expect(voicesCount).toBe("7777 ");
})

it('render VoteCol Component with user = null', ()=> {
  const component = voteColResult(UserNotAuth);
  expect(component.find(ButtonLink)).toHaveLength(2);
  expect(component.find(ButtonLink).first().text()).toEqual(" Принять участие ");
})

it('render VoteCol Component with user.participant = null',()=> {
  const component = voteColResult(UserNoParticipation)
  expect(component.find(ButtonLink)).toHaveLength(3);
  expect(component.find(ButtonLink).last().text()).toEqual(" \"Цветочный фестиваль\"");
  expect(component.find(ButtonLink).at(1).text()).toEqual(" Участвовать в конкурсе ")
  expect(component.find(ButtonLink).first().text()).toEqual(" Голосовать ");
});

it('render VoteCol Component with user.remainVoices = 0', ()=> {
  const component = voteColResult(UserRemainVoicesEnded);
  expect(component.find(ButtonLink)).toHaveLength(1);
  expect(component.find(ButtonLink).at(0).text()).toEqual(" \"Цветочный фестиваль\"");
});

describe("render VoteCol Component with ...", ()=> {
  it('... user.participant.request.state = approved', ()=> {
    const component = voteColResult(UserApproved);
    expect(component.find(ButtonLink)).toHaveLength(2);
    expect(component.find(ButtonLink).last().text()).toEqual(" \"Цветочный фестиваль\"");
    expect(component.find(ButtonLink).first().text()).toEqual(" Голосовать ");
    expect(component.children()).toMatchSnapshot();
  });
  
  it('... user.participant.request.state = created', ()=> {
    const component = voteColResult(UserCreated);
    expect(component.find(ButtonLink)).toHaveLength(2);
    expect(component.find(ButtonLink).last().text()).toEqual(" \"Цветочный фестиваль\"");
    expect(component.find(ButtonLink).first().text()).toEqual(" Голосовать ");
  });
  
  it('... user.participant.request.state = declined', ()=> {
    const component = voteColResult(UserDeclined);
    expect(component.find(ButtonLink)).toHaveLength(2);
    expect(component.find(ButtonLink).last().text()).toEqual(" \"Цветочный фестиваль\"");
    expect(component.find(ButtonLink).first().text()).toEqual(" Голосовать ");
  });
  
  it('... user.participant.request.state = deleted', ()=> {
    const component = voteColResult(UserDeleted);
    expect(component.find(ButtonLink)).toHaveLength(2);
    expect(component.find(ButtonLink).last().text()).toEqual(" \"Цветочный фестиваль\"");
    expect(component.find(ButtonLink).first().text()).toEqual(" Голосовать ");
  });
  
  it('... user.participant.request.state = deleted_for_new_request', ()=> {
    const component = voteColResult(UserDeletedForNewRequest);
    expect(component.find(ButtonLink)).toHaveLength(2);
    expect(component.find(ButtonLink).last().text()).toEqual(" \"Цветочный фестиваль\"");
    expect(component.find(ButtonLink).first().text()).toEqual(" Голосовать ");
  });
  
  it('... user.participant.request.state = updated', ()=> {
    const component = voteColResult(UserUpdated);
    expect(component.find(ButtonLink)).toHaveLength(2);
    expect(component.find(ButtonLink).last().text()).toEqual(" \"Цветочный фестиваль\"");
    expect(component.find(ButtonLink).first().text()).toEqual(" Голосовать ");
  });
});

it('checking the clickability of the button in VoteCol Component', ()=> {
  const component = voteColResult(UserApproved);
  const a = component.find(ButtonLink).last();
  expect(a.text()).toEqual(" \"Цветочный фестиваль\"");
  expect(a.props().to).toBe('/flowerfest');
});

