import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart as clearItemFromCartAction,
  removeItem as removeItemAction,
  addItem as addItemAction,
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div
          onClick={() => removeItem(cartItem)}
          onKeyDown={e => (e.keyCode === 13 ? removeItem(cartItem) : null)}
          role='button'
          tabIndex={0}
        >
          &#10094;
        </div>
        <span>{quantity}</span>
        <div
          onClick={() => addItem(cartItem)}
          onKeyDown={e => (e.keyCode === 13 ? addItem(cartItem) : null)}
          role='button'
          tabIndex={0}
        >
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCartAction(item)),
  addItem: item => dispatch(addItemAction(item)),
  removeItem: item => dispatch(removeItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
