let rowPosition = 0;
const carouselRows = document.querySelectorAll(".carousel-row");
const totalRows = carouselRows.length;
const arrowNext = document.querySelector(".arrow-next")
const arrowPrev = document.querySelector(".arrow-prev");

// carouselRows.forEach(function(arrow){
//     arrow.onclick = function(event){
//         document.querySelector(".selected-row").classList.remove(".selected-row");
//     }
// })

// function carouselChangeRow(){
//     arrowNext.onclick = function(event){
//         document.querySelector(".selected-row").classList.remove("selected-row");
//     }
// }

arrowNext.onclick = function(event){
    nextRow();
}

arrowPrev.onclick = function(event){
    prevRow();
}

function carouselChangeRow() {
    for (let row of carouselRows) {
        row.classList.remove("selected-row");
        row.classList.add("display-none");
    }
    carouselRows[rowPosition].classList.add("selected-row");
}

function nextRow() {
    if (rowPosition === totalRows - 1) {
        rowPosition = 0;
    } else {
        rowPosition++;
    }

    carouselChangeRow()
}

function prevRow() {
    if (rowPosition === 0) {
        rowPosition = totalRows - 1;
    } else {
        rowPosition--;
    }

    carouselChangeRow()
}

carouselChangeRow();
