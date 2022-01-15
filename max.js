var x =860;
var y = 354;
var z = 654;
if(x>y){
    if(x>z){
        console.log(x, 'X is bigger');
    }
    else{
        console.log(z, "Z is bigger")
    }
}
else{
    if(y>z){
        console.log(y, "Y is bigger")
    }
    else{
        console.log(z, "Z is bigger")
    }
}

var max = Math.max(x,y,z);
console.log(max);