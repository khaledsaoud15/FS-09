import React from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Products from "../components/Products";
import { items } from "../data";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Cards />
      <Products products={items} />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
