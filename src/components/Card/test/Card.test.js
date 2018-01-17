import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card.js';

describe ('Card', () => {
  let renderedCard;
  let mockHandleAddFav;
  let mockHandleRemoveFav;

  beforeEach(()=>{
    mockHandleAddFav = jest.fn()
    mockHandleRemoveFav = jest.fn()
    renderedCard = shallow(<Card 
      handleAddFav= {mockHandleAddFav} handleRemoveFav={mockHandleRemoveFav}
      user={{id: 3}}
      isFav= {false}/>) 
  })
  it('should match the snapshot', () => {
  
    expect(renderedCard).toMatchSnapshot()
  })

  it.skip('should call handleCardClick when the button is clicked', () => {


  renderedCard.instance().props.handleCardClick()

  expect(handleAddFav).toHaveBeenCalled()

  });
})

