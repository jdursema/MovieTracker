import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('should render', () => {
  const appWrapper = shallow(<App />)

  expect(appWrapper).toMatchSnapshot();
})

