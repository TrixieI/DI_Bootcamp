(function event(e) {
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let btn3 = document.getElementById("btn3");
  btn3.addEventListener("click", request);
})();

async function request() {
  let random = Math.floor(Math.random() * 400);
  try {
    let request = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    if (request.status === 200) {
      let response = await request.json();
      console.log(response);
      let info = document.getElementById("info");
      let pimage = document.getElementById("pimage");
      let src = response.sprites.front_default;
      pimage.innerHTML = `<img src=${src}></img>`;
      info.innerText = `
      Pokemon: ${response.name}
      Height: ${response.height}
      Type: ${response.types[0].type.name}
      Weight: ${response.weight}`;
      btn1.addEventListener("click", prev);
      btn2.addEventListener("click", next);
      async function prev() {
        request = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${random - 1}`
        );
        response = await request.json();
        console.log(response);
        info = document.getElementById("info");
        pimage = document.getElementById("pimage");
        src = response.sprites.front_default;
        pimage.innerHTML = `<img src=${src}></img>`;
        info.innerText = `
      Pokemon: ${response.name}
      Height: ${response.height}
      Type: ${response.types[0].type.name}
      Weight: ${response.weight}`;
      }
      async function next() {
        request = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${random + 1}`
        );
        response = await request.json();
        console.log(response);
        info = document.getElementById("info");
        pimage = document.getElementById("pimage");
        src = response.sprites.front_default;
        pimage.innerHTML = `<img src=${src}></img>`;
        info.innerText = `
      Pokemon: ${response.name}
      Height: ${response.height}
      Type: ${response.types[0].type.name}
      Weight: ${response.weight}`;
      }
    } else {
      throw new Error(error);
    }
  } catch (error) {
    console.log(error);
  }
}
