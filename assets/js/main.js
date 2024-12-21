/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== SHOW SHOP ===============*/
const shopCart = document.getElementById("shop-cart"),
  shopBag = document.getElementById("shop-bag"),
  shopClose = document.getElementById("shop-close");
if (shopBag) {
  shopBag.addEventListener("click", () => {
    shopCart.classList.add("show-shop");
  });
}

if (shopClose) {
  shopClose.addEventListener("click", () => {
    shopCart.classList.remove("show-shop");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  if (navMenu) {
    navMenu.classList.remove("show-menu");
  }
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  if (header) {
    this.scrollY >= 50
      ? header.classList.add("bg-header")
      : header.classList.remove("bg-header");
  }
};
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
const popularSwiper = new Swiper(".popular__content", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

/*=============== CHOOSE FAQ ===============*/
const faqItems = document.querySelectorAll(".choose__faq-item");

faqItems.forEach((item) => {
  const faqHeader = item.querySelector(".choose__faq-header");

  if (faqHeader) {
    faqHeader.addEventListener("click", () => {
      const openItem = document.querySelector(".faq-open");
      toggleItem(item);

      if (openItem && openItem !== item) {
        toggleItem(openItem);
      }
    });
  }
});

const toggleItem = (item) => {
  const faqContent = item.querySelector(".choose__faq-content");

  if (faqContent) {
    if (item.classList.contains("faq-open")) {
      faqContent.removeAttribute("style");
      item.classList.remove("faq-open");
    } else {
      faqContent.style.height = faqContent.scrollHeight + "px";
      item.classList.add("faq-open");
    }
  }
};
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  var scrollUp = document.getElementById("scroll-up");
  if (scrollUp) {
    if (window.scrollY >= 350) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }

    scrollUp.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (sectionsClass) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link");
      }
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}
if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const rev = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: 400,
});

rev.reveal(
  ".home__content, .popular__container, .products__container, .join__bg, .footer__container"
);
rev.reveal(".home__image", { origin: "bottom" });
rev.reveal(".choose__image, .features__image", { origin: "left" });
rev.reveal(".choose__content, .features__content", { origin: "right" });

/*=============== ADD TO CART ===============*/
const productBtns = document.querySelectorAll(".add-btn"),
  basketBtn = document.querySelector("#shop-bag"),
  basketModal = document.querySelector("#shop-cart"),
  closeBtnModal = document.querySelector("#shop-close"),
  basketChecklist = document.querySelector(".nav__shop-list"),
  basketIndicator = document.querySelector(".shop-indicator"),
  basketTotalPrice = document.querySelector(".shop-totalPrice"),
  basketPrint = document.querySelector(".nav__checkout"),
  printChecklist = document.querySelector(".print__body"),
  printTotalSum = document.querySelector(".print__footer");

const product = {
  modern: {
    name: "Modern",
    price: 14,
    amount: 0,
    img: "./assets/img/modern-lamp.png",
    get totalSum() {
      return this.price * this.amount;
    },
  },
  industrial: {
    name: "Industrial",
    price: 20,
    amount: 0,
    img: "./assets/img/industrial-lamp.png",
    get totalSum() {
      return this.price * this.amount;
    },
  },
  superbolw: {
    name: "Superbolw",
    price: 18,
    amount: 0,
    img: "./assets/img/superbolw-lamp.png",
    get totalSum() {
      return this.price * this.amount;
    },
  },
  ultrawide: {
    name: "Ultrawide",
    price: 16,
    amount: 0,
    img: "./assets/img/ultrawide-lamp.png",
    get totalSum() {
      return this.price * this.amount;
    },
  },
  roundness: {
    name: "Roundness",
    price: 17,
    amount: 0,
    img: "./assets/img/roundness-light.png",
    get totalSum() {
      return this.price * this.amount;
    },
  },
  stickness: {
    name: "Stickness",
    price: 28,
    amount: 0,
    img: "./assets/img/stickness-light.png",
    get totalSum() {
      return this.price * this.amount;
    },
  },
  superjet: {
    name: "Superjet",
    price: 15,
    amount: 0,
    img: "./assets/img/superjet-light.png",
    get totalSum() {
      return this.price * this.amount;
    },
  },
  nakedness: {
    name: "Nakedness",
    price: 13.99,
    amount: 0,
    img: "./assets/img/nakedness-lamp.png",
    get totalSum() {
      return this.price * this.amount;
    },
  },
};

