const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

function robotPage() {
  let robotName = Object.entries(robots);

  let body = document.body;
  let navbar = document.createElement("nav");
  let navtext = document.createTextNode("ROBOFRIENDS");
  let search = document.createElement("input");
  search.setAttribute("type", "text");
  search.setAttribute("placeholder", "search");
  navbar.setAttribute("class", "navbar");
  search.setAttribute("class", "search");
  let filter = search.value;
  navbar.append(navtext);
  navbar.append(search);
  body.append(navbar);
  let section = document.createElement("section");
  section.setAttribute("class", "container");
  body.append(section);
  loop();

  function loop() {
    for (let x = 0; x < robotName.length; x++) {
      let textValue;
      let robotImage = robotName[x][1]["image"];
      let rName = robotName[x][1]["name"];
      let rEmail = robotName[x][1]["email"];
      let div = document.createElement("div");
      let img = document.createElement("img");
      search.addEventListener("keyup", check);
      div.append(img);
      div.append(rName);
      div.append(rEmail);
      img.setAttribute("src", robotImage);
      div.setAttribute("class", "card");
      div.setAttribute("data-id", [x]);
      section.append(div);
      textValue = div.textContent || div.innerText;
      console.log(div.innerText);
      function check(e) {
        console.log();
        if (textValue.indexOf(search.value) > -1) {
          div.style.display = "";
        } else {
          div.style.display = "none";
        }
      }
    }
  }
}
robotPage();
