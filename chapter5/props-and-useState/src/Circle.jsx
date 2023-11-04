import React, { useState } from "react";
import styled from "styled-components";

const Circle = () => {
  const [circles, setCircles] = useState([]);
  const [removedCircle, setRemovedCircle] = useState([]);



  const createCircle = (e) => {
    const { clientX, clientY } = e;

    if ((clientX <= 86 && clientY <= 40) || (clientX <= 180 && clientY <= 40))
      return;
    setCircles([...circles, { x: clientX, y: clientY }]);
  };

  const undo = () => {
    if (circles.length === 0) return;
    removedCircle.push(circles.pop());
    setCircles([...circles]);
  };

  const redo = () => {
    setCircles([...circles, removedCircle.pop()]);
  };
  return (
    <Container onClick={createCircle}>
      {circles.length !== 0 && (
        <Button left="0" onClick={undo}>
          Undo
        </Button>
      )}
      {removedCircle.length !== 0 && (
        <Button left="90" onClick={redo}>
          Redo
        </Button>
      )}

      {circles.map((c) => {
        return <Circlee x={c.x} y={c.y}></Circlee>;
      })}
    </Container>
  );
};

export default Circle;
const Container = styled.div`
  height: 100vh;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  left: ${(props) => props.left}px;
  z-index: 99999;
  padding: 10px 25px;
`;

const Circlee = styled.div`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  translate: -50% -50%;
  width: 30px;
  height: 30px;
  border: 10px solid green;
  border-radius: 50%;
`;
