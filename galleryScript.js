//turn on border button

let imgNumber = document.images.length;
function imgBorderCreator() {
  for (let i = 1; i < imgNumber; i++) {
    let img;
    img = document.images[i];
    img.style.border = "10px solid black";
  }
}
bordersButton.onclick = imgBorderCreator;

// open new windows with enlarged goat images

function largeGoatImg(clicked_id) {
  let expandedGoat = document.getElementById(clicked_id);
  expandedGoat.style.width = "100%";
  expandedGoat.style.height = "100%";
  let url = expandedGoat.getAttribute('src');
  window.open(url, "Image", "resizable=no,status=no, scrollbars=no, toolbar=no, menubar=no, width=expandedGoat.style.width, height=expandedGoat.style.height,");
}