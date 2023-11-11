import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

import empty from "../images/star-empty.svg";
import half from "../images/star-half.svg";
import full from "../images/star-fill.svg";
import { NavLink } from "react-router-dom";

const Products = ({ data, addToLike }) => {
  return (
    <Container>
      <h1>Products</h1>
      <Grid>
        {data.map((d) => {
          return (
            <div className="cart">
              <NavLink to={`/product/${d.id}`}>
                <img src={d.img} alt="" />
              </NavLink>
              <h1>{d.title}</h1>
              <div className="ratings">
                <div className="rate">
                  <p>Rating:</p>
                  <ReactStars
                    count={5}
                    size={24}
                    value={d.rating}
                    edit={false}
                    isHalf={true}
                    emptyIcon={empty}
                    halfIcon={half}
                    fullIcon={full}
                    activeColor="#8257CC"
                    color="#fff"
                  />
                </div>
                <button onClick={() => addToLike(d.id)}>Add to like</button>
              </div>
            </div>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  padding: 80px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  .cart {
    width: 100%;
    height: 55vh;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 10px;
    h1 {
      text-align: center;
    }
    img {
      width: 40%;
      height: 35vh;
      margin: 0 auto;
    }
    .ratings {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .rate {
        display: flex;
        align-items: center;
        gap: 5px;
      }
      button {
        padding: 5px;
        border: none;
        background-color: #8257cc;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
`;
