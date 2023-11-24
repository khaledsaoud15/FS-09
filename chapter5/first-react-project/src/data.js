import smartwatch from "./images/smart.png";
import airpods from "./images/pods.png";
import wash from "./images/wash.png";
import micro from "./images/micro.png";
import delivery from "./images/delivery-truck.png";
import message from "./images/chat.png";
import q from "./images/quality.png";

import lip from "./images/lip1.png";
import lip2 from "./images/lip2.png";

import panda from "./images/panda1.png";
import panda2 from "./images/panda2.png";

import coat from "./images/coat1.png";
import coat2 from "./images/coat2.png";

import hammer from "./images/hammer1.png";
import hammer2 from "./images/hammer2.png";

export const slider = [
  {
    title: "Smart watch",
    img: smartwatch,
  },
  {
    title: "Air Pods",
    img: airpods,
  },
  {
    title: "Washing Machine",
    img: wash,
  },
  {
    title: "Microwave",
    img: micro,
  },
];

export const cards = [
  {
    title: "Fast delivery",
    text: "within 24h with astra express",
    icon: delivery,
  },

  {
    title: "Quality",
    text: "best quality and tessue",
    icon: message,
  },
  {
    title: "direct message",
    text: "chat with our costumer service",
    icon: q,
  },
];

export const items = [
  {
    id: 1,
    title: "Nike sb Panda",
    price: 350,
    category: ["men", "shoes", "clothes"],
    img: panda,
    img2: panda2,
  },
  {
    id: 2,
    title: "Trench Coat",
    price: 700,
    color: ["brown", "grey", "black"],
    category: ["men", "clothes"],
    img: coat,
    img2: coat2,
  },
  {
    id: 3,
    title: "Lipstick",
    price: 300,
    category: ["women", "makeup"],
    color: ["#ED0C0C", "#DD005C", "#AA2D88", "#684993", "#334F7D"],
    img: lip,
    img2: lip2,
  },
  {
    id: 4,
    title: "Hammer",
    price: 250,
    category: ["workshop", "work"],
    img: hammer,
    img2: hammer2,
  },
];
