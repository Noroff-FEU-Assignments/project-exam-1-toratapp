let rowPosition = 0;
const carouselRows = document.querySelectorAll(".carousel-row");
const totalRows = carouselRows.length;
const arrowNext = document.querySelector(".arrow-next")
const arrowPrev = document.querySelector(".arrow-prev");

arrowNext.onclick = function(event){
    nextRow();
}

arrowPrev.onclick = function(event){
    prevRow();
}

function carouselChangeRow() {
    for (let carouselRow of carouselRows) {
        carouselRow.classList.remove('selected-row');
        carouselRow.classList.add('display-none');
    }
    
    carouselRows[rowPosition].classList.add('selected-row');
    carouselRows[rowPosition].classList.remove('display-none');
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
