import React from 'react';

import {
  CartItemContainer,
  Image,
  ItemDetailsContainer,
  NameSpan,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <NameSpan>{name}</NameSpan>
        <span>{`${quantity} x ${price}`}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
