function factorials(num){
    var i = 1;
    factorial = 1;
    while(i<=num){
        factorial = factorial * i;
        i++;
}
return factorial;
}
console.log(factorials(10));