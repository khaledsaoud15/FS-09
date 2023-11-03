import { products } from "../data";
import bin from "../images/delete.png";
import close from "../images/close.png";

const Products = () => {
  return (
    <div>
      <img src={bin} alt="" />
      <img src={close} alt="" />
      {products.map((p) => {
        return (
          <div className="card">
            <h1>{p.name}</h1>
            <p>{p.price}$</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
