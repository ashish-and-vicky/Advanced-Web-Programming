let getWeather = () => {
  // CITY NAME IS HARD CODED

  let cityName = document.querySelector("#textid").value || "pune";

  /*let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=pune";*/

  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=" +
    cityName;

  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onload = () => {
    const refjson = JSON.parse(xhr.responseText);
    console.log(refjson);
    domOperationHere(refjson);
  };

  xhr.send();
};

let domOperationHere = (refjson) => {
  console.log(refjson.main); //chekout the console while calling this API...the temperature is obtained in the main part
  const name = refjson.name;
  const maxTemp = refjson.main.temp_max;

  const parent = document.querySelector("#parent");

  const newElement = parent.children[0].cloneNode(true);
  newElement.style.display = "flex";
  newElement.innerHTML = name + " " + maxTemp; // getting name and maxTemp present in the JSON we are getting from the API in console

  parent.insertBefore(newElement, parent.firstChild);

  document.querySelector("#textid").value = "";
};
