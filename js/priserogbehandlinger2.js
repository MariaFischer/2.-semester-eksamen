//-----------singel lashes galleri-------- 

let secondslideIndex = 1;
showsecondSlides(secondslideIndex);



function secondcurrentSlide(n) {
  showsecondSlides(secondslideIndex = n);
}


function showsecondSlides(n) {
  let i;
  const secondslides = document.getElementsByClassName("singlelashes-slide");
  const seconddots = document.getElementsByClassName("dot-two");
  if (n > secondslides.length) {secondslideIndex = 1}
  if (n < 1) {secondslideIndex = secondslides.length}
  for (i = 0; i < secondslides.length; i++) {
     secondslides[i].style.display = "none";
  }
  for (i = 0; i < seconddots.length; i++) {
      seconddots[i].className = seconddots[i].className.replace(" active", "");
  }
  secondslides[secondslideIndex-1].style.display = "block";
 seconddots[secondslideIndex-1].className += " active";
}