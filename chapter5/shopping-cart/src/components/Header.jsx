import React from "react";
import styled from "styled-components";
import iphone from "../images/iphone.png";

const Header = () => {
  return (
    <Container>
      <Left>
        <h1>Iphone 15 pro max</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          suscipit excepturi, tempore assumenda delectus nemo voluptate autem
          repellat maiores doloribus.
        </p>
        <button>Add To Cart</button>
      </Left>
      <Right>
        <Iphone src={iphone} />
      </Right>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 60vh;
  padding: 0 90px;
  justify-content: space-between;
  background: #ffefba;
  background: -webkit-linear-gradient(to right, #ffffff, #ffefba);
  background: linear-gradient(to right, #ffffff, #ffefba);
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  button {
    padding: 10px;
    width: 30%;
    border: none;
    background: #636363;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
`;
const Right = styled.div`
  width: 25%;
  height: 50vh;
`;
const Iphone = styled.img`
  width: 100%;
  filter: drop-shadow(10px 5px rgba(0, 0, 0, 0.5));
`;
