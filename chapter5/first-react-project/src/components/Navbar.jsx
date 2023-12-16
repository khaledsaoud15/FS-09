import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "../images/logo2.png";
import userIcon from "../images/user.svg";
import cartt from "../images/cart.png";
import heart from "../images/heart.svg";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState(true);
  const [activeUser, setActiveUser] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [menue, setMenue] = useState(false);

  const [newNotif, setNewNotif] = useState(0);
  const [current, setCurrent] = useState(0);

  const [title, setTitle] = useState("FS-09 SHOP");

  const wishArr = useSelector((state) => state.wishlist.wishlist);
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    document.title = title;
  }, [title]);

  // useEffect(() => {
  //   if (user) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // }, []);

  return (
    <Container>
      <Logo src={logo} />
      <Ham onClick={() => setMenue(!menue)}>
        <span></span>
        <span></span>
        <span></span>
      </Ham>
      <Content menue={menue}>
        <Links>
          <NavLink to="/">
            <a href="#" onClick={() => setTitle("Home")}>
              Home
            </a>
          </NavLink>
          <a href="#" onClick={() => setTitle("About")}>
            About
          </a>
          <a href="#" onClick={() => setTitle("Contact")}>
            Contact
          </a>
          <a href="#" onClick={() => setTitle("Blog")}>
            Blog
          </a>
          <div className="categories">
            <a href="#" onClick={() => setIsActive(!isActive)}>
              Categories
            </a>
            <DropDown isActive={isActive}>
              <p onClick={() => setTitle("Tech")}>Tech</p>
              <p onClick={() => setTitle("Home Appliance")}>Home Appliance</p>
            </DropDown>
          </div>
        </Links>
        {active ? (
          <User>
            <U onClick={() => setActiveUser(!activeUser)}>
              <img src={userIcon} alt="" />
              <h1>khaled</h1>
            </U>
            <NewNotif active={activeUser}>
              <New>NEW</New>
              <NumberN>{newNotif}</NumberN>
            </NewNotif>
            <UserDropMenue active={activeUser}>
              <h1>Profile</h1>

              <div className="cart">
                <Nlink to="/cart">
                  <h2>Bag</h2>
                  <div className="num">
                    <p>{cart.length}</p>
                    <img src={cartt} alt="" />
                  </div>
                </Nlink>
              </div>
              <div className="cart">
                <Nlink to="/wish">
                  <h2>Wishlist</h2>
                  <div className="num">
                    <p>{wishArr.length}</p>
                    <img src={heart} alt="" />
                  </div>
                </Nlink>
              </div>
              <button>Logout</button>
            </UserDropMenue>
          </User>
        ) : (
          <Buttons>
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>
            <NavLink to="/register">
              <button>Register</button>
            </NavLink>
          </Buttons>
        )}
      </Content>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  height: 80px;
  position: relative;
  z-index: 9999999999999999999;
  background-color: #ab8b67;

  @media (max-width: 820px) {
    padding: 0 30px;
  }
`;

const Ham = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  span {
    width: 20px;
    height: 2px;
    background-color: #000;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;

  @media (max-width: 768px) {
    display: ${(props) => (props.menue ? "none" : "flex")};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    gap: 20px;
    background-color: #e0b686;
    padding: 15px;
    /* overflow: hidden; */
    height: auto;
  }
`;
const Logo = styled.img`
  height: 100%;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  .categories {
    position: relative;
  }
  a {
    color: #000;
    text-decoration: none;
    font-size: 18px;
    color: #402e32;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const DropDown = styled.div`
  position: absolute;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  width: 150px;
  padding: 10px;
  box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  top: 150%;
  left: -50%;
  background-color: #fff;
  z-index: 999;
  height: 90px;
  p {
    cursor: pointer;
    padding: 3px;
    border-radius: 4px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      font-weight: 700;
    }
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  img {
    width: 25px;
  }
  h1 {
    font-size: 16px;
    font-weight: 400;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  button {
    border-radius: 4px;
    padding: 10px 15px;
    border: none;
    background-color: #ffa500;
    color: #fff;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);

    &:hover {
      background-color: #ffa60092;
    }
    &:active {
      box-shadow: -1px -3px 10px rgba(0, 0, 0, 0.3);
    }

    cursor: pointer;

    &:nth-child(1) {
      background-color: #fff;
      color: #514538;
      &:hover {
        background-color: #ffffff92;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    width: 50%;
  }
`;

const UserDropMenue = styled.div`
  position: absolute;
  height: auto;
  h1 {
    font-weight: 700;
    cursor: pointer;
    font-size: 14px;
    padding: 5px;
    border-radius: 4px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  top: 120%;
  left: -20%;
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  z-index: 9999;
  border-radius: 4px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
  width: 150px;
  gap: 15px;
  .cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-radius: 4px;
    width: 90%;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    img {
      height: 15px;
      width: 15px;
    }
    .num {
      position: relative;
      p {
        position: absolute;
        top: -50%;
        right: -90%;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: red;
        color: #fff;
      }
    }
  }

  button {
    padding: 5px;
    border: none;
    border-radius: 4px;
    background-color: #ab8b67;
    color: #fff;
    cursor: pointer;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.4);
  }
`;

const U = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const NewNotif = styled.div`
  position: absolute;
  top: -70%;
  display: flex;
  align-items: center;
  gap: 5px;
  right: -50%;
  padding: 5px;
  border-radius: 20px;
  background-color: red;
  color: #fff;
`;
const New = styled.p`
  font-size: 10px;
  font-weight: 400;
`;
const NumberN = styled.p`
  font-size: 12px;
`;

const Nlink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 4px;
  width: 90%;
  cursor: pointer;

  h2 {
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }
  img {
    height: 15px;
    width: 15px;
  }
`;
