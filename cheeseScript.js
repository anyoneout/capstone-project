
// make cheeses visible on button click
function cheeseChoice(clicked_id) {
  let cheeseOpen = document.getElementById(clicked_id);
  if (cheeseOpen === freshButton) {
    freshList.style.visibility = "visible";
  }
  else if (cheeseOpen === agedButton) {
    agedList.style.visibility = "visible";
  } else {
  }
}