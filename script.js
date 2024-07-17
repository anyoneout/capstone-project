

    let borderScript = document.getElementById("bordersButton");
 
    borderScript.addEventListener("click", () => {
      document.getElementById("farmImage")
        .style.border = "thick solid black";
    })
 
    borderScript.addEventListener("mouseover", () => {
      document.getElementById("goatImages")
        .style.border = "thick solid black";
    });
 
    