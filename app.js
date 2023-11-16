const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "AirForce",
    price: "$119",
    colors: [
      {
        code: "black",
        img: "img/air.png",
      },
      {
        code: "darkblue",
        img: "img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Jordan",
    price: "$149",
    colors: [
      {
        code: "lightgray",
        img: "img/jordan.png",
      },
      {
        code: "green",
        img: "img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: "$109",
    colors: [
      {
        code: "lightgray",
        img: "img/blazer.png",
      },
      {
        code: "green",
        img: "img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: "$129",
    colors: [
      {
        code: "black",
        img: "img/crater.png",
      },
      {
        code: "lightgray",
        img: "img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: "$99",
    colors: [
      {
        code: "lightgray",
        img: "img/hippie.png",
      },
      {
        code: "black",
        img: "img/hippie2.png",
      },
    ],
  },
];

const productImg = document.querySelector(".productImg");
const productTitle = document.querySelector(".productTitle");
const productPice = document.querySelector(".productPice");
const productColor = document.querySelectorAll(".color");
const productSize = document.querySelectorAll(".size");

const buyProduct = document.querySelector(".buyProduct");
const payment = document.querySelector(".payment");

let chooseProduct = products[0];

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change current product
    chooseProduct = products[index];

    //change text of current product
    productTitle.textContent = chooseProduct.title;
    productPice.textContent = chooseProduct.price;
    productImg.src = chooseProduct.colors[0].img;

    //assigning colors
    productColor.forEach((color, index) => {
      color.style.backgroundColor = chooseProduct.colors[index].code;
    });
  });
});

productColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    productImg.src = chooseProduct.colors[index].img;
  });
});

productSize.forEach((size, index) => {
  size.addEventListener("click", () => {
    productSize.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const closeButton = document.querySelector(".close");

buyProduct.addEventListener("click", () => {
  payment.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  payment.style.display = "none";
});
