//Retrieve list of quotes from quotes.json file
const quotes = await $.getJSON('./quotes.json');

const button = document.querySelector('#quote-button');
const quoteLine = document.querySelector('#quote-box');

function onButton() {
    console.log('button pressed');
    const randomIndex = Math.floor( Math.random() * quotes.length - 1);
    const newQuote = quotes[randomIndex];

    quoteLine.innerHTML = newQuote;

}
button.addEventListener("click", onButton);