import React from 'react';
import { shallow } from 'enzyme';
import PanelColumn from './PanelColumn';

describe('<PanelColumn />', () => {
  test('renders', () => {
    const wrapper = shallow(<PanelColumn />);
    expect(wrapper).toMatchSnapshot();
  });
});
