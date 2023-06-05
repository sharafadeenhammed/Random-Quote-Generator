const quotes = [
    "The only way to do great work is to love what  you do. -   STEVE JOBS",
    "Sucess is not final, faliure is not fatal: It's the courage to continue that counts.   -   Winston Churchill",
    "The future belongs to those who believe in  the beauty of their dreams.    -   Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The best way to predict the futureis to create it. - Peter Drucker"

];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random()*quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.innerHTML= quotes[randomIndex];
}