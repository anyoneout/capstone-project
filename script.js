

    /* let bordersClick = document.getElementById("bordersButton");

    bordersClick.addEventListener("click", () => {
      document.getElementById("farmImage")
        .style.border = "thick solid black";
    })
 
    bordersClick.addEventListener("click", () => {
      document.getElementById("goatImages")
        .style.border = "thick solid black";
    }); */
 
    let imgNumber = document.images.length;
    console.log(imgNumber);

    function imgBorderCreator() {
      for(let i=0; i < document.images.length; i++) {
        let img;
        img = document.images[i];
        img.style.border = "10px solid black";
      }
  
    }
    bordersButton.onclick = imgBorderCreator;


    function largeGoatImg() {
      var goatsArray = ["goat1","goat2","goat3","goat4","goat5","goat6","goat7","goat8","goat9","goat10","goat11","goat12",]
      for (let i=0; i<goatsArray.length; i++) {
      var largeImage = document.getElementById(goatsArray[i]);
      largeImage.style.display = 'initial';
      largeImage.style.width="100%";
      largeImage.style.height="100%";
      var url=largeImage.getAttribute('src');
      window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
      }
   }