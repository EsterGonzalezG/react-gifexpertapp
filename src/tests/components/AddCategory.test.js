import { shallow } from 'enzyme';
import React from 'react';
import { AddCategory } from '../../components/AddCategory';
describe('AddCategory', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test('should be show component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should changes input', () => {
    const value = 'Hola mundo';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });
  });

  test('should information on submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clear input test', () => {
    const value = 'Hola mundo';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });
});
