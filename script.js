const quotes = [
    "The only way to do great work is to love what  you do. -   STEVE JOBS",
    "Sucess is not final, faliure is not fatal: It's the courage to continue that counts.   -   Winston Churchill",
    "The future belongs to those who believe in  the beauty of their dreams.    -   Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The best way to predict the futureis to create it. - Peter Drucker",
    "Single and ready to get nervous around anyone I find Attractive! - Yesh Rikki",
    "An intelligent man is sometimes forced to be drunk to spend time with his fools. -Ernst Hemmingway",
    "This embarrassment thing is all in your head. - Pheobe Buffay",
    "See, I learn something whenever I spend time with you. - Phil Dunphy",
    "All right, everybody. Just try to put a brave face on. - Michael Scott",
    "I was the warm little center that the life of this world crowded around. - The Narrator",
    "Talent hits a target no one else can hit. Genius hits a target no one else can see. - Arthur Schopenhaue",
    "That thing I could have done right away but didn't and now it's a big fucking problem. -Yesh Rikki",
    "The only way to forget the mistakes you made in the past is to make even bigger and graver mistakes in the present. - unanomous",
    "All this overthinking and I still make the worst decisions. - Yesh Rikki",
    "if you put your left shoe on the wrong foot, it's on the right foot. - Yesh Rikki",
    "If you cannot explain something in simple terms, you don't understand it. - Richard P.feynman",
    "He who learns but does not think, is lost. He who thinks but doesn't learn is in great danger. -Confucius",
    "Sometimes, you'll be right person for someone who isn't ready for the RIGHT PERSON. - Yesh Rikki",
    "What if everything You're going Through is preparing you for, What you asked for? - Unanomous",
    "I don't care who is doing better than me. I'm doing better that I was last year. - Yesh Rikki",
    "Everything on the internet is fake. - Albert Einsten",
    "I'm at a point in my life where I don't even know the point I'm at, but I'm at a point. -Yesh Rikki",
    "Don't be mad at lazy people. They don't do anything. -Unanomous",
    "Due to personal reasons I'll be drinking again this weekend. - Yesh Rikki",
    "Don't waste your time on jelousy, sometimes you're ahead, sometimes you're behind. the race is long and in the end, it's only with yourself. -Unanomous",
    "Take it day by day, don't stress too much about tomorrow. - Yesh Rikki",
    "If you continue to 'wait until you're ready', yoe'll be waiting for the rest of your life. -Unanomous",
    "You can't heal if you keep pretending you're not hurt. -Unanomous",
    "When something is important enough, you do it even if the odds are not in your favor. - Elon Musk",
    "My favorite childhood memory is my back not hurting. - Unanomous",
    "Don't find fault, find a remedy: anybody can complain. - Henry Ford",
    "It's okay to miss people and still not want them in your life. -Yesh Rikki",
    "The only way to win is to learn faster than anyone else. - Eric Ries",
    "Be kind to the past versions of yourself that didn't know the things you know now. - Unanomous",
    "Never memorize something that you can look up. - Albert Einstein",
    "Yesterday 'you said' tomorrow! - Yesh Rikki",
    "Born with Smirk, SMARTASS For Life! - Lucia Pawan",

];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random()*quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.innerHTML= quotes[randomIndex];
}