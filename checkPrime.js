// var n = 18;
function checkPrime(n){
    for(i=2; i<n; i++){
        if(n%i == 0){
            return('Not a prime number');
        }
        return 'Your Number is a Prime Number';
    
    }
}
console.log(checkPrime(77));
console.log(checkPrime(18));