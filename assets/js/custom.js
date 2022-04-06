
    // :: 2.0 NAVIGATION MENU ACTIVE CODE
    function navMenu() {

        // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
        $('[data-toggle="navbarToggler"]').click(function () {
            $('.navbar').toggleClass('active');
            $('body').toggleClass('canvas-open');
        });
        // MAIN MENU TOGGLER ICON
        $('.navbar-toggler').click(function () {
            $('.navbar-toggler-icon').toggleClass('active');
        });

        // NAVBAR STICKY
        var $stickyNav = $(".navbar-sticky");

        $(window).on("scroll load", function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 120) {
                $stickyNav.addClass("navbar-sticky-moved-up");
            } else {
                $stickyNav.removeClass("navbar-sticky-moved-up");
            }
            // apply transition
            if (scroll >= 250) {
                $stickyNav.addClass("navbar-sticky-transitioned");
            } else {
                $stickyNav.removeClass("navbar-sticky-transitioned");
            }
            // sticky on
            if (scroll >= 500) {
                $stickyNav.addClass("navbar-sticky-on");
            } else {
                $stickyNav.removeClass("navbar-sticky-on");
            }

        });
    }
    navMenu();

    /*sidenav*/
    function openSideNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    
    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }


    //services-slider

    $('.service-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        smartSpeed: 2000,
        autoplay: false,
        responsiveClass: true,
        autoplayTimeout: 4000,
        
        responsive: {
            0: {
                items: 1,
                nav:true,
                dots:false
                },
            576: {
                items: 1
            },
            768: {
                items: 2,
               
            },
            992: {
                items: 3
                
               
            }
        }
    });


      //project slider
      $('.project-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        responsiveClass: true,
        autoplayTimeout: 4000,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
                
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 1
               
            }
        }
    });

  //client-slider

    // $(document).ready(function(){

    //     if($('.brands_slider').length)
    //     {
    //     var brandsSlider = $('.brands_slider');
        
    //     brandsSlider.owlCarousel(
    //     {
    //     loop:true,
    //     autoplay:true,
    //     autoplayTimeout:2000,
    //     nav:true,
    //     dots:false,
    //     autoWidth:true,
    //     items:8,
    //     margin:42
    //     });
        
    //     if($('.brands_prev').length)
    //     {
    //     var prev = $('.brands_prev');
    //     prev.on('click', function()
    //     {
    //     brandsSlider.trigger('prev.owl.carousel');
    //     });
    //     }
        
    //     if($('.brands_next').length)
    //     {
    //     var next = $('.brands_next');
    //     next.on('click', function()
    //     {
    //     brandsSlider.trigger('next.owl.carousel');
    //     });
    //     }
    //     }
        
        
    //     });

         //client slider
      $('.client_slider.owl-carousel').owlCarousel({
        loop: true,
         margin: 20,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        responsiveClass: true,
        autoplayTimeout: 4000,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
                
                },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 5
                
               
            }
        }
    });
    
    /*projects-area*/

    $('.filters ul li').click(function(){
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');
        
        var data = $(this).attr('data-filter');
        $grid.isotope({
          filter: data
        })
      });
      
      var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
          columnWidth: ".all"
        }
      })


    
        
      
    //   });

  
    
 

      