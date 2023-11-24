import React from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Products from "../components/Products";
import { items } from "../data";

const Home = () => {
  return (
    <div>
      <Header />
      <Cards />
      <Products products={items} />
    </div>
  );
};

export default Home;
