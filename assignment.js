function kelometreToMeter(num) {
  if (num >= 1) {
    var meter = num * 1000;
    return meter;
  } else {
    return "Please type positive number";
  }
}
var result = kelometreToMeter(-7);
var result1 = kelometreToMeter(17);
console.log(result);
console.log(result1);

function budgetCalculator(watchs, phones, laptops) {
  if (watchs >= 1 && phones >= 1 && laptops >= 1) {
    var watch = watchs * 50;
    var phone = phones * 100;
    var laptop = laptops * 500;
    var result = watch + phone + laptop;
    return result;
  }
  else{
      return "Please type positive number"
  }
}
var nuberOfItems = budgetCalculator(2, -1, 2);
var nuberOfItems1 = budgetCalculator(2, 3, 3);
console.log( nuberOfItems);
console.log("Total amount is: ", nuberOfItems1);

function hotelCost(num) {
  if (num <= 10) {
    totalCost = num * 100;
  } else if (num <= 20) {
    var firstPart = 10 * 100;
    var remaining = num - 10;
    var secondPart = remaining * 80;
    totalCost = firstPart + secondPart;
  } else {
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remaining = num - 20;
    var thirdPart = remaining * 50;
    totalCost = firstPart + secondPart + thirdPart;
  }
  return totalCost;
}
var inputNumber = hotelCost(21);
console.log(inputNumber);
