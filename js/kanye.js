const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = (quote) => {
    const quoteElements = document.getElementById('quote');
    /* 
    We pass a object data from fetch
    we can not show a object directly
    we need the propery of that object to show in html innerText
    */
    quoteElements.innerText = quote.quote;
}