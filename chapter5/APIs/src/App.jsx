import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      const data = await axios.get("https://fakestoreapi.com/products");
      setProducts(data.data);
    };

    getAllData();
  }, []);

  console.log(products);
  return (
    <div>
      <Post />
    </div>
  );
};

export default App;
