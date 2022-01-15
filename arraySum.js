function getArraySum(numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      var element = numbers[i];
      sum = sum + element;
    }
    return sum;
}
var numbers = [45, 65, 78, 12, 3, 54, 65];
var numbers1 = [45, 65, 78, 12, 3, 54, 65,45,76,76];

var result = getArraySum(numbers);
var result1 = getArraySum(numbers1);
console.log("Total of the numbers: ", result);
console.log("Total of the numbers: ", result1);

