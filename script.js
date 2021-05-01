//Fact Generator
var factlist = ["I was Time's Person of The Year for 2006! Wow! :)",
"I like gaming, I have over 30 different console emulators installed on my PC!",
"While I do enjoy watching anime, I also like watching cartoons! It's not strictly for kids!",
"I learnt cycling and swimming at the very young age... of 19. You're never too old to learn something new!",
"I scored the lowest in my class for PSLE, pretty sure my class was filled with child prodigies.",
"Along with programming, I am also skilled in graphic design. I made data visuals, infographics and digital art",
"Unlike most guys in Singapore, I have 0 interest in anything related to National Service.",
"I actually dislike reading novels & fictional books, I prefer non-fiction & informative magazines!",
"One of my future ambitions is to start my own web comic series!",
"I have been to Japan, Taiwan, New Zealand & Australia, I hope to visit Europe & The Americas in the future."];

function shuffleArray(array) {
    var array2 = array;
    for (let i = array2.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array2[i], array2[j]] = [array2[j], array2[i]];
    }
    return array2;
}

factlist = shuffleArray(factlist);
var startindex = 0;


function genFact(){
    startindex = startindex % 10;
    var randomfact = factlist[startindex];
    document.getElementById("fact").innerHTML = randomfact;
    startindex++;
}

function rouletteFact(){ //Roulette Effect for Fact Generator
    var i;
    for (i = 0; i < 101; i++) {
        genFact();
    }
}

//Fact Generator


//Pulsating effects
$("#arrow").pulsate({
    color: $(".banner-heading").css("background-color"),
    glow: true,
});

$(".btn-primary").pulsate({
    color: $(".banner-heading").css("background-color"),
    glow: true,
});

$(".btn-secondary").pulsate({
    color: $(".banner-heading").css("background-color"),
    glow: true,
});


//Pulsating effects
