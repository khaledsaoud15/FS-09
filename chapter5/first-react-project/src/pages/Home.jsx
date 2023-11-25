import React from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Products from "../components/Products";
import { items } from "../data";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Cards />
      <Products products={items} />
    </div>
  );
};

export default Home;
