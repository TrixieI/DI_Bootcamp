// Exercise 1

// The sent Form data appears at the top in the URL

// Exercise 2

// The sent Form data appears in the Network PAYLOAD tab

// Exercise 3

function exercise3() {
  let marioGame = {
    detail: "An amazing game!",
    characters: {
      mario: {
        description: "Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser: {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach: {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      },
    },
  };

  let jsonObject = JSON.stringify(marioGame, null, 2);
  console.log(jsonObject);
}
exercise3();

// Result of the JSON Object before prettying it with 2 as the 3rd argument in .stringify

/* 
{"detail":"An amazing game!","characters":{"mario":{"description":"Small and jumpy. Likes princesses.","height":10,"weight":3,"speed":12},"bowser":{"description":"Big and green, Hates princesses.","height":16,"weight":6,"speed":4},"princessPeach":{"description":"Beautiful princess.","height":12,"weight":2,"speed":2}}}
*/

// Results after using pretty on the JSON object

/*
{
  "detail": "An amazing game!",
  "characters": {
    "mario": {
      "description": "Small and jumpy. Likes princesses.",
      "height": 10,
      "weight": 3,
      "speed": 12
    },
    "bowser": {
      "description": "Big and green, Hates princesses.",
      "height": 16,
      "weight": 6,
      "speed": 4
    },
    "princessPeach": {
      "description": "Beautiful princess.",
      "height": 12,
      "weight": 2,
      "speed": 2
    }
  }
}
*/
