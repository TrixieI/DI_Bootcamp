(function event(e) {
  let btn = document.getElementById("search");
  btn.addEventListener("click", grab);
})();

async function grab() {
  let bar = document.getElementById("bar");
  try {
    let request = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=8944539a80ae441ba94150207212212&q=${bar.value}`
    );
    if (request.status === 200) {
      let response = await request.json();
      console.log(response);
      let div = document.getElementById("info");
      let icon = document.getElementById("icon");
      let src = response.current.condition.icon;
      let img = `<img src=${src}></img>`;
      icon.innerHTML = img;
      div.innerText = `${response.location.country}
      ${response.location.name}
      ${response.location.localtime}
      ${response.current.temp_c}°C
      ${response.current.condition.text}`;
    } else {
      throw new Error(error);
    }
  } catch (error) {
    console.log(error);
  }
}
