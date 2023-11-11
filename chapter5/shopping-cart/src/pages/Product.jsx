import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";
import styled from "styled-components";

const Product = ({ addToLike, cart, setCart, data, quantity, setQuantity }) => {
  const productClick = useParams();
  const [color, setColor] = useState("");
  const [active, setActive] = useState(false);

  const [p, setP] = useState({});

  const incAndDec = (op) => {
    if (op === "inc") {
      setQuantity(quantity + 1);
    } else if (op === "dec" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = (id) => {
    // Find the item in the data array
    const findProduct = data.find((p) => p.id === id);
    // find the item in the cart array
    const inCart = cart.find((p) => p.id === findProduct.id);

    const { colors, ...prod } = findProduct;

    if (color === "") {
      return;
    }

    if (inCart && inCart.color === color) {
      inCart.quantity = quantity;
      inCart.total = inCart.quantity * inCart.price;
      inCart.color = color;
    } else {
      setQuantity(1);
      cart.push({
        ...prod,
        quantity,
        total: quantity * findProduct.price,
        color: color,
      });
    }

    setCart([...cart]);

    console.log(cart);
  };

  const opacityColor = (c) => {
    setColor(c);
  };

  useEffect(() => {
    const findItem = products.find((p) => p.id === Number(productClick.id));
    setP(findItem);
  }, []);

  return (
    <Container>
      <Left>
        <img src={p.img} alt="" />
      </Left>
      <Right>
        <h1>{p.title}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          tempora possimus nemo est facere distinctio dolor, eos sint
          consequatur? Enim vitae nobis eaque esse porro saepe, in eveniet dicta
          adipisci consequatur dolorem aliquid provident odio neque iste
          necessitatibus sed unde!
        </p>
        <p>{p.price}</p>
        <div className="items">
          <div className="colors">
            {p.colors?.map((c) => {
              return (
                <div className="colorContainer">
                  <Color c={c}></Color>
                  <Radio
                    type="radio"
                    name="color"
                    value={c}
                    onChange={() => opacityColor(c)}
                  />
                </div>
              );
            })}
          </div>
          <div className="total">
            <button onClick={() => incAndDec("dec")}>-</button>
            <span>{quantity}</span>
            <button
              onClick={() => {
                incAndDec("inc");
              }}
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(p.id);
          }}
        >
          Add to Cart
        </button>
        <button onClick={() => addToLike(p.id)}>Add to Like</button>
      </Right>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  padding: 80px;
`;
const Left = styled.div``;
const Right = styled.div`
  .colors {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
const Color = styled.div`
  background-color: ${(props) => props.c};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
`;

const Radio = styled.input``;
