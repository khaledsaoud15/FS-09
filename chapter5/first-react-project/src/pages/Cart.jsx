import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const deletedItem = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Head>
          {cart.length === 0 ? "cart is Empty" : `in Cart ${cart.length}`}
        </Head>
        <CartItems>
          {cart.map((c) => {
            return (
              <Item>
                <Img src={c.img} />
                <Content>
                  <Left>
                    <Title>title: {c.title}</Title>
                    <Color c={c.color}></Color>
                    <Quan>
                      <Quantity>Quantity: {c.quantity}</Quantity>
                      <Price>Price: {c.price}</Price>
                    </Quan>
                  </Left>
                  <Right>
                    <FullPrice>Full Price: {c.totalPrice}</FullPrice>
                    <DeleteFromCart onClick={() => deletedItem(c._id)}>
                      Delete
                    </DeleteFromCart>
                  </Right>
                </Content>
              </Item>
            );
          })}
        </CartItems>
      </Container>
    </div>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
`;
const Head = styled.h1`
  font-weight: 400;
`;
const CartItems = styled.div`
  height: 50vh;
  overflow-y: scroll;
  width: 40%;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #d2d2d2;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffa500;
    border-radius: 4px;
    border: 1px solid #ffa500;
    height: 15px;
  }
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Title = styled.h1`
  font-size: 18px;
`;
const Price = styled.p``;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const FullPrice = styled.h4``;
const DeleteFromCart = styled.button`
  padding: 5px;
  border: none;
  background-color: #ffa500;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;
const Quan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Quantity = styled.p``;
const Color = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.c};
  border-radius: 50%;
`;
