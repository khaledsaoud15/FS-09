import condor from "./images/c4.png";
import samsung from "./images/samsung.png";
import iphone from "./images/iphone14.png";

export const products = [
  {
    id: 1,
    title: "Samsung galaxy s20",
    price: 1000,
    colors: ["green", "blue", "black", "pink"],
    img: samsung,
    rating: 3.5,
  },
  {
    id: 2,
    title: "Iphone 14",
    price: 950,
    colors: ["grey", "black", "pink"],
    img: iphone,
    rating: 4.5,
  },
  {
    id: 3,
    title: "Condor c4",
    price: 10000,
    colors: [
      "green",
      "blue",
      "black",
      "pink",
      "white",
      "yellow",
      "cyan",
      "grey",
      "crimson",
    ],
    img: condor,
    rating: 5,
  },
];
