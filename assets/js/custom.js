$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Khanas HTML Template
* Version       : 1.0
==================================== */



/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Progress-bar
4. owl carousel
5. welcome animation support
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	
	// 2. Smooth Scroll spy
		
		$('.header-area').sticky({
           topSpacing:0
        });
		
		//=============

		$('li.smooth-menu a').bind("click", function(event) {
			event.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 0
			}, 1200,'easeInOutExpo');
		});
		
		$('body').scrollspy({
			target:'.navbar-collapse',
			offset:0
		});

	// 3. Progress-bar
	
		var dataToggleTooTip = $('[data-toggle="tooltip"]');
		var progressBar = $(".progress-bar");
		if (progressBar.length) {
			progressBar.appear(function () {
				dataToggleTooTip.tooltip({
					trigger: 'manual'
				}).tooltip('show');
				progressBar.each(function () {
					var each_bar_width = $(this).attr('aria-valuenow');
					$(this).width(each_bar_width + '%');
				});
			});
		}
	
	// 4. owl carousel
	
		// i. client (carousel)
		
			$('#client').owlCarousel({
				items:7,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:true,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:4

						},
						1199:{
							items:4
						},
						1200:{
							items:7
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})


    // 5. welcome animation support

        $(window).load(function(){
        	$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        });

});	
	

// 6. Visual animation support

document.addEventListener("DOMContentLoaded", function () {
    const visualContainers = document.querySelectorAll(".visual-container");

    visualContainers.forEach((container) => {
        const overlay = container.querySelector(".visual-overlay");
        const header = overlay.querySelector("h3");
        const details = overlay.querySelector("p");

        container.addEventListener("mouseenter", () => {
            overlay.classList.add("show-details");
            setTimeout(() => {
                header.style.transform = "translateY(-30px)";
                details.style.opacity = "1";
            }, 5000); // 5 seconds
        });

        container.addEventListener("mouseleave", () => {
            overlay.classList.remove("show-details");
            header.style.transform = "translateY(0)";
            details.style.opacity = "0";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const visualsCarousel = document.querySelector("#visualsCarousel");

    if (visualsCarousel) {
        visualsCarousel.addEventListener("mouseenter", function () {
            $('#visualsCarousel').carousel('pause'); // Pause the carousel
        });

        visualsCarousel.addEventListener("mouseleave", function () {
            $('#visualsCarousel').carousel('cycle'); // Resume the carousel
        });
    }
});

<script>
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = this;
    var data = new FormData(form);
    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            form.reset();
            document.getElementById('form-message').style.display = 'block';
        } else {
            response.json().then(function(data) {
                alert(data.error || "There was a problem submitting your form.");
            });
        }
    }).catch(function(error) {
        alert("There was a problem submitting your form.");
    });
});
</script>

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('.contact-form form');
    if(form){
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var data = new FormData(form);
            fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(function(response) {
                if (response.ok) {
                    form.reset();
                    document.getElementById('form-message').style.display = 'block';
                } else {
                    response.json().then(function(data) {
                        alert(data.error || "There was a problem submitting your form.");
                    });
                }
            }).catch(function(error) {
                alert("There was a problem submitting your form.");
            });
        });
    }
});
