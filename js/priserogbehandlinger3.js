//-----------hybrid lashes galleri-------- 

let thirdslideIndex = 1;
showthirdSlides(thirdslideIndex);



function thirdcurrentSlide(n) {
  showthirdSlides(thirdslideIndex = n);
}


function showthirdSlides(n) {
  let i;
  const thirdslides = document.getElementsByClassName("hybridlashes-slide");
  const thirddots = document.getElementsByClassName("dot-three");
  if (n > thirdslides.length) {thirdslideIndex = 1}
  if (n < 1) {thirdslideIndex = thirdslides.length}
  for (i = 0; i < thirdslides.length; i++) {
     thirdslides[i].style.display = "none";
  }
  for (i = 0; i < thirddots.length; i++) {
      thirddots[i].className = thirddots[i].className.replace(" active", "");
  }
  thirdslides[thirdslideIndex-1].style.display = "block";
 thirddots[thirdslideIndex-1].className += " active";
}