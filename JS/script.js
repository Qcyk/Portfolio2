$(document).ready(function () {
   
 //TYPED JS   
    
    $(function () {
        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            startDelay: 2000,
            typeSpeed: 100
        });
    });

    //zmiana koloru paska menu

//        var nav = $('nav');
//       
//        if($('#menu li').first().hasClass('active')) {
//        nav.addClass('menu-color');
//        }
//        else{
//        nav.removeClass('menu-color');
//        }
       $('.section-2').hover(function(){
           nav.addClass('menu-color');
       });
       $('.section-1').hover(function(){
           nav.removeClass()('menu-color');
       });
       $('.section-3').hover(function(){
           nav.addClass('menu-color3');
            
           
       });
       $('.section-2').hover(function(){
           nav.removeClass('menu-color3');
       });
       
       
 	
       
       
      
        
//        if($('#menu li').hasClass('first')){
//            
//           nav.addClass('menu-color');
//        }
//        else {
//              nav.removeClass('menu-color');
//        }
      
    
    
    var nav = $('nav');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            nav.addClass('menu-color');
		
        } else {
            nav.removeClass('menu-color');
        }
    });
    
//MENU MOBILNE

    $('#menu').slicknav({
        prependTo: '#attach-mobile-menu',
        label: ''

    });

//ONE PAGE

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor: false,
        paddingTop: false,
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 1000,
        responsiveHeight: 0,
        responsiveSlides: true,
        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
        lazyLoading: true,
        //events
        onLeave: function (index, nextIndex, direction) {},
        afterLoad: function (anchorLink, index) {},
        afterRender: function () {},
        afterResize: function () {},
        afterResponsive: function (isResponsive) {},
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {}
    });
    
    //PRELOADER
   
    setTimeout(
        function() {
            $("#loader-wrapper").fadeOut();
        }, 2000);

    $('html').addClass('js');
    


});


      

