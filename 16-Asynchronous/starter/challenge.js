"use strict";
const whereAmI = function (lat, lng) {
  console.log(lat, lng);
  const location = `https://geocode.xyz/${lat},${lng}?geoit=json`;
  fetch(location)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Problem with geocode, HTTP ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch((error) => console.log(`${error.message}`));
};
const [lat, lng] = [52.508, 13.381];
//const [lat, lng] = [19.037, 72.873];
//const [lat, lng] = [-33.933, 18.474];
whereAmI(lat, lng);
