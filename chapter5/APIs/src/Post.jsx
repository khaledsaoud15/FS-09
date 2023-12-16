import axios from "axios";
import React, { useState } from "react";

const Post = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    categpory: "",
    rating: {
      rate: "",
      count: "",
    },
  });

  const handlChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const addToProducts = async () => {
    try {
      await axios.post("https://fakestoreapi.com/products", product);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handlChange}
      />
      <input
        type="text"
        placeholder="desc"
        name="description"
        onChange={handlChange}
      />
      <input
        type="text"
        name="category"
        placeholder="category"
        onChange={handlChange}
      />
      <input
        type="number"
        name="price"
        placeholder="price"
        onChange={handlChange}
      />
      <input
        type="number"
        name="rate"
        placeholder="rate"
        onChange={handlChange}
      />
      <input
        type="number"
        name="count"
        placeholder="count"
        onChange={handlChange}
      />

      <button onClick={addToProducts}>Add</button>
    </div>
  );
};

export default Post;
