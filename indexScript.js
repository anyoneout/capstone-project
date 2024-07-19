// navbar color changer with return statement
function chooseNewNavColor() {
  let navChoice;
  navChoice = prompt("Choose a new navbar color");
  return navChoice;
}

function navbarColorUpdate() {
  let colorChoice = chooseNewNavColor();
  let navElement = document.getElementById("mainNav");
  navElement.style.backgroundColor = colorChoice;
}
