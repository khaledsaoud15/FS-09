import React, { useCallback, useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";

const Product = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [products, setProducts] = useState({
    title: "",
    id: "",
    desc: "",
    price: 0,
    inStock: true,
  });

  const handlChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  const update = useCallback((id) => {
    const existItem = (id) => {
      const i = state.cart.find((item) => item.id === id);
      setProducts(i);
    };
    existItem();
  }, []);

  const addToCart = (id) => {
    const find = state.cart.find((item) => item.id === id);

    if (find) {
      dispatch({ type: "UPDATE_CART", payload: products });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...products, id: Math.random().toString(36).slice(2, 8) },
      });
    }

    setProducts({
      title: "",
      price: "",
      desc: "",
      inStock: true,
    });
  };

  const del = useCallback((id) => {
    const deleteFromCart = (id) => {
      dispatch({ type: "DELETE_FROM_CART", payload: id });
    };

    deleteFromCart();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        name="title"
        value={products.title}
        onChange={handlChange}
      />
      <input
        type="text"
        placeholder="desc"
        name="desc"
        value={products.desc}
        onChange={handlChange}
      />
      <input
        type="number"
        placeholder="price"
        name="price"
        value={products.price}
        onChange={handlChange}
      />
      <select>
        <option onChange={handlChange} value={true}>
          True
        </option>
        <option onChange={handlChange} value={false}>
          false
        </option>
      </select>

      <button onClick={() => addToCart(products.id)}>Add</button>

      {state.cart.map((item) => {
        return (
          <div className="cart">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <p>{item.price}</p>
            <button onClick={() => update(item.id)}>Update</button>
            <button onClick={() => del(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
