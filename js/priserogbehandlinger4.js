//-----------volume lashes galleri-------- 

let fourthslideIndex = 1;
showfourthSlides(fourthslideIndex);



function fourthcurrentSlide(n) {
  showfourthSlides(fourthslideIndex = n);
}


function showfourthSlides(n) {
  let i;
  const fourthslides = document.getElementsByClassName("volumelashes-slide");
  const fourdots = document.getElementsByClassName("dot-four");
  if (n > fourthslides.length) {fourthslideIndex = 1}
  if (n < 1) {fourthslideIndex = fourthslides.length}
  for (i = 0; i < fourthslides.length; i++) {
     fourthslides[i].style.display = "none";
  }
  for (i = 0; i < fourdots.length; i++) {
      fourdots[i].className = fourdots[i].className.replace(" active", "");
  }
  fourthslides[fourthslideIndex-1].style.display = "block";
 fourdots[fourthslideIndex-1].className += " active";
}