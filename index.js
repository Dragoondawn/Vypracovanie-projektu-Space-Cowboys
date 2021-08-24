//---------------------menu stuff
$(window).scroll(function(){
    $('nav').toggleClass('scrolled',  
   $(this).scrollTop()  >  100); 
   });

   //navbar changing active
   $('#navbar').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
});


//--------------------------------------------------responsiveness
//-------------------burger menu
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        const isThere = nav.classList.contains('nav-active');
        if(isThere ) {
            document.getElementById("burger").innerHTML = "Close";
        }
        else {
            document.getElementById("burger").innerHTML = "Menu";
        }
    });
}
navSlide();

