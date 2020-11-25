document.querySelectorAll('a[href^="#"]').forEach(elem => {
    	elem.addEventListener('click', e => {
	        e.preventDefault();
	        document.querySelector(elem.getAttribute('href')).scrollIntoView({
	            behavior: 'smooth'
	        });
	    });
	});
$( document ).ready(function() {
    $(".menu a").click(function() { 
      $(".ctrl-menu").prop("checked", false);
  });
});

window.onload = function () {
  let slider = new MicroSlider('.micro-slider', { 
    indicators: true, 
    indicatorText: '',
    perspectiveFactor: 1.0
  });

  document.getElementById('next').addEventListener("click", function(e){
     slider.next();
  })
  document.getElementById('previous').addEventListener("click", function(e){
     slider.prev();
  })
}