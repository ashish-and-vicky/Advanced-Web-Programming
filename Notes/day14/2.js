let callAjaxUsingJquery = () => {
  let cityName = "pune";

  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=" +
    cityName;

  // $('#parent div:nth-child(2)')......or.........$('#parent div:first-child')............$(#parente).children().first().next().css('color','green')

  // done is the handshake which confirms that we have to respond to the server

  // data1 is the name of the callback we are getting from the server...you can give any name
  //(according to the syntasx/parameters specified in the jQuery Library...check website)

  $.ajax(url).done((data1) => {
    myDOMOperationHere(data1);
  });
};

// The response we are getting here is in JSON.....Therefore to get it in XML we have to write...'&mode=xml' whith the above url

let myDOMOperationHere = (data1) => {
  const parent = document.querySelector("#parent");

  const newElement = parent.children[0].cloneNode(true);
  newElement.innerHTML = data1.name + " " + data1.main.temp_max;

  parent.insertBefore(newElement, parent.firstChild);
};
