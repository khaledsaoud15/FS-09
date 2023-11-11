import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";

const Home = ({ data, addToLike }) => {
  return (
    <div>
      <Header />
      <Products data={data} addToLike={addToLike} />
    </div>
  );
};

export default Home;
