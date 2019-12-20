import React from "react";
import HomePage from "../index";
import { MockedProvider } from '@apollo/react-testing';
import { mount } from "enzyme";
import { 
  UserApproved, UserNotAuth, UserCreated, UserNoParticipation, 
  UserDeclined, UserDeleted, UserDeletedForNewRequest, UserUpdated 
} from "../../../fakeDada/fakeUsers";
import wait from "waait"
import { act } from 'react-dom/test-utils';
import { fakeCompititions } from "../../../fakeDada";
import gql from "graphql-tag";
import { MemoryRouter as Router, MemoryRouter } from 'react-router-dom';
import toJson from "enzyme-to-json";

const COMPETITIONS = gql`
 query Competitions {
    competitions {
      id
      kind
      name
    }
  }
`;

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

  const mocks = [
    {
      request: {
        query: COMPETITIONS,
      },
      result: {
        data: {
          competitions: fakeCompititions,
        },
      },
    },
  ];

  const HomePageResult = (a,b) => (
    <MockedProvider mocks={a} addTypename={false}>
      <MemoryRouter>
        <HomePage isTest={true} currentUser={b} location={location} match={match} />
      </MemoryRouter>
    </MockedProvider>
  )

it("render correctly HomePage component", async () => {
const HomePageComponent = mount(
  // <MockedProvider mocks={mocks} addTypename={false}>
  //   <HomePage isTest={true} currentUser={UserApproved} location={location} match={match} />
  // </MockedProvider>
  HomePageResult(mocks, UserApproved)
);

  await wait(500);
  act(()=> {HomePageComponent.update()})
  const p = HomePageComponent.find(HomePage).children();
  expect(p).toMatchSnapshot();
});

it("render HomePage Component with user = null", async ()=> {
  const HomePageComponent = mount(
    HomePageResult(mocks, UserNotAuth)
  );
  await wait(500);
  act(()=> {HomePageComponent.update()});
  const page = HomePageComponent.find(HomePage).children();
  const currentUser = toJson(page.last().find('SectionForParticipant')).props.currentUser;
  expect(currentUser).toBe(null)
});

it("render HomePage Component with user.participant.request.state = null", async ()=> {
  const HomePageComponent = mount(
    HomePageResult(mocks, UserNoParticipation)
  );
  await wait(500);
  act(()=> {HomePageComponent.update()});
  const page = HomePageComponent.find(HomePage).children();
  const currentUser = toJson(page.last().find('SectionForParticipant')).props.currentUser;
  expect(currentUser.participant).toBe(null)
});

it("render HomePage Component with user.participant.request.state = created", async ()=> {
  const HomePageComponent = mount(
    HomePageResult(mocks, UserCreated)
  );
  await wait(500);
  act(()=> {HomePageComponent.update()});
  const page = HomePageComponent.find(HomePage).children();
  const currentUser = toJson(page.last().find('SectionForParticipant')).props.currentUser;
  expect(currentUser.participant.request.state).toBeTruthy()
  expect(currentUser.participant.request.state).toBe('created')
});

it("render HomePage Component with user.participant.request.state = declined", async ()=> {
  const HomePageComponent = mount(
    HomePageResult(mocks, UserDeclined)
  );
  await wait(500);
  act(()=> {HomePageComponent.update()});
  const page = HomePageComponent.find(HomePage).children();
  const currentUser = toJson(page.last().find('SectionForParticipant')).props.currentUser;
  expect(currentUser.participant.request.state).toBe('declined')
});

it("render HomePage Component with user.participant.request.state = deleted", async ()=> {
  const HomePageComponent = mount(
    HomePageResult(mocks, UserDeleted)
  );
  await wait(500);
  act(()=> {HomePageComponent.update()});
  const page = HomePageComponent.find(HomePage).children();
  const currentUser = toJson(page.last().find('SectionForParticipant')).props.currentUser;
  expect(currentUser.participant.request.state).toBe('deleted')
});

it("render HomePage Component with user.participant.request.state = deleted_for_new_request", async ()=> {
  const HomePageComponent = mount(
    HomePageResult(mocks, UserDeletedForNewRequest)
  );
  await wait(500);
  act(()=> {HomePageComponent.update()});
  const page = HomePageComponent.find(HomePage).children();
  const currentUser = toJson(page.last().find('SectionForParticipant')).props.currentUser;
  expect(currentUser.participant.request.state).toBe('deleted_for_new_request')
});

it("render HomePage Component with user.participant.request.state = updated", async ()=> {
  const HomePageComponent = mount(
    HomePageResult(mocks, UserUpdated)
  );
  await wait(500);
  act(()=> {HomePageComponent.update()});
  const page = HomePageComponent.find(HomePage).children();
  const currentUser = toJson(page.last().find('SectionForParticipant')).props.currentUser;
  expect(currentUser.participant.request.state).toBe('updated')
});