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


  function largeGoatImg(clicked_id) {
    var expandedGoat = document.getElementById(clicked_id);
    
    expandedGoat.style.width="100%";
    expandedGoat.style.height="100%";
    var url=expandedGoat.getAttribute('src');
    window.open(url,'Image','width=expandedGoat.style.width, height=expandedGoat.style.height,resizable=1');
      }

    /* let bordersClick = document.getElementById("bordersButton");

    bordersClick.addEventListener("click", () => {
      document.getElementById("farmImage")
        .style.border = "thick solid black";
    })
 
    bordersClick.addEventListener("click", () => {
      document.getElementById("goatImages")
        .style.border = "thick solid black";
    }); */
 
   
