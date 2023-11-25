import { useState } from "react";
import styled from "styled-components";
import refresh from "../images/refresh.png";
import { NavLink } from "react-router-dom";

const Products = ({ products }) => {
  const [search, setSearch] = useState("");
  const [filterProduct, setFilteredProduct] = useState(products);

  const filtering = () => {
    if (search !== "") {
      const filter = products.filter(
        (f) =>
          f.category.includes(search) ||
          f.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProduct(filter);
    } else {
      setFilteredProduct(products);
    }
    setSearch("");
  };

  return (
    <Container>
      <Tcontainer>
        <Title>Top Products</Title>

        <Inputs>
          <Input
            type="text"
            placeholder="Search by category of name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={filtering}>
            {search !== "" ? "filter" : <img src={refresh} />}
          </Button>
        </Inputs>
      </Tcontainer>
      <ProductGrid>
        {filterProduct.map((data) => {
          return (
            <Card>
              <CardImg src={data.img} />
              <CardTitle>
                <b>Title</b>: {data.title}
              </CardTitle>
              <CardReviews>
                <Price>
                  <b>Price</b>: {data.price}$
                </Price>
                <Review>
                  <b>Reviews</b>: 45k
                </Review>
              </CardReviews>
              <Buttons>
                <NavLink to={`/product/${data.id}`}>
                  <ButtonCheck>Check Item</ButtonCheck>
                </NavLink>
              </Buttons>
            </Card>
          );
        })}
      </ProductGrid>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 5px;
`;

const Tcontainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  background-color: #fff;
  height: 45px;
`;
const Input = styled.input`
  width: 90%;
  border: none;
  outline: none;
  padding: 0 10px;
`;
const Button = styled.button`
  width: 15%;
  height: 100%;
  border: none;
  background-color: #ffa500;
  color: #fff;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  &:active {
    background-color: #ca8403;
  }

  img {
    width: 25px;
    height: 25px;
  }
`;
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 30px;
  justify-content: center;
  margin-top: 30px;
`;
const Card = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #eec391;
  border-radius: 4px;
`;
const CardTitle = styled.div``;
const CardImg = styled.img`
  width: 80%;
  height: 35vh;
  margin: 0 auto;
  filter: drop-shadow(5px 10px 2px rgba(0, 0, 0, 0.6));
  /* object-fit: cover; */
`;

const CardReviews = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Price = styled.span``;
const Review = styled.p``;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
`;
const ButtonCheck = styled.button`
  padding: 5px 25px;
  border: none;
  margin: 0 auto;
  background-color: #000;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  /* width: 100%; */
`;
