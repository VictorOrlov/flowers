import React from "react";
import { mount } from 'enzyme';
import FlowerFestPage from "..";
import { MockedProvider } from '@apollo/react-testing';
import { fakeResultStartPage } from "../../../fakeDada/fakeResultStartPage";
import { act } from "react-dom/test-utils";
import { StartPageDocument } from "../../../graphql";
import wait from "waait";

const START_PAGE = StartPageDocument;
const mocks = [
  {
    request: {
      query: START_PAGE,
      variables: {
        search: null,
        sort: null,
        competitionId: null,
        page: null,
      },
    },
    result: fakeResultStartPage,
  },
];


describe('FlowerFestPage Component should render state', ()=>{
  it('loading', ()=>{
    const component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <FlowerFestPage />
      </MockedProvider>
    );
    
    const page = component.find(FlowerFestPage).children();
    expect(page.text()).toBe('Загрузка данных...');
    // console.log(page.text());
  });

  // it('data', async ()=>{
  //   const component = mount(
  //     <MockedProvider mocks={mocks} addTypename={false}>
  //       <FlowerFestPage />
  //     </MockedProvider>
  //   );
    
  //   const page = component.find(FlowerFestPage).children();
  //   await wait(500);;
  //   act(()=> {
  //     page.update();
  //   })
  //   // expect(page.text()).toBe('Загрузка данных...');
  //   console.log(page.props());
  // });

})
