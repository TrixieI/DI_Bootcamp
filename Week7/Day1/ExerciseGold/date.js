function date() {
  let date = new Date();
  console.log(date);
  let newDate = date.setMonth(date.getMonth() + 1);
  console.log(date - newDate);
}
date();
