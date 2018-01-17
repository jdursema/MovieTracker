import React from 'react';
import { shallow } from 'enzyme';
import Login from '../LoginForm.js';
import configureMockStore from 'redux-mock-store';

const fakeStore = configureMockStore()({errorStatus: {
  isError: false,
  errorMsg: ''
  }
})



const setup = () => {
  const props = {
    handleLogin: jest.fn(),
  }

  const wrapper = shallow(
   
    <Provider store={fakeStore}>
      <Login 
      handleLogin={props.handleLogin}
      isError={props.errorStatus.isError}
      errorMsg= {props.errorStatus.errorMsg} />
    </Provider>

    

  )

  const Component = wrapper.find(Login)

  return {
    props,
    Component
  }
}


it('should match its snap shot', () => {

  expect(setup.wrapper).toMatchSnapshot();
});