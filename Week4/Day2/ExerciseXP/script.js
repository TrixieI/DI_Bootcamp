// Exercise Gold instead of ExerciseXP homework

let landscape = function () {
  let result = ""; // empty string

  // Change into nested arrow function
  let flat = (x) => {
    for (let count = 0; count < x; count++) {
      //adds underscores _ to result string every loop
      result = result + "_";
    }
  };

  // Change into nested arrow function
  let mountain = (x) => {
    result = result + "/"; //adds / lines to result string
    for (let counter = 0; counter < x; counter++) {
      result = result + "'"; // adds ' to result string every loop
    }
    result = result + "\\"; // adds \\ to result string after the loop is done
  };

  flat(4); // adds 4 _
  mountain(4); // adds 1 / adds 4 ' adds 1 \\
  flat(4); // adds 4 _

  return result;
};

landscape(); // the result should be a string of ____/''''\\____
