import React from 'react';
import Button from '../Button';
import ButtonLink from '../ButtonLink';
import ArrowButtonGroup from '../ArrowButtonGroup';
import { mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';

it('test click for Button', ()=>{
  const mockFn = jest.fn();
  const component = mount(
    <Button onClick={mockFn}>Test</Button>
  );
  component.simulate('click');
  expect(mockFn).toHaveBeenCalledTimes(1)
})

describe('displaying the correct styles in Button', ()=>{
  it('prop red & prop large', ()=>{
    const component = mount(
      <Button red large>Test</Button>
    );
    expect(component.props().red).toBeTruthy();
    expect(component.children().every('.button_red')).toEqual(true);
    expect(component.children().every('.large')).toEqual(true);
    expect(component.children().every('.not_selector')).toEqual(false);
  });

  it('prop green', ()=>{
    const component = mount(
      <Button green large>Test</Button>
    );
    expect(component.props().green).toBeTruthy();
    expect(component.children().every('.button_green')).toEqual(true);
  });

  it('prop blue', ()=>{
    const component = mount(
      <Button blue large>Test</Button>
    );
    expect(component.props().blue).toBeTruthy();
    expect(component.children().every('.button_blue')).toEqual(true);
  });

  it('prop gold', ()=>{
    const component = mount(
      <Button gold large>Test</Button>
    );
    expect(component.props().gold).toBeTruthy();
    expect(component.children().every('.button_gold')).toEqual(true);
  });
});

// //////////ButtonLink////////////////////////

it('correct link path & click for ButtonLink', ()=>{
  const mockFn = jest.fn();
  const component = mount(
    <MemoryRouter>
      <ButtonLink 
        onClick={mockFn} 
        to="/pogodi_kuda_speshish"
      >
        Test ButtonLink
      </ButtonLink>
    </MemoryRouter>
  );
  expect(component.find(Link).props().to).toBe('/pogodi_kuda_speshish');
  component.simulate('click');
  component.simulate('click');
  expect(mockFn).toHaveBeenCalledTimes(2)
})

describe('displaying the correct styles in ButtonLink', ()=>{
  it('prop succes', ()=>{
  const component = mount(
    <MemoryRouter>
      <ButtonLink success to="/">
        Test ButtonLink
      </ButtonLink>
    </MemoryRouter>
  );
  expect(component.find(Link).every('.button_success')).toBeTruthy();
  });

  it('prop danger', ()=>{
    const component = mount(
      <MemoryRouter>
        <ButtonLink danger to="/">
          Test ButtonLink
        </ButtonLink>
      </MemoryRouter>
    );
    expect(component.find(Link).every('.button_danger')).toBeTruthy();
    });

    it('prop check', ()=>{
      const component = mount(
        <MemoryRouter>
          <ButtonLink check to="/">
            Test ButtonLink
          </ButtonLink>
        </MemoryRouter>
      );
      expect(component.find(Link).every('.button_check')).toBeTruthy();
      });
});

// /////////////////ArrowButtonGroup////////////////////

it('', ()=>{
  const mockFn = jest.fn();
  const component = mount(
    <ArrowButtonGroup goPrev={mockFn} goNext={mockFn} />
  );
  const prev = component.find('button').at(0);
  const next = component.find('button').at(1);
  prev.simulate('click');
  expect(mockFn).toHaveBeenCalledTimes(1);
  next.simulate('click');
  expect(mockFn).toHaveBeenCalledTimes(2);
});

