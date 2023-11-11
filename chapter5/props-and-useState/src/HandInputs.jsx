import React, { useState } from "react";
import styled from "styled-components";
import bg from "./bg.png";

const HandlInputs = () => {
  const [users, setUsers] = useState([]);
  const [user, setuser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const addUser = () => {
    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      alert("All fields are required");
    } else {
      const findUser = users.find((u) => u.email === user.email);
      if (findUser) {
        alert("you already have a free trial");
      } else {
        setUsers([...users, user]);
        alert("Success");
      }
    }

    setuser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <Container bg={bg}>
      <div className="left">
        <h1>Learn to code by watching others</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea illo
          distinctio aliquam perferendis illum, consequuntur veritatis hic ad.
          Asperiores.
        </p>
      </div>
      <div className="right">
        <button className="trial">
          Try it free 7 days <span>then $20/mo. therafter</span>
        </button>
        <div className="inputs">
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={handleSubmit}
            value={user.firstName}
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={handleSubmit}
            value={user.lastName}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleSubmit}
            value={user.email}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleSubmit}
            value={user.password}
          />
          <button className="submit" onClick={addUser}>
            Free Trial
          </button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            aliquam,<a href="">Terms and services</a>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default HandlInputs;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 80%;
  height: 80vh;
  background-color: #ff7978;
  padding: 50px;
  border-radius: 4px;
  background-image: url(${(props) => props.bg});
  background-size: 100%;

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #fff;
    h1 {
      font-size: 3.5rem;
    }
    p {
      line-height: 25px;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 60vh;
    gap: 15px;
    .trial {
      padding: 10px;
      display: flex;
      align-items: center;
      gap: 3px;
      justify-content: center;
      background-color: #3232d6;
      cursor: pointer;
      color: #fff;
      font-weight: 700;
      border: none;
      border-radius: 4px;
      span {
        color: #c9c9c9;
        font-weight: 400;
      }
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 25px;
    background-color: #fff;
    height: 50vh;
    border-radius: 4px;
    input {
      padding: 10px 25px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
    }
    .submit {
      padding: 10px;
      border: none;
      background-color: #1ce91c;
      border-radius: 4px;
      cursor: pointer;
      color: #fff;
    }

    p {
      font-size: 12px;
      margin-bottom: auto;
      display: flex;
      align-items: center;
      gap: 3px;
      justify-content: center;
      font-weight: 400;
      a {
        color: #ff7978;
        text-decoration: none;
        font-weight: 700;
      }
    }
  }
`;
