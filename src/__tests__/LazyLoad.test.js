import React from 'react';
import { shallow } from 'enzyme';
import ReactLazyLoad from 'react-lazyload';
import LazyLoad from '../LazyLoad.react';

describe('BottomNavigation', () => {
  it('renders', () => {
    const component = shallow(
      <LazyLoad
        id="test-id"
      >
        <div>test</div>
      </LazyLoad>);

    expect(component.find(ReactLazyLoad).length).toBe(1);
  });
});
