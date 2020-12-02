/**
 * Event    => Load
 * Listener  => Call Back (Arrow Or Annonymous)
 */
window.addEventListener("load", () => {
  // loading part :: logic is at method  abstact Logic
  porcessLogicHere();

  // AJAX SYNTAX :: SERVER :: READY WITH THE SERVICE :: https://reqres.in/api/users?page=2.....(demo server used for testing)
  // AJAX :: Programmatically we are making a request to URL.
  // STEP - 1 :: Create an Object
  let xhr = new XMLHttpRequest();

  // Handling The Handshake with the server :: 5 times they are exchanging the info
  xhr.onreadystatechange = () => {
    console.log(xhr.readyState);

    // operation is complete
    if (xhr.readyState == 4) {
      console.log(xhr.responseText);
      // we have to convert the string to json
      // JSON.parse(str);
    }
  };

  // STEP - 2 There are 5 parametes, here we are taking 2 Parametrs...type this in console and see which are the parameters.
  const url = `https://reqres.in/api/users?page=2`;
  xhr.open("GET", url);

  // STEP - 3
  xhr.send();
});

let porcessLogicHere = function () {
  // We can read BODY Element Once the page is loaded.
  const pbc = document.querySelector("#parentBlockContainer");
  console.log(pbc);

  // lets create :: lets assume this value coming from server/db
  // how we will get :: uisng AJAX :: CALL AJAX :: JSON/XML :: API
  // suppose if we want to access JSON then the syntax is....... <name of variable>.<json object name>
  let postList = [
    { id: 1, post: "Hello World" },
    { id: 2, post: "Hello Universe" },
    { id: 3, post: "Hello Javascript" },
    { id: 4, post: "Hello HTML" },
    { id: 5, post: "Hello CSS" },
    { id: 6, post: "Hello DOM" },
    { id: 7, post: "Hello JSON" },
    { id: 8, post: "Hello XML" },
    { id: 9, post: "Hello Callback" },
    { id: 10, post: "Hello AJAXXXXX" },
  ];

  for (let i = 0; i < postList.length; i++) {
    let item = postList[i];

    const newElement = pbc.children[0].cloneNode(true);
    newElement.style.display = "flex"; // none

    newElement.children[0].innerHTML = item.post;

    // New Element :: To Place At TOP :: insertBefore
    pbc.insertBefore(newElement, pbc.firstChild);
  }
};
