import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Products from "./components/Products";
import { products } from "./data";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

const App = () => {
  const [data, setData] = useState(products);
  const [cart, setCart] = useState([]);
  const [like, setLikes] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addToLike = (id) => {
    const findProduct = data.find((p) => p.id === id);
    const inLike = like.find((p) => p.id === findProduct.id);

    if (inLike) {
      like.splice(like.indexOf(inLike), 1);
    } else {
      like.push(findProduct);
    }

    setLikes([...like]);
  };

  return (
    <div>
      <Router>
        <Navbar like={like} cartArr={cart} />
        <Routes>
          <Route
            path="/"
            element={<Home data={data} addToLike={addToLike} />}
          />
          <Route
            path="/product/:id"
            element={
              <Product
                addToLike={addToLike}
                cart={cart}
                setCart={setCart}
                data={data}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
