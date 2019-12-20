import React from 'react';
import { mount } from 'enzyme';
import ApprovalRequestCard from '../ApprovalRequestCard';
import { UserApproved, UserCreated, UserUpdated, UserDeclined, UserDeleted, UserDeletedForNewRequest } from '../../../fakeDada/fakeUsers';

const componentResult = (user: any) => mount(
  <ApprovalRequestCard request={user.participant.request} />
);

it ('correct data display', ()=>{
  const component = componentResult(UserApproved);
  const request = UserApproved.participant.request;
  expect(component.children().childAt(0).text())
    .toBe(request.competition.name);
  expect(component.find('.cell_card').at(0).childAt(1).text())
    .toBe(request.participant.name);
  expect(component.find('.cell_card').at(1).childAt(1).text())
    .toBe(request.address);
  expect(component.find('.cell_card').at(2).childAt(1).text())
  .toBe(request.description);
  expect(component.find('.photos_request_card_img').length)
  .toBe(4);
})

describe('correct styles', ()=>{
  it('approved', ()=>{
    const component = componentResult(UserApproved);
    expect(component.children().childAt(0).every('.approval_header_succes')).toBeTruthy();
  });

  it('created & updated', ()=>{
    const component = componentResult(UserCreated).children().childAt(0).every('.approval_header_check');
    const component2 = componentResult(UserUpdated).children().childAt(0).every('.approval_header_check');
    expect(component && component2).toBeTruthy();
  });

  it('declined, deleted & deleted_for_new_request', ()=>{
    const component = componentResult(UserDeclined).children().childAt(0).every('.approval_header_danger');
    const component2 = componentResult(UserDeleted).children().childAt(0).every('.approval_header_danger');
    const component3 = componentResult(UserDeletedForNewRequest).children().childAt(0).every('.approval_header_danger');
    expect(component && component2 && component3).toBeTruthy();
  });
});