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

const loadNPause = async function () {
  try {
    let image = await createImage("img/img-1.jpg");
    console.log("Image 1 loaded");
    await wait(2);
    image.style.display = "none";
    image = await createImage("img/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
    image.style.display = "none";
  } catch (error) {
    console.error(error);
  }
};
//loadNPause();
const loadAll = async function (imageArray) {
  try {
    const images = imageArray.map(async (image) => await createImage(image));
    const imageElements = Promise.all(images);
    imageElements.forEach((element) => {
      element.classList.add("parallel");
    });
  } catch (error) {
    console.error(error);
  }
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
