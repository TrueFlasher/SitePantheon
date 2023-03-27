$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        items:1,
        loop:true,
        margin:50,

        autoplay:true,

        responsive:{
            0:{
                items:1
            },


            700:{
                items:2
            },



            1000:{
                items:3
            },

        }
    });
});
