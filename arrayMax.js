var marks = [45, 81, 34, 99, 100, 23];
var max = marks[0];
for(var i = 0; i<marks.length; i++){
    var element = marks[i];
    if (element > max){
        max = element;
    }
}
console.log("Heghest value is:", max);