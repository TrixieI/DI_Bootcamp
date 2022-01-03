// Exercise 1

// We create a function that will make a GET request for the giphy API with our api key
function gif() {
  let request = new XMLHttpRequest();
  request.open(
    // we open a request with GET and the api link
    "GET",
    "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
  ); // we send our request
  request.send();
  // once our request is sent and we have it retrived and loaded, we parse the JSON object we got into
  // a javascript object
  request.onload = function () {
    let jsObj1 = JSON.parse(request.response);
    console.log(jsObj1); // we get an object with data array that contains
    // objects with all the giphy type: gif, ID's and their URL's
  };
}
gif();

// Exercise 2
function sun() {
  let sungifs = new XMLHttpRequest();
  sungifs.open(
    "GET",
    "https://api.giphy.com/v1/gifs/search?q=sun&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
  ); // by adding q=sun&limit=10&offset=2 we make sure we only get results with
  // the word sun in them, array of 10 thanks to limit=10 and start of 2 because of offset=2
  sungifs.send();
  sungifs.onload = function () {
    let jsObj2 = JSON.parse(sungifs.response);
    console.log(jsObj2);
    console.log(jsObj2.data[0].embed_url); // gives us a the url for a gif that we can use anywhere
  };
}
sun();
