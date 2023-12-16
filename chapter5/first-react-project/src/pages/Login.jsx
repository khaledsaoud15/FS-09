import React, { useEffect, useState } from "react";
import { login } from "../redux/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [usersStorage, setUsersStorage] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const userRedux = useSelector((state) => state.users.user);

  const onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const allUsers = JSON.parse(sessionStorage.getItem("users"));
    if (allUsers) {
      setUsersStorage(allUsers);
    }
  }, []);

  const loginUser = (e) => {
    e.preventDefault();
    const singleUser = usersStorage.find((u) => u.email === user.email);
    if (singleUser) {
      if (singleUser.password === user.password) {
        dispatch(login(singleUser));
        setInterval(() => {
          navigate("/");
        }, 2000);
      } else {
        alert("password incorrect");
      }
    }
  };

  console.log(userRedux);

  return (
    <Container>
      <Head>Login</Head>
      <Form>
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
        <Btn onClick={loginUser}>Login</Btn>
        <Other>
          You dont have an account please{" "}
          <NavLink to="/register">Register</NavLink>
        </Other>
      </Form>
      {/* <Input type="password" /> */}
    </Container>
  );
};

export default Login;

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
