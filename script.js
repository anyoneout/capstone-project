//turn on border button

let imgNumber = document.images.length;
console.log(imgNumber);

function imgBorderCreator() {
  for(let i=1; i < document.images.length; i++) {
    let img;
    img = document.images[i];
    img.style.border = "10px solid black";
    }
}
bordersButton.onclick = imgBorderCreator;

// open window with enlarged goat images
function largeGoatImg(clicked_id) {
  let expandedGoat = document.getElementById(clicked_id);
  expandedGoat.style.width="100%";
  expandedGoat.style.height="100%";
  let url=expandedGoat.getAttribute('src');
  window.open(url,"Image","resizable=no,status=no, scrollbars=no, toolbar=no, menubar=no, width=expandedGoat.style.width, height=expandedGoat.style.height,");
}

// make cheeses visible on button click
function cheeseChoice(clicked_id) {

  let cheeseOpen = document.getElementById(clicked_id);

  if(cheeseOpen === freshButton) {
    freshList.style.visibility = "visible";
  }
  else if (cheeseOpen === agedButton) {
  agedList.style.visibility = "visible";
  } else {

  }
}


 // button event listener for borders     
    /* let bordersClick = document.getElementById("bordersButton");

    bordersClick.addEventListener("click", () => {
      document.getElementById("farmImage")
        .style.border = "thick solid black";
    })
 
    bordersClick.addEventListener("click", () => {
      document.getElementById("goatImages")
        .style.border = "thick solid black";
    }); */
 
   
