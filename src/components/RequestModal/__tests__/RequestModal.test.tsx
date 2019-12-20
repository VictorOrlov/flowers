import React from 'react';
import { mount } from "enzyme";
import { RequestModal } from '..';
import { Modal } from '../../Modal';
import { UserVotedThisRequest, UserRemainVoicesEnded } from '@/fakeDada/fakeUsers';


const currentUser = {
  voices: [876],
  remainVoices: 4,
  // 
  email: "test email",
  name: "test name",
  surname: "test surname",
  id: 1,
  phone: "88005556555",
  roles: []
}
const request = {
  "address": "МАДОУ \"Детский сад \"№ 339\"",
  "comment": null,
  "competition": {
    "id": 7,
    "kind": "open",
    "name": "Лучшее оформление территории, прилегающей к образовательному учреждению"
  },
  "createdAt": "2018-06-20 10:22:39 UTC",
  "description": null,
  "id": 357,
  "participant": {
    "id": 332,
    "kind": "person",
    "name": "jjj"
  },
  "photos": [
    {
      "id": 2166,
    }
  ],
  "state": "approved",
  "voicesCount": 18,
  "year": 2019
}

const mockFn = jest.fn()
const component = mount(
  <RequestModal currentUser={currentUser} request={request} onClose={mockFn} />
);

it('check onClick in RequestModal Component', ()=> {
  component.find(Modal).simulate('click');
  expect(mockFn).toHaveBeenCalledTimes(1);
});

it('button check in RequestModal Component', ()=> {
  // normal
  expect(component.find('.wrap_voiceBtn').text()).toBe("Отдать свой голос");

  // user not auth
  const component_notAuth = mount(
    <RequestModal currentUser={null} request={request} onClose={mockFn} />
  );
  expect(component_notAuth.find('.wrap_voiceBtn').length).toEqual(0);

  // user.remainVoices = 0
  const component_remainVoicesEnded = mount(
    <RequestModal currentUser={UserRemainVoicesEnded} request={request} onClose={mockFn} />
  );
  expect(component_remainVoicesEnded.find('.wrap_voiceBtn').length).toEqual(0);

  // user has already voted for this request
  const component_VotedThisRequest = mount(
    <RequestModal currentUser={UserVotedThisRequest} request={request} onClose={mockFn} />
  );
  expect(component_VotedThisRequest.find('.wrap_voiceBtn').text()).toBe("Отозвать свой голос");


})