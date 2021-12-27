//Copy this object using the method that was taught in today’s lesson.
//Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
//Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?

let groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

let copyGroceries = groceries;

groceries["totalPrice"] = "35$"; // Yes we will see the change in the copied object as well
// if we console.log copyGroceries we will see the change in it as well.
// the copies object isn't a new object, it's a referce to the original object, so
// changing the value in any 1 of them will change the value for both!

groceries["other"]["payed"] = false;
// Yes we will see the change in both as well for the same exact reason, nested objects are
// not completely new objects with their own ID/reference, they're still within the original
// object, so any changes in values in any copies will change the value for the "original"
// and the "copies" since they're all just a reference to the actual value!
