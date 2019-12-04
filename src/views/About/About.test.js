import React from 'react';
import { shallow } from 'enzyme';

import { About } from './About';

describe('<About />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  it('should render correctly', () => {
    expect(wrapper.find('div')).toHaveLength(6);
  });
});
