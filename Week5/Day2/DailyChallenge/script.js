function displayGif() {
  let search = document.querySelector("#search");
  let add = document.querySelector("#submit");
  let deleteAll = document.querySelector("#deleteall");
  let gif = new XMLHttpRequest();
  gif.open(
    "GET",
    `https://api.giphy.com/v1/gifs/search?q=hilarious&limit=25&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
  );
  gif.responseType = "json";
  gif.send();
  gif.onload = function () {
    if (gif.status != 200) {
      console.log("error status");
    } else {
      console.log("Finished Loading");
      console.log(gif.response);
      attach(gif.response);
    }
  };
  function attach() {
    add.addEventListener("click", addgif);
    deleteAll.addEventListener("click", deletegifs); // adds event listeners to our two buttons
  }

  function deletegifs() {
    let container = document.querySelector(".container");
    container.innerHTML = ""; // empties the container, basically removes all gifs and buttons
  }

  function addgif(e) {
    console.log(gif.response);
    gif.open(
      "GET",
      `https://api.giphy.com/v1/gifs/search?q=${search.value}&limit=50&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    );
    gif.send();
    gif.onload = function () {
      let container = document.querySelector(".container");
      let img = document.createElement("img");
      let xbtn = document.createElement("button");
      xbtn.setAttribute("type", "button");
      xbtn.innerText = "X";
      xbtn.addEventListener("click", x);
      container.append(xbtn);
      img.setAttribute(
        "src",
        gif.response.data[Math.floor(Math.random() * 51)].images.downsized.url // randomizes the gifs
      );
      container.append(img);
      function x() {
        // Removes the button and gif
        img.remove();
        xbtn.remove();
      }
    };
  }
}
displayGif();
