import React from 'react';
import { shallow } from 'enzyme';
import HeaderActionIcon from './HeaderActionIcon';

describe('<HeaderActionIcon />', () => {
  test('renders', () => {
    const wrapper = shallow(<HeaderActionIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});
