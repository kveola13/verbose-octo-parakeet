"use strict";

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imagePath) {
  return new Promise(function (resolve, reject) {
    let image = document.createElement("img");
    image.src = imagePath;
    image.addEventListener("load", function () {
      imgContainer.append(image);
      resolve(image);
    });
    image.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};
let currentImage;
createImage("./img/img-1.jpg")
  .then((image) => {
    currentImage = image;
    console.log("image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((image) => {
    currentImage = image;
    console.log("image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
  })
  .catch((error) => console.log(error));
