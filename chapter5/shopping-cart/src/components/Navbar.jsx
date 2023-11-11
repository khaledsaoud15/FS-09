import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import heart from "../images/heart.svg";
import cart from "../images/cart.png";
import logo from "../images/logo.png";

const Navbar = ({ like, cartArr }) => {
  return (
    <Container>
      <Logo src={logo} />
      <Links>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </Links>
      <CartItems>
        <Item>
          <Heart src={heart} />
          <span>{like.length}</span>
        </Item>
        <Item>
          <CartIcon src={cart} />
          <span>{cartArr.length}</span>
        </Item>
      </CartItems>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 80px;
  justify-content: space-between;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 9999999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const Logo = styled.img`
  height: 100%;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
    font-weight: 400;
  }
`;
const CartItems = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Item = styled.div``;
const Heart = styled.img`
  height: 20px;
`;
const CartIcon = styled.img`
  height: 20px;
`;
