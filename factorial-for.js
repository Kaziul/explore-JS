// 10! = 1*2*3*4*5*6*7*8*9*10

function factorials(num){
    var factorial = 1;
    for(let i = 1; i <= num; i++){
    factorial = factorial * i;
    
        }
        return factorial;
}

console.log(factorials(5));