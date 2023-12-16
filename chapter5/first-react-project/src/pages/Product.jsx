import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../data";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToWishList } from "../redux/likeSlice";
import Navbar from "../components/Navbar";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [hovered, setHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [colord, setColor] = useState("");
  const check = useSelector((state) => state.wishlist.check);

  const dispatch = useDispatch();

  const incAndDec = (op) => {
    if (op === "inc") {
      setQuantity((prev) => prev + 1);
    } else if (op === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCartArr = () => {
    const { color, ...others } = product;

    dispatch(
      addToCart({
        ...others,
        color: colord,
        quantity,
        _id: Math.random().toString(36).slice(2, 8),
        totalPrice: quantity * product.price,
      })
    );

    setQuantity(1);
  };

  const addToWish = (id) => {
    const findItem = items.find((i) => i.id === id);
    if (findItem) {
      dispatch(addToWishList(findItem));
    } else {
      dispatch(addToWishList(findItem.id));
    }
  };

  useEffect(() => {
    const item = items.find((i) => i.id === +id);

    setProduct(item);
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Img
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          src={product.img2 && hovered ? product.img2 : product.img}
          alt=""
        />

        <Right>
          <Title>{product.title}</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi
            optio voluptas molestias hic. Magni architecto velit dolore commodi
            culpa recusandae, iure assumenda. Animi, aspernatur in asperiores,
            voluptates vel maxime placeat sit nostrum vero nesciunt possimus
            voluptatem commodi corrupti accusantium?
          </Desc>
          <Pcontainer>
            <ColorCntr>
              {product.color && (
                <>
                  {product.color.map((c) => (
                    <Color c={c} onClick={() => setColor(c)}></Color>
                  ))}
                </>
              )}
            </ColorCntr>
            <Price>Price: {product.price}</Price>
          </Pcontainer>
          <Count>
            <Button onClick={() => incAndDec("dec")}>-</Button>
            <Counter>{quantity}</Counter>
            <Button onClick={() => incAndDec("inc")}>+</Button>
          </Count>
          <Buttons>
            <ButtonAdd onClick={() => addToCartArr()}>Add to Cart</ButtonAdd>
            <ButtonAdd2 onClick={() => addToWish(product.id)}>
              {check === false ? "Add to Wishlist" : "Remove from Wishlist"}
            </ButtonAdd2>
          </Buttons>
        </Right>
      </Container>
    </>
  );
};

export default Product;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;
  justify-content: space-around;
`;

const Img = styled.img`
  width: 40%;
  height: 80vh;
  filter: drop-shadow(8px 8px 2px rgba(0, 0, 0, 0.5));
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Title = styled.h1``;
const Desc = styled.p``;
const Pcontainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Price = styled.span``;
const Count = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`;
const Button = styled.button`
  padding: 3px 10px;
  border: none;
  background-color: #ab8b67;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
`;
const Counter = styled.p``;
const ButtonAdd = styled.button`
  background-color: #ab8b67;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  border: none;
  padding: 10px;
  width: 25%;
`;
const ButtonAdd2 = styled.button`
  background-color: #ab8b67;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  border: none;
  padding: 10px;
  width: 25%;
`;
const ColorCntr = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Color = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.c};
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
