import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from './../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
  const title = 'Un título';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un párrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('img with isrc and alt', () => {
    const img = wrapper.find('img');
    // console.log( img.props().src )
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('className contain animate__fadeIn', () => {
    const div = wrapper.find('div');
    expect(div.hasClass('animate__fadeIn')).toBe(true);
    // const className = div.prop('className');
    // expect(className.includes('animate__fadeIn')).toBe(true);
  });
});
