//Fact Generator
var factlist = ["I was Time's Person of The Year for 2006!",
"I'm pretty skillful at playing video games... and hacking them.",
"I stand firm of my opinion that cartoons are not just for kids, there are some can be enjoyed by all ages!",
"I learnt cycling and swimming at the very young age... of 19. You're never too old to learn something new!",
"I scored the lowest in my class for PSLE, but still ended up reaching my dream course in university!",
"One of my regrets in life is not making more friends back in school. It's way harder to build relations as you get older.",
"I have 0 interest in anything related to National Service, no idea why guys like to discuss about it.",
"I actually dislike reading novels & fictional works, I prefer non-fiction books & movies!",
"One of my future ambitions is to start a web comic series about life in Singapore.",
"Fact Number 10"];

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
//Fact Generator

//Nav Bar Scroller

$("#About").click(function () {
    $(["html", "body"]).animate({
        scrollTop: $("#Banner2").offset().top
    }, 2000);
});


$("#Programming").click(function () {
    $(["html", "body"]).animate({
        scrollTop: $("#Banner3").offset().top
    }, 2000);
});

$("#About").click(function () {
    $(["html", "body"]).animate({
        scrollTop: $("#Banner2").offset().top
    }, 2000);
});

$("#About").click(function () {
    $(["html", "body"]).animate({
        scrollTop: $("#Banner2").offset().top
    }, 2000);
});

$("#About").click(function () {
    $(["html", "body"]).animate({
        scrollTop: $("#Banner2").offset().top
    }, 2000);
});


//Nav Bar Scroller

//Banner Transition

//Banner Transition


