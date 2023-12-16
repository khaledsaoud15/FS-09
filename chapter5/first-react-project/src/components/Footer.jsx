import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <h1>Footer</h1>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  background-color: #000;
  color: #fff;
`;
