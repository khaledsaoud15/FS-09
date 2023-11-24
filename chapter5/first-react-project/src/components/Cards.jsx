import React from "react";
import { cards } from "../data";
import styled from "styled-components";

const Cards = () => {
  return (
    <Container>
      {cards.map((c) => {
        return (
          <Card>
            <CardImage src={c.icon} alt={c.title} />
            <CardTitle>{c.title}</CardTitle>
            <CardText>{c.text}</CardText>
          </Card>
        );
      })}
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    padding: 30px 0;
  }
`;
const Card = styled.div`
  width: 15%;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  height: 20vh;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    border: 1px solid #ffa500;
    background-color: #ffa500;
    scale: 1.1;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const CardImage = styled.img`
  width: 30px;
  height: 30px;
`;
const CardTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
const CardText = styled.p`
  font-size: 14px;
`;
