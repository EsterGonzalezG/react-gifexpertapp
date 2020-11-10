import { shallow } from 'enzyme';
import React from 'react';
import { GifExpertApp } from './../GifExpertApp';

describe('test GifExpertApp', () => {
  const wrapper = shallow(<GifExpertApp />);

  test('should be render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be show list of categories', () => {
    const categories = ['Hello', 'Bye'];
    const wrapper = shallow(<GifExpertApp defaultCategoties={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
