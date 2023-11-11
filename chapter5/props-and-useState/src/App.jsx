import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [range, setRange] = useState(5);
  const [rc, setRc] = useState([]);

  const [choices, setChoices] = useState([
    "lowercase",
    "uppercase",
    "number",
    "symbole",
  ]);
  const [randomise, setRandomise] = useState("");

  const symbols = "&é'#('ç_()àç=)é%$ù^^";
  const L = "absdefghijklmnopqrstuvwxyz";
  const U = L.toUpperCase();

  const N = "0123456789";

  const getRandomLSUN = () => {
    let newL = "";
    let newN = "";
    let newU = "";
    let newS = "";
    let res = "";

    if (rc.includes("uppercase")) {
      for (let i = 0; i < range; i++) {
        const randomU = U[Math.floor(Math.random() * U.length)];
        newU += randomU;
      }
    }
    if (rc.includes("lowercase")) {
      for (let i = 0; i < range; i++) {
        const randomL = L[Math.floor(Math.random() * L.length)];
        newL += randomL;
      }
    }
    if (rc.includes("symbole")) {
      for (let i = 0; i < range; i++) {
        const randomS = symbols[Math.floor(Math.random() * symbols.length)];
        newS += randomS;
      }
    }
    if (rc.includes("number")) {
      for (let i = 0; i < range; i++) {
        const randomN = N[Math.floor(Math.random() * N.length)];
        newN += randomN;
      }
    }

    res = newL + newN + newS + newU;

    let fRes = "";

    for (let i = 0; i < range; i++) {
      fRes += res[Math.floor(Math.random() * res.length)];
    }

    setRandomise(fRes);
  };

  const getValue = (val) => {
    if (rc.includes(val)) {
      rc.splice(rc.indexOf(val), 1);
      setRc([...rc]);
    } else {
      rc.push(val);
    }
  };

  return (
    <Container>
      <Password>{randomise}</Password>
      <Range>
        <input
          type="range"
          min={5}
          value={range}
          max={10}
          onChange={(e) => setRange(e.target.value)}
        />
      </Range>
      <Choices>
        {choices.map((c) => {
          return (
            <Choice>
              <input type="checkbox" value={c} onClick={() => getValue(c)} />
              <p>{c}</p>
            </Choice>
          );
        })}
      </Choices>
      <Button onClick={getRandomLSUN}>Generate</Button>
    </Container>
  );
};

export default App;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 15px;
  background-color: #010a36;
  color: #fff;
  border-radius: 4px;
`;
const Password = styled.h1`
  text-align: center;
  width: 100%;
  padding: 10px 0;
  background-color: #050b2a;
  color: #fff;
  border-radius: 4px;
`;
const Range = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #050b2a;
  border-radius: 4px;
  input {
    width: 80%;
    accent-color: #fff;
  }
`;
const Choices = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;
const Choice = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Button = styled.button`
  margin-top: auto;
  margin-bottom: 20px;
  padding: 10px;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  border: none;
  font-weight: 700;
  border-radius: 4px;
`;
