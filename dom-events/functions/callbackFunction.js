function callback(name, age, task) {
    console.log('hello' , name)
    console.log('age' , age)
    task();
    
}

function washHand() {
    console.log('Wash hand with soap');
    
}
function takeShower() {
    console.log('Take Shower')
    
}
function scrollFacebook() {
    console.log('Scroll facebook but dont like any post')
}
callback('Sogir Uddin', 17, washHand);
callback('Kogir Uddin', 13, takeShower);
callback('Mugir Uddin', 13, scrollFacebook);