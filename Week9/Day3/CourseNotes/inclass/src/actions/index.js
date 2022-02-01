export const setNames = (name, value) => {
  return {
    type: name,
    payload: value,
  };
};

// export const findMatch = (data) => {
//   return {
//     type: "FIND_MATCH",
//     payload: data,
//   };
// };

export const findMatch = (sname, fname) => (dispatch) => {
  fetch(
    `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.props.findAMatch(data);
    })
    .catch((err) => {
      console.error(err);
    });
};
