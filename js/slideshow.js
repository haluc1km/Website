
  let slideIndex1 = [1,1];
  let slideId1 = ["mySlides4", "mySlides3"]
  showSlides1(1, 0);
  showSlides1(1, 1);
  
  function plusSlides1(n, no) {
    showSlides1(slideIndex1[no] += n, no);
  }
  
  function showSlides1(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId1[no]);
    if (n > x.length) {slideIndex1[no] = 1}    
    if (n < 1) {slideIndex1[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
     }
     x[slideIndex1[no]-1].style.display = "block";  
   }

   let slideIndex2 = [1,1];
   let slideId2 = ["mySlides5", "mySlides6"]
   showSlides2(1, 0);
   showSlides2(1, 1);
   
   function plusSlides2(n, no) {
     showSlides2(slideIndex2[no] += n, no);
   }
   
   function showSlides2(n, no) {
     let i;
     let x = document.getElementsByClassName(slideId2[no]);
     if (n > x.length) {slideIndex2[no] = 1}    
     if (n < 1) {slideIndex2[no] = x.length}
     for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      x[slideIndex2[no]-1].style.display = "block";  
    }
 
 
