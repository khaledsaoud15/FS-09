const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
});

var typed = new Typed(".type", {
  strings: ["30% DISCOUNT", "Till friday", "Dont be Late!!!!"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
  showCursor: false,
});

const pop_up_cart = document.querySelector(".cart-item");
const pop_up_wish = document.querySelector(".wish");
const closeIcon = document.querySelector(".close");

const heartIcon = document.querySelector(".heart");
const cartIcon = document.querySelector(".cart");

heartIcon.addEventListener("click", () => {
  pop_up_wish.classList.add("active");
  closeIcon.classList.add("active");
});

cartIcon.addEventListener("click", () => {
  pop_up_cart.classList.add("active");
  closeIcon.classList.add("active");
  checkout.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  pop_up_cart.classList.remove("active");
  pop_up_wish.classList.remove("active");
  closeIcon.classList.remove("active");
  checkout.classList.remove("active");
});

const list = document.querySelector(".list");
const cart_count = document.querySelector(".cart-count");
const wish_count = document.querySelector(".heart-count");

const cartArray = [];
const wishArray = [];

// ----------ADD PRODUCT TO CART ARRAY
let count = 0;

const addToCartArray = (id) => {
  const findItem = data.find((d) => d.id === id);
  const includesItem = cartArray.find((i) => i.id === findItem.id);
  count++;

  if (includesItem) {
    includesItem.count = count;
    includesItem.total = count * includesItem.price;
  } else {
    count = 0;
    cartArray.push({
      ...findItem,
      count: (count += 1),
      total: count * findItem.price,
      _id: Math.random().toString(36).slice(2, 8),
    });
  }

  renderPopUpCart();

  renderCheckout();

  cart_count.textContent = cartArray.length;
};

// -----------------RENDERING PRODUCTS----------------------
const renderData = () => {
  data.map((d) => {
    list.innerHTML += `
        <div class="swiper-slide card">
        <img src=${d.img} class="phone" alt="" />
        <h1>${d.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          veritatis maxime amet alias non in?
        </p>
        <div class="price">
          <p>Price:$<b>${d.price}</b></p>
          <span>Review:<b>50k</b></span>
        </div>
        <div class="buttons">
          <button onclick=addToCartArray(${d.id}) >Add To Cart</button>
          <img
            src="images/heart_6521659.svg"
            alt=""
            class="heart-click"
            onclick=beep(${d.id})
          />
        </div>
      </div>
        `;
  });
  anime({
    targets: ".heart-click",
    scale: [1, , 1.2, 1],
    duration: 1000,
    loop: true,
    ease: "linear",
  });
};

renderData();
// -------------------------REMOVE ELEMENT FROM WISH LIST AND ADD IT IF NOT EXISTING-----------------
const beep = (id) => {
  const findWish = data.find((w) => w.id === id);
  const el = wishArray.find((w) => w.id === id);
  const cartEl = cartArray.find((ell) => ell.id === id);

  console.log(cartEl);

  if (cartEl) {
    alert("Product Already Baught");

    return;
  }

  if (el) {
    removeFromWishList(id);
  } else {
    wishArray.push(findWish);
  }

  wish_count.textContent = wishArray.length;
  renderPopUpWish();
};

// ------------------RENDERING THE CART LIST---------------------------
const renderPopUpCart = () => {
  pop_up_cart.innerHTML = "";
  cartArray.map((c) => {
    pop_up_cart.innerHTML += `

        <div class="wish-card">
        <div class="img-container">
        <img src=${c.img} alt="" class="pop-img" />
        </div>
        <div class="content">
          <h4>Title: ${c.title}</h4>
          <p>Price: $${c.price}</p>
          
        </div>
        <div class="content">
        <p>Total: <b>$${c.total}</b></p>
        <div class="count-price">
        <button class="dec" onclick=incrementAndDecrementPriceProduct("dec",${c.id}) >-</button>
        <p><b>${c.count}</b></p>
        <button class="inc" onclick=incrementAndDecrementPriceProduct("inc",${c.id}) >+</button>
        </div>
        </div>
        <img src="images/delete.png" class="delete-bin" onclick=removeFromCartList(${c.id})>
      </div>


      
        `;
  });
};

// -------------------RENDERING THE WISH LIST------------------

const renderPopUpWish = () => {
  pop_up_wish.innerHTML = "";
  wishArray.map((w) => {
    pop_up_wish.innerHTML += `
    <div class="wish-card">
    <img src=${w.img} class="pop-img" alt="" />
    <div class="content">
      <h4>Title: ${w.title}</h4>
      <p>Price: $${w.price} </p>
    </div>
    <button onclick=switchElements(${w.id})>Buy</button>
  </div>
    `;
  });
};

// ---------------SWITCH FROM WISH LIST TO CART LIST----------

const switchElements = (id) => {
  addToCartArray(id);
  removeFromWishList(id);
  renderPopUpCart();
  renderPopUpWish();
  cart_count.textContent = cartArray.length;
  wish_count.textContent = wishArray.length;
  if (wishArray.length === 0) {
    pop_up_wish.innerHTML = `<h1>your list is Empty</h1>`;
  }
};

// ----------------------REMOVE ITEM FROM WISH LIST-------------------

const removeFromWishList = (id) => {
  const el = wishArray.find((w) => w.id === id);
  wishArray.splice(wishArray.indexOf(el), 1);
};
// ----------------------REMOVE ITEM FROM CART LIST-------------------

const removeFromCartList = (id) => {
  const el = cartArray.find((w) => w.id === id);
  cartArray.splice(cartArray.indexOf(el), 1);
  cart_count.textContent = cartArray.length;
  renderCheckout();
  renderPopUpCart();
};

// --------------INCREMENT COUNT AND UPDATE POP UP CART-------------------

const incrementAndDecrementPriceProduct = (op, id) => {
  const includesItem = cartArray.find((i) => i.id === id);

  if (op === "inc") {
    includesItem.count++;
    includesItem.total += includesItem.price;
  } else if (op === "dec" && includesItem.count > 1) {
    includesItem.count--;
    includesItem.total -= includesItem.price;
  }

  renderPopUpCart();
  renderCheckout();
};

// -------------------CHECKOUT AND TOTAL PRICE------------
const checkout = document.querySelector(".total-price");

const renderCheckout = () => {
  let total = 0;
  cartArray.map((c) => {
    total += c.total;
    return total;
  });

  console.log(checkout);

  checkout.innerHTML = `
    
    <h1>Products:${cartArray.length}</h1>
    <p>total Price: $${total}</p>
    <Button> Proceed to Checkout</button>
    
  `;
};
