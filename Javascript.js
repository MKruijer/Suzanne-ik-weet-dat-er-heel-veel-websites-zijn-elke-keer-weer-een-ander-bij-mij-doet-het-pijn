const hungerGamesElements = document.getElementsByClassName("hungerGamesBookCover"); 
const underlandChroniclesElements = document.getElementsByClassName("underlandChroniclesBookCover");

let hungerGamesIndex = hungerGamesElements.length - 1;
let underlandChroniclesIndex = underlandChroniclesElements.length - 1;

function changeBookCover() {
    hungerGamesElements[hungerGamesIndex].style.display = "none";
    underlandChroniclesElements[underlandChroniclesIndex].style.display = "none";
    hungerGamesIndex++;
    if (hungerGamesIndex > hungerGamesElements.length - 1) {
        hungerGamesIndex = 0;
    }
    underlandChroniclesIndex++;
    if (underlandChroniclesIndex > underlandChroniclesElements.length - 1) {
        underlandChroniclesIndex = 0;
    }
    hungerGamesElements[hungerGamesIndex].style.display = "block";
    underlandChroniclesElements[underlandChroniclesIndex].style.display = "block";
    setTimeout(changeBookCover, 4000); // Change image every 2 seconds
}

changeBookCover();