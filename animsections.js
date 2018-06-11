$(function() {
    
    //ANIMATION BY SECTION
    
    var globalEase = 'Power2.easeOut';
        
    var section1_1anim = new TimelineMax({paused: true});
    section1_1anim.staggerTo('.sa1-bullet', .35, {scale: 1, autoAlpha: 1, ease: globalEase}, 0.15);
    
    var section1_2anim = new TimelineMax({paused: true});
    section1_2anim.to('.sa1-c1-bar-1', .35, {width: '100%', ease: globalEase});
    section1_2anim.to('.sa1-c1-bar-2', .35, {width: '90%', ease: globalEase}, '-=.15');
    section1_2anim.to('.sa1-c1-bar-3', .35, {width: '80%', ease: globalEase}, '-=.15');
    section1_2anim.to('.sa1-c1-bar-4', .35, {width: '70%', ease: globalEase}, '-=.15');
    section1_2anim.to('.sa1-c1-bar-5', .35, {width: '60%', ease: globalEase}, '-=.15');
    
    var section1_3anim =  new TimelineMax({paused: true});
    section1_3anim.to('.sa1-c2-bar-1', .35, {height: '40%', ease: globalEase});
    section1_3anim.to('.sa1-c2-bar-2', .35, {height: '50%', ease: globalEase}, '-=.15');
    section1_3anim.to('.sa1-c2-bar-3', .35, {height: '60%', ease: globalEase}, '-=.15');
    section1_3anim.to('.sa1-c2-bar-4', .35, {height: '71%', ease: globalEase}, '-=.15');
    section1_3anim.to('.sa1-c2-bar-5', .35, {height: '81%', ease: globalEase}, '-=.15');

    var section2_1anim =  new TimelineMax({paused: true});
    section2_1anim.to('.sa2r1-chart-item-1', .35, {width: '60%', ease: globalEase});
    section2_1anim.to('.sa2r1-chart-item-2', .45, {width: '90%', ease: globalEase}, '-=.15');
    //requires inline-block and does not wrap correctly:
    //section2_1anim.to('.sa2r1-color1', .15, {scale: 1.2, ease: globalEase }).to('.sa2r1-color1', .15, {scale: 1, ease: globalEase });
    
    var section2_2anim =  new TimelineMax({paused: true});
    section2_2anim.to('#infog-twothirds-bluepath', .75, {strokeDashoffset: 640, ease: globalEase});
    section2_2anim.to('#infog-speedo-needle', .5, {rotation: 38, ease: globalEase});
    
    var section3_1anim =  new TimelineMax({paused: true});
    section3_1anim.staggerTo('.sa3-t-item', .35, {autoAlpha: 1, ease: globalEase}, 0.25);
    section3_1anim.staggerTo('.sa3-t-sub', .25, {scaleY: 1, ease: globalEase}, 0.25);    
    
    var section3_2anim =  new TimelineMax({paused: true});
    section3_2anim.to('.sa3-c1-item1', .35, {height: '33%', ease: globalEase});
    section3_2anim.to('.sa3-c1-item2', .35, {height: '66%', ease: globalEase}, '-=.15');
    section3_2anim.to('.sa3-c1-item3', .35, {height: '99%', ease: globalEase}, '-=.15');

    var section3_3anim = new TimelineMax({paused: true});
    section3_3anim.staggerTo('.sa3-iconlist li', .35, {scale: 1, autoAlpha: 1, ease: globalEase}, 0.15);
    
    var section4_1anim = new TimelineMax({paused: true});
    section4_1anim.staggerTo('.sa4-houses span', .15, {scale: 1, autoAlpha: 1, ease: globalEase}, 0.025);
    
    var section4_2anim = new TimelineMax({paused: true});
    section4_2anim.to('#sa4-pie-slice', .75, {rotation: 90, ease: globalEase});
    
    var section5_1anim = new TimelineMax({paused: true});
    section5_1anim.to('.sa5-c-col1 .sa5-c-yt', .35, {bottom: '42%', ease: globalEase});
    section5_1anim.to('.sa5-c-col1 .sa5-c-fb', .35, {bottom: '27%', ease: globalEase}, '-=.2');
    section5_1anim.to('.sa5-c-col1 .sa5-c-sc', .35, {bottom: '15%', ease: globalEase}, '-=.2');
    section5_1anim.to('.sa5-c-col1 .sa5-c-in', .35, {bottom: '15%', ease: globalEase}, '-=.2');
    section5_1anim.to('.sa5-c-col1 .sa5-c-tw', .35, {bottom: '3%', ease: globalEase}, '-=.2');

    section5_1anim.to('.sa5-c-col2 .sa5-c-yt', .35, {bottom: '57%', ease: globalEase}, '-=.2');
    section5_1anim.to('.sa5-c-col2 .sa5-c-fb', .35, {bottom: '37%', ease: globalEase}, '-=.2');
    section5_1anim.to('.sa5-c-col2 .sa5-c-sc', .35, {bottom: '25%', ease: globalEase}, '-=.2');
    section5_1anim.to('.sa5-c-col2 .sa5-c-in', .35, {bottom: '25%', ease: globalEase}, '-=.2');
    section5_1anim.to('.sa5-c-col2 .sa5-c-tw', .35, {bottom: '12%', ease: globalEase}, '-=.2');

    section5_1anim.to('.sa5-c-col3 .sa5-c-yt', .35, {bottom: '85%', ease: globalEase}, '-=.2');
    section5_1anim.to('.sa5-c-col3 .sa5-c-fb', .35, {bottom: '65%', ease: globalEase}, '-=.2');
    section5_1anim.to('.sa5-c-col3 .sa5-c-sc', .35, {bottom: '46%', ease: globalEase}, '-=.2');
    section5_1anim.to('.sa5-c-col3 .sa5-c-in', .35, {bottom: '46%', ease: globalEase}, '-=.2');
    section5_1anim.to('.sa5-c-col3 .sa5-c-tw', .35, {bottom: '25%', ease: globalEase}, '-=.2');
    
    var section5_2anim = new TimelineMax({paused: true});
    section5_2anim.staggerTo('.sa5-iconlist li', .35, {scale: 1, autoAlpha: 1, ease: globalEase}, 0.15);
    
    
    
    
    //SCROLLMAGIC ANIMATION TRIGGERS for demo *************
    
    //init SM controller
    var controller = new ScrollMagic.Controller();

    //Section 1-1
    var scene1_1 = new ScrollMagic.Scene({triggerElement: '.section-anim-1'});
    scene1_1.setTween(section1_1anim.restart()).addTo(controller);

    //Section 1-2
    var scene1_2 = new ScrollMagic.Scene({triggerElement: '.sa1-2col-col1'});
    scene1_2.setTween(section1_2anim.restart()).addTo(controller);

    //Section 1-3
    var scene1_3 = new ScrollMagic.Scene({triggerElement: '.sa1-2col-col2'});
    scene1_3.setTween(section1_3anim.restart()).addTo(controller);
    
    //Section 2-1
    var scene2_1 = new ScrollMagic.Scene({triggerElement: '.sa2-row1'});
    scene2_1.setTween(section2_1anim.restart()).addTo(controller);
    
    //Section 2-2
    var scene2_2 = new ScrollMagic.Scene({triggerElement: '.sa2-row2'});
    scene2_2.setTween(section2_2anim.restart()).addTo(controller);
   
    //Section 3-1
    var scene3_1 = new ScrollMagic.Scene({triggerElement: '.sa3-table'});
    scene3_1.setTween(section3_1anim.restart()).addTo(controller);

    //Section 3-2
    var scene3_2 = new ScrollMagic.Scene({triggerElement: '.sa3-row2-col1'});
    scene3_2.setTween(section3_2anim.restart()).addTo(controller);

    //Section 3-3
    var scene3_3 = new ScrollMagic.Scene({triggerElement: '.sa3-iconlist'});
    scene3_3.setTween(section3_3anim.restart()).addTo(controller);

    //Section 4-1
    var scene4_1 = new ScrollMagic.Scene({triggerElement: '.section-anim-4'});
    scene4_1.setTween(section4_1anim.restart()).addTo(controller);

    //Section 4-2
    var scene4_2 = new ScrollMagic.Scene({triggerElement: '.sa4-row2'});
    scene4_2.setTween(section4_2anim.restart()).addTo(controller);
    
    //Section 5-1
    var scene5_1 = new ScrollMagic.Scene({triggerElement: '.sa5-chart'});
    scene5_1.setTween(section5_1anim.restart()).addTo(controller);

    //Section 5-2
    var scene5_2 = new ScrollMagic.Scene({triggerElement: '.sa5-row2'});
    scene5_2.setTween(section5_2anim.restart()).addTo(controller);
    

    //SLIDER for section 3 on mobile
    $('.sa3-table').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            }
        ]
    });
    
    
});