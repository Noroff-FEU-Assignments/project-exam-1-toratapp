const img = document.querySelector(".wp-block-image");
const backdropContainer = document.querySelector(".backdrop-container");

img.onclick = function(event) {
    event.target.classlist.add("modal");
    backdropContainer.classlist.add("modal-backdrop");
    console.log(event.target.classlist);
}