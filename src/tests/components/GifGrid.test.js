import { shallow } from 'enzyme';
import React from 'react';
import { GifGrid } from './../../components/GifGrid';
import { useFetchGifs } from './../../hooks/useFetchGifs';
jest.mock('./../../hooks/useFetchGifs');

describe('GifGrid component', () => {
  const category = 'One Punch';
  test('should be render component', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should be items when img useFetchGifs', () => {
    const imgs = [
      {
        id: 'ans',
        url: 'https//localhost/kskdask.jpg',
        title: 'title',
      },
      {
        id: 'kaskskask',
        url: 'https//localhost/kskdask.jpg',
        title: 'title',
      },
    ];
    useFetchGifs.mockReturnValue({
      data: imgs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(imgs.length);
  });
});
