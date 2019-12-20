import React from 'react';
import { mount } from 'enzyme';
import { WinnerModal } from '..';
import { fakeWinnersPreviousYear } from '../../../fakeDada';
import Swiper from "react-id-swiper";
import { ModalHeader } from '@/components/Modal/ModalHeader';

const mockFn = jest.fn();
const winner = fakeWinnersPreviousYear[0];
const component = mount(
  <WinnerModal winner={winner} onClose={mockFn} />
);

describe('displaying photos & check correct onClose in WinnerModal Component', ()=>{
  it('displaying photos', ()=>{
    expect(component.find(Swiper).find('img').at(0).props().src)
      .toBe(winner.request.photos[0].url);
    expect(component.find(Swiper).find('img').at(1).props().src)
      .toBe(winner.request.photos[1].url);
    expect(component.find(Swiper).find('img').at(2).props().src)
      .toBe(winner.request.photos[2].url);
  });

  it('correct onClose', ()=>{
    component.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
    component.find(ModalHeader).find('button').simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
})