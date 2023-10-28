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

const heartIcon = document.querySelector(".heart");
const cartIcon = document.querySelector(".cart");

heartIcon.addEventListener("click", () => {
  pop_up_wish.classList.add("active");
});

cartIcon.addEventListener("click", () => {
  pop_up_cart.classList.add("active");
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
  } else {
    count = 0;
    cartArray.push({
      ...findItem,
      count: (count += 1),
      _id: Math.random().toString(36).slice(2, 8),
    });
  }

  removeFromWishList(id);
  renderPopUpCart();

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
        <img src=${c.img} alt="" class="pop-img" />
        <div class="content">
          <h4>Title: ${c.title}</h4>
          <p>Price: $${c.price}</p>
          
        </div>
        <div class="content">
        <p>Total: $${c.price * c.count}</p>
        <p>Quantity: ${c.count}</p>
          </div>
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
    pop_up_wish.classList.remove("active");
  }
};

// ----------------------REMOVE ITEM FROM WISH LIST-------------------

const removeFromWishList = (id) => {
  const el = wishArray.find((w) => w.id === id);
  wishArray.splice(el, 1);
};

