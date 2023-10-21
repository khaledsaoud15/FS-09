const header = document.querySelector(".header");
const inc = document.querySelector(".inc");
const dec = document.querySelector(".dec");
const container = document.querySelector(".container");

const input = document.querySelector(".user");
const submit = document.querySelector(".getValue");
const inputvalue = document.querySelector(".inputvalue");

const getinputeValue = () => {
  inputvalue.textContent = input.value;
};

submit.addEventListener("click", getinputeValue);

// let counter = 0;

// const incrementCounter = () => {
//   counter++;
//   header.textContent = counter;
// };

// const decrementElement = () => {
//   if (counter < 0) {
//     return;
//   }
//   header.textContent = counter;
//   counter--;
// };

// inc.addEventListener("click", incrementCounter);

// dec.addEventListener("click", decrementElement);

// const items = [
//   {
//     id: 1,
//     title: "vans",
//     price: 150,
//     quantity: 10,
//   },
//   {
//     id: 2,
//     title: "AF1",
//     price: 200,
//     quantity: 5,
//   },
//   {
//     id: 3,
//     title: "Panda",
//     price: 100,
//     quantity: 3,
//   },
// ];

// const shop = [];

// const addToCart = (id) => {
//   const product = items.find((i) => i.id === id);
//   shop.push(product);

//   console.log(shop);
// };

// items.map((item) => {
//   container.innerHTML += `
//         <div class=product>
//         <h1>${item.title}</h1>
//         <p>${item.price}</p>
//         <p>${item.quantity}</p>
//         <button  onclick=addToCart(${item.id})>Add to Cart</button>
//         </div>
//     `;
// });
