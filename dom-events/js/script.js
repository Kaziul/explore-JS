var authors = document.querySelectorAll('.special h3');
for(var i = 0; i < authors.length; i++){
    var elements = authors[i];
    console.log(elements.innerHTML);
    elements.innerHTML = "lekhok-" + (i + 1);
    elements.style.backgroundColor = 'tomato';
    elements.style.margin = '10px';
}

const article = document.getElementById("first-article");
const newParagraph = document.createElement('p');
newParagraph.innerText = 'This is added by JavaScript';
article.appendChild(newParagraph);

// add one more gift item

const ul = document.getElementById("gift-list");
const li = document.createElement('li');
li.innerText = 'Brand new Gift';
ul.appendChild(li);
