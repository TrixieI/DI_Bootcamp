let noun = document.getElementById("noun");
let adjective = document.getElementById("adjective");
let person = document.getElementById("person");
let verb = document.getElementById("verb");
let place = document.getElementById("place");
let btn = document.getElementById("lib-button");

btn.addEventListener("click", getValue);

let elements = [noun, adjective, person, verb, place];

function getValue(e) {
  e.preventDefault();
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);

    if (elements[i].value.length === 0) {
      alert("Missing input text");
      break;
    }
  }

  let story = document.getElementById("story");

  noun = noun.value;
  adjective = adjective.value;
  person = person.value;
  verb = verb.value;
  place = place.value;

  let madLib = `I went to the ${place} today with ${person} to get a ${noun}. It was a ${adjective} day outside to go ${verb}`;
  story.append(madLib);
}
