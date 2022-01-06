(function event(e) {
  let btn = document.getElementById("convert");
  btn.addEventListener("click", grab);
})();

async function getCurrencies() {
  try {
    let avilableCurrencies = await fetch(
      "http://api.currencylayer.com/list?access_key=6b543e9294a71d26a6606f5449cf71a6&format=1"
    );
    let parse = await avilableCurrencies.json();
    console.log(parse);
    for (let i = 0; i < Object.keys(parse.currencies).length; i++) {
      let options = document.createElement("option");
      options.setAttribute("id", Object.keys(parse.currencies)[i]);
      options.innerText = `${Object.keys(parse.currencies)[i]} - ${
        Object.values(parse.currencies)[i]
      }`;
      let select = document.getElementById("select2");
      select.append(options);
    }
  } catch (error) {
    console.log(error);
  }
}
getCurrencies();

async function grab() {
  let amount = document.getElementById("amount");
  let select = document.getElementById("select2");
  let target = select.options[select.selectedIndex].id;
  let result = document.getElementById("result");
  console.log(target);
  try {
    let request = await fetch(
      `http://api.currencylayer.com/live?access_key=3d24625b8e84fb779e36529e9ae30bd3&currencies=${target}&source=USD`
    );
    if (request.status === 200) {
      let parse = await request.json();
      console.log(parse.quotes);
      let object = Object.values(parse.quotes);
      let exchange = amount.value * object;
      result.innerText = exchange; // Displays the result of the exchange
      console.log(exchange);
    } else {
      throw new Error("status not 200!");
    }
  } catch (error) {
    console.log(error);
  }
}
