var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//============ Modal in Login =============

var modal1 = document.getElementById("myModalz");

var btn1 = document.getElementById("myBtnn");

var span1 = document.getElementsByClassName("close1")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal) {
    modal.style.display = "none";
  }

}

//============ Modal in card =====================


// var modal2 = document.getElementById("myModalq");

// var btn2 = document.getElementById("myBtnmy");

// var span2 = document.getElementsByClassName("close2")[0];

// btn2.onclick = function() {
//   modal2.style.display = "block";
// }
// span2.onclick = function() {
//   modal2.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }

// }