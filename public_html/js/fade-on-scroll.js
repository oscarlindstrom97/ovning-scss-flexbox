/*
fade-on-scroll.js
Author: Oscar Lindström 
Created: October 2018
*/
function setAlpha(alpha)  {
    $ ("nav").css("background-color","rgba(0, 0, 0," + alpha + ")");
}

function calcAlpha()  {
    //definera variabel för alfa-värdet
    let alpha = 0;

    // Här definierar för avståndet till toppen
    let scroll =$(document).scrollTop();

    //Vid vilken pixel ska faden starta
    const fadeStart = 100;

    const fadeStop = 250;

    const fadeLenght = fadeStop - fadeStart;

    //Tre cases med olika saker som ska räknas ut.
    if (scroll < fadeStart) {
        alpha = 0;
    }
    else if (scroll<fadeStop) {
        alpha = (scroll - fadeStart) / fadeLenght;
    }
    else{
        alpha = 1;
    }
   
    //returnerar alpha-värdet efter if-satserna
    return alpha;
}

$(document).scroll(function(){
    setAlpha(calcAlpha());
});

