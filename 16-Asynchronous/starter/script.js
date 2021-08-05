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
  getCountryDataNew("Norway");
});

console.log("Test start");
setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("Resolved promise 1").then((response) => console.log(response));
Promise.resolve("Resolved promise 2").then((response) => {
  for (let index = 0; index < 10; index++) {}
  console.log(response);
});
console.log("Test end");

const lotteryPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You win!");
    } else {
      reject(new Error("You lose.."));
    }
  }, 2000);
});

lotteryPromise
  .then((result) => console.info(result))
  .catch((error) => console.error(error));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then(() => console.log("I waited for 1 second"));

Promise.resolve("abc").then((x) => console.log(x));
Promise.reject("abc").catch((x) => console.error(x));

console.log("Getting position");

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPosition()
    .then((position) => {
      const { latitude: lat, longitude: lng } = position.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Problem with geocode, HTTP ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .catch((error) => console.log(`${error.message}`));
};

btn.addEventListener("click", whereAmI);

const whereAmINew = async function () {
  try {
    const position = await getPosition();

    const { latitude: lat, longitude: lng } = position.coords;
    const responseGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );
    if (!responseGeo.ok) {
      throw new Error("Problem getting location data");
    }
    const dataGeo = await responseGeo.json();
    console.log(dataGeo);
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!response.ok) {
      throw new Error("Problem getting country");
    }
    const data = await response.json();
    console.log(data);
    renderCountry(data[0]);
    return `You are in ${dataGeo.city.toLowerCase()}, ${dataGeo.country}`;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
//Doesn't work
/* const city = whereAmINew();
console.log(city); */
whereAmINew()
  .then((city) => console.log(city))
  .catch((error) => console.error(error))
  .finally(console.log("FIRST"));

(async function () {
  try {
    const city = await whereAmINew();
    console.log(city);
  } catch (error) {
    console.error(error);
  }
  console.log("Finished");
});

try {
  let y = 1;
  const x = 2;
  y = 3;
} catch (error) {
  console.log(error);
}

const get3Countries = async function (c1, c2, c3) {
  try {
    /* const [data1] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${c1}`
    );
    const [data2] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${c2}`
    );
    const [data3] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${c3}`
    ); */
    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    /*  console.log([data1.capital, data2.capital, data3.capital]); */
    /* console.log(data); */
    console.log(data.map((d) => d[0].capital));
  } catch (error) {
    console.error(error);
  }
};

get3Countries("Finland", "Sweden", "Norway");

(async function () {
  const response = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  ]);
  console.info(response[0]);
});

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long`));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/france`),
  timeout(0.5),
])
  .then((response) => console.log(response[0]))
  .catch((error) => console.error(error));

Promise.allSettled([
  Promise.resolve("Success!"),
  Promise.resolve("Error!"),
  Promise.resolve("Another success!"),
])
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

Promise.any([
  Promise.resolve("Success!"),
  Promise.resolve("Error!"),
  Promise.resolve("Another success!"),
])
  .then((response) => console.info(response))
  .catch((error) => console.error(error));