basketBtn?.addEventListener("click", () =>
  basketModal?.classList.add("show-shop")
);
closeBtnModal?.addEventListener("click", () =>
  basketModal?.classList.remove("show-shop")
);

productBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    plusOrMinus(this);
  });
});

function plusOrMinus(button) {
  const parent = button.closest(".products__card");
  const parentId = parent?.getAttribute("id");
  if (parentId && product[parentId]) {
    product[parentId].amount++;
    basket();
  }
}

function basket() {
  const productArray = [];
  let totalCount = 0;
  basketIndicator?.classList.remove("active");

  for (const key in product) {
    const po = product[key];
    const productCard = document.querySelector(`#${po.name.toLowerCase()}`);
    const productCardInd = productCard?.querySelector(".card-count");

    if (po.amount) {
      productArray.push(po);
      basketIndicator?.classList.add("active");
      totalCount += po.amount;
      productCardInd?.classList.add("active");
      productCardInd && (productCardInd.innerHTML = po.amount);
    } else {
      productCardInd?.classList.remove("active");
      productCardInd && (productCardInd.innerHTML = 0);
    }
    basketIndicator && (basketIndicator.innerHTML = totalCount);
  }
  basketChecklist && (basketChecklist.innerHTML = "");

  for (let i = 0; i < productArray.length; i++) {
    basketChecklist &&
      (basketChecklist.innerHTML += cardItemBook(productArray[i]));
  }
  basketTotalPrice && (basketTotalPrice.innerHTML = totalSumProducts());
}

function cardItemBook(dataBook) {
  const { name, totalSum: price, amount, img } = dataBook;
  return `
    <div class="nav__shop-item">
      <div class="nav__item-img">
         <img src="${img}" alt="">
      </div>
      <div>
         <p class="nav__item-name">${name}</p>
         <div class="nav__item-price">
            <span>$</span>${price.toLocaleString()}
         </div>
      </div>
      <div class="quantity" id="${name.toLowerCase()}__card">
         <button class="shop__product-symbol" data-symbol="-">
           <i class="ri-indeterminate-circle-line"></i>
         </button>
         <output class="shop__product-output">${amount}</output>
         <button class="shop__product-symbol" data-symbol="+">
           <i class="ri-add-circle-line"></i>
         </button>
      </div>
    </div>
  `;
}

window.addEventListener("click", function (event) {
  const btn = event.target;

  if (btn.classList.contains("shop__product-symbol")) {
    const attr = btn.getAttribute("data-symbol");

    const parent = btn.closest(".quantity");
    if (parent) {
      const idProduct = parent.getAttribute("id")?.split("__")[0];
      if (idProduct && product[idProduct]) {
        if (attr === "+") {
          product[idProduct].amount++;
        } else if (attr === "-") {
          product[idProduct].amount--;
        }
        if (product[idProduct].amount < 0) product[idProduct].amount = 0;

        basket();
      }
    }
  }
});

function totalSumProducts() {
  let total = 0;

  for (const key in product) {
    total += product[key].totalSum;
  }

  return "$ " + total.toLocaleString();
}

basketPrint?.addEventListener("click", function () {
  if (printChecklist) printChecklist.innerHTML = "";

  for (const key in product) {
    const { name, totalSum, amount } = product[key];

    if (amount) {
      printChecklist?.insertAdjacentHTML(
        "beforeend",
        `
        <div class="print__item">
          <div class="print__body-item_name">
            <span class="name">${name}</span>
            <span class="count">${amount}</span>
          </div>
          <div class="print__body-item_sum">$ ${totalSum.toLocaleString()}</div>
        </div>
      `
      );
    }
  }
  printTotalSum && (printTotalSum.innerHTML = totalSumProducts());
  window.print();
});
