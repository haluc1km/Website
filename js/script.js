
$( '.js-input' ).keyup(function() {
	if( $(this).val() ) {
	   $(this).addClass('not-empty');
	} else {
	   $(this).removeClass('not-empty');
	}
  });


  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }
  
  function openNav() {
    document.getElementById("mySidebar").style.width = "40vw";
    document.getElementById("main").style.marginLeft = "40vw";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  const video = document.querySelector("#video");


  const openwindowButtons = document.querySelectorAll('[data-window-target]')
  const closewindowButtons = document.querySelectorAll('[data-closew-button]')
  
  const overlay = document.getElementById('overlay1')
  var clicked = false
  var xButton = false
  
  openwindowButtons.forEach(button => {
    button.addEventListener('click', () => {
      const window = document.querySelector(button.dataset.windowTarget)
    clicked = true
    xButton = false
      openwindow(window)
    })
  })
  
  overlay.addEventListener('click', () => {
    clicked = false
      xButton = true
    const windows = document.querySelectorAll('.window.active')
    windows.forEach(window => {
      closewindow(window)
    })
  })
  
  closewindowButtons.forEach(button => {
    button.addEventListener('click', () => {
      clicked = false
      xButton = true
      const window = button.closest('.window')
      closewindow(window)
    })
  })
  
  function openwindow(window) {
    if (window == null) return
    window.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closewindow(window) {
    if (window == null) return
    window.classList.remove('active')
    overlay.classList.remove('active')
    }
  
    const openwindow1buttons = document.querySelectorAll('[data-window1-target]')
    const closewindow1buttons = document.querySelectorAll('[data-close-button]')
    
    const overlay1 = document.getElementById('overlay1')
    var clicked1 = false
    var xButton1 = false
    
    openwindow1buttons.forEach(button => {
      button.addEventListener('click', () => {
        const window1 = document.querySelector(button.dataset.window1Target)
      clicked1 = true
      xButton1 = false
        openwindow1(window1)
      })
    })
    
    overlay1.addEventListener('click', () => {
      clicked1 = false
        xButton1 = true
      const window1s = document.querySelectorAll('.window1.active')
      window1s.forEach(window1 => {
        closewindow1(window1)
      })
    })
    
    closewindow1buttons.forEach(button => {
      button.addEventListener('click', () => {
        clicked1 = false
        xButton1 = true
        const window1 = button.closest('.window1')
        closewindow1(window1)
      })
    })
    
    function openwindow1(window1) {
      if (window1 == null) return
      window1.classList.add('active')
      overlay1.classList.add('active')
    }
    
    function closewindow1(window1) {
      if (window1 == null) return
      window1.classList.remove('active')
      overlay1.classList.remove('active')
      }
    
        const openwindow2buttons = document.querySelectorAll('[data-window2-target]')
        const closewindow2buttons = document.querySelectorAll('[data-close2-button]')
        
        const overlay2 = document.getElementById('overlay2')
        var clicked2 = false
        var xButton2 = false
        
        openwindow2buttons.forEach(button => {
          button.addEventListener('click', () => {
            const window2 = document.querySelector(button.dataset.window2Target)
          clicked2 = true
          xButton2 = false
            openwindow2(window2)
          })
        })
        
        overlay2.addEventListener('click', () => {
          clicked2 = false
            xButton2 = true
          const window2s = document.querySelectorAll('.window2.active')
          window2s.forEach(window2 => {
            closewindow2(window2)
          })
        })
        
        closewindow2buttons.forEach(button => {
          button.addEventListener('click', () => {
            clicked2 = false
            xButton2 = true
            const window2 = button.closest('.window2')
            closewindow2(window2)
          })
        })
        
        function openwindow2(window2) {
          if (window2 == null) return
          window2.classList.add('active')
          overlay2.classList.add('active')
        }
        
        function closewindow2(window2) {
          if (window2 == null) return
          window2.classList.remove('active')
          overlay2.classList.remove('active')
          }
      
          const openwindow3buttons = document.querySelectorAll('[data-window3-target]')
          const closewindow3buttons = document.querySelectorAll('[data-close3-button]')
          
          const overlay3 = document.getElementById('overlay3')
          var clicked3 = false
          var xButton3 = false
          
          openwindow3buttons.forEach(button => {
            button.addEventListener('click', () => {
              const window3 = document.querySelector(button.dataset.window3Target)
            clicked3 = true
            xButton3 = false
              openwindow3(window3)
            })
          })
          
          overlay3.addEventListener('click', () => {
            clicked3 = false
              xButton3 = true
            const window3s = document.querySelectorAll('.window3.active')
            window3s.forEach(window3 => {
              closewindow3(window3)
            })
          })
          
          closewindow3buttons.forEach(button => {
            button.addEventListener('click', () => {
              clicked3 = false
              xButton3 = true
              
              const window3 = button.closest('.window3')
              closewindow3(window3)
              video.pause();
              video.currentTime = 0;
            })
          })
          
          function openwindow3(window3) {
            if (window3 == null) return
            window3.classList.add('active')
            overlay3.classList.add('active')
          }
          
          function closewindow3(window3) {
            if (window3 == null) return
            window3.classList.remove('active')
            overlay3.classList.remove('active')

            }
  


function expand(card) {
	if((clicked == false && xButton == false) && (clicked1 == false && xButton1 == false) &&(clicked2 == false && xButton2 == false)&&(clicked3 == false && xButton3 == false)){
	card.classList.toggle('project--expanded')

	// If card is not expanded after toggle, add 'unexpanded' class
	if (!card.classList.contains('project--expanded')) card.classList.toggle('project--unexpanded');
	// Else if card is expanded after toggle and still contains 'unexpanded' class, remove 'unexpanded'
	else if (card.classList.contains('project--expanded') && card.classList.contains('project--unexpanded')) card.classList.toggle('project--unexpanded');
	}
		else{
			xButton = false
			xButton1 = false
      xButton2 = false
      xButton3=false
		}
}


let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
  video.pause();
  video.currentTime = 0;
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
