"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    const html = `<article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1000000
        ).toFixed(2)} million</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>`;
    countriesContainer.insertAdjacentHTML("beforeend", html);
  });
};
const getCountryAndNeighborData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);
    const [neighbor] = data.borders;
    if (!neighbor) return;
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
    request2.send();
    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, "neighbour");
    });
  });
};
const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                data.population / 1000000
              ).toFixed(2)} million</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
            </div>
          </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};
//getCountryAndNeighborData("Norway");

const renderError = function (message) {
  countriesContainer.insertAdjacentText("beforeend", message);
  //countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMessage = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(errorMessage);
    }
    return response.json();
  });
};

const getCountryDataNew = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    "Country not found"
  ).then((data) => {
    renderCountry(data[0]);
    const neighbor = data[0].borders[0];
    //const neighbor = "dsfsad";
    if (!neighbor) throw new Error("No neighbor found!");
    return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
      .then((data) => renderCountry(data, "neighbour"))
      .catch((error) => {
        console.log(error);
        renderError("Something went wrong");
      })
      .finally(() => {
        countriesContainer.style.opacity = 1;
      });
  });
};
btn.addEventListener("click", function () {
  getCountryDataNew("Australia");
});
