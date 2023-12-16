import React from "react";
import styled from "styled-components";

const NewsLetter = () => {
  return (
    <Container>
      <Inputs>
        <Input type="text" placeholder="Submit to our newsLetter" />
        <Button>Submit</Button>
      </Inputs>
    </Container>
  );
};

export default NewsLetter;

const Container = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ab8b67;
  margin-top: 80px;
`;
const Inputs = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  height: 50px;
  background-color: #fff;
  border-radius: 4px;
`;
const Input = styled.input`
  width: 90%;
  padding: 10px;
  border: none;
  outline: none;
`;
const Button = styled.button`
  width: 10%;
  height: 100%;
  border: none;
  outline: none;
  background-color: #ffa500;
  border-radius: 0 4px 4px 0;
  color: #fff;
`;
