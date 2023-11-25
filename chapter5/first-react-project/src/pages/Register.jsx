import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/usersSlice";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  const navigate = useNavigate();
  const [usersArr, setUsersArr] = useState([]);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerUser = (e) => {
    e.preventDefault();
    if (user.email === "" || user.password === "" || user.username === "") {
      return;
    }

    const findUser = usersArr.find((u) => u.email === user.email.trim());

    if (findUser) {
      alert("user already exist please login");
    } else {
      const newUser = { ...user, id: Math.random().toString(36).slice(2, 8) };
      setUsersArr((prev) => [...prev, newUser]);
      setInterval(() => {
        navigate("/");
      }, 2000);
    }

    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  console.log(usersArr);

  useEffect(() => {
    if (usersArr.length > 0)
      localStorage.setItem("users", JSON.stringify(usersArr));
  }, [usersArr]);

  return (
    <Container>
      <Head>Register</Head>
      <Form>
        <Input
          type="text"
          placeholder="username...."
          onChange={onchange}
          name="username"
          value={user.username}
          required
        />
        <Input
          type="email"
          placeholder="email...."
          onChange={onchange}
          name="email"
          value={user.email}
          required
        />
        <Input
          type="password"
          placeholder="password...."
          onChange={onchange}
          name="password"
          value={user.password}
          required
        />
        <Btn onClick={registerUser}>Register</Btn>
        <Other>
          Already have an Account please <NavLink to="/login">LOGIN</NavLink>
        </Other>
      </Form>
      {/* <Input type="password" /> */}
    </Container>
  );
};

export default Register;

const Container = styled.div``;
const Head = styled.h1`
  position: absolute;
  top: 20%;
  left: 50%;
  translate: -50% -50%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  justify-content: center;
  padding: 35px;
  background-color: #fff;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
`;
const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;
const Btn = styled.button`
  padding: 5px;
  width: 50%;
  margin: 0 auto;
  background-color: #ab8b67;
  color: #fff;
  border: none;
  border-radius: 4px;
`;

const Other = styled.p`
  font-size: 14px;
  text-align: center;
  a {
    text-transform: lowercase;
    margin-left: 5px;
    color: #ab8b67;
  }
`;
