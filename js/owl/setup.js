$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3,
            margin: 50,
            stagePadding: 100,
            merge: false
        },
        1000:{
            items:5
        }
    }
})