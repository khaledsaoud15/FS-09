import React, { useEffect, useState } from "react";
import { items } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    const slideItem = items.filter((i) => i.slide === true);

    setSlider(slideItem);
  }, []);

  return (
    <Container>
      <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: false,
        }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {slider.map((s) => {
          return (
            <SwiperSlide>
              <Card>
                <div className="left">
                  <h1>{s.title}</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veritatis numquam ipsa neque iusto dicta, mollitia
                    voluptatum labore id. Veniam, atque.
                  </p>
                  <NavLink to={`/product/${s.id}`}>
                    <button>SEE MORE</button>
                  </NavLink>
                </div>
                <img src={s.img} alt="" />
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: auto;
  background-color: #fff;
  padding: 50px;
  @media (max-width: 768px) {
    height: auto;
    padding: 15px;
  }
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: space-around;
  justify-content: center;
  img {
    width: auto;
    height: 50vh;
    filter: drop-shadow(10px 10px 2px rgba(0, 0, 0, 0.5));
  }
  .left {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 50%;
    h1 {
      font-size: 3rem;
      text-transform: uppercase;
    }
    p {
      font-size: 18px;
      line-height: 30px;
      width: 80%;
    }
    button {
      width: 30%;
      border-radius: 4px;
      padding: 10px 15px;
      border: none;
      background-color: #ffa500;
      color: #fff;
      box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    img {
      width: 50%;
      height: 30vh;
    }
    .left {
      width: 100%;
      h1 {
        font-size: 25px;
      }
      p {
        font-size: 14px;
        line-height: 20px;
        width: 100%;
      }
      button {
        width: 100%;
      }
    }
  }
`;
