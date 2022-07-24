// Ovo je responsive menu
let menu = document.querySelector(".header ul");
let buttonMenu = document.querySelector(".button");

const mobileMenu = () => {
  let btn = document.querySelector(".header button");
  if (btn.innerText === "MENU") {
    menu.style.display = "block";
    btn.innerText = "CLOSE";
  } else {
    menu.style.display = "none";
    btn.innerText = "MENU";
  }
};

buttonMenu.addEventListener("click", mobileMenu);

// Ovo je galerija

let rightBtn = document.querySelector("#right-btn");
let leftBtn = document.querySelector("#left-btn");
let pictures = document.querySelectorAll(".slider-images img");

let imgNum = 0;

// pictures move right
const moveRight = () => {
  displayNone();
  imgNum++;
  if (imgNum === pictures.length) {
    imgNum = 0;
  }
  pictures[imgNum].style.display = "block";
};

// pictures move left
const moveLeft = () => {
  displayNone();
  imgNum--;
  if (imgNum === -1) {
    imgNum = pictures.length - 1;
  }
  pictures[imgNum].style.display = "block";
};

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

// Ova funkcija ce da sakrije sve slike

const displayNone = () => {
  pictures.forEach((img) => {
    img.style.display = "none";
  });
};

// Portfolio

let portfolioItems = document.querySelectorAll(".portfolio-single-item");
let btn = document.querySelectorAll("#btn");

btn.forEach((button) => {
  button.addEventListener("click", function portfolioSort() {
    let category = button.getAttribute("data-category");
    console.log(category);

    portfolioItems.forEach((item) => {
      item.style.display = "none";
    });

    if (category === "sve") {
      portfolioItems.forEach((item) => {
        item.style.display = "block";
      });
    }

    portfolioItems.forEach((item) => {
      if (item.getAttribute("data-category").includes(category)) {
        item.style.display = "block";
      }
    });
  });
});

// Modal
let open = document.querySelector("#openModal");
let close = document.querySelector("#closeModal");
let modalWindow = document.querySelector(".popup-modal");
let overlay = document.querySelector(".overlay");

const openModal = () => {
  modalWindow.style.display = "block";
  overlay.style.display = "block";
};

const closeModal = () => {
  modalWindow.style.display = "none";
  overlay.style.display = "none";
};

open.addEventListener("click", openModal);
close.addEventListener("click", closeModal);

// Picture modal

let openPicture = document.querySelector("#pictureModal");
let picture = document.querySelector(".myImg");
let pictureOverlay = document.querySelector(".picture-overlay");
let closePicture = document.querySelector("#closePicture");

const openPictureModal = () => {
  picture.style.display = "block";
  pictureOverlay.style.display = "block";
  closePicture.style.display = "block";
};

const closePictureModal = () => {
  picture.style.display = "none";
  pictureOverlay.style.display = "none";
  closePicture.style.display = "none";
};

openPicture.addEventListener("click", openPictureModal);
closePicture.addEventListener("click", closePictureModal);
