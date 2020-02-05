$(document).ready(function(){
  $('.plotbtn01').modal();
  $('.plotbtn02').modal();
});

$( function() {
  $( "#draggable" ).draggable();
} );


$('.plotbtn01').hover(function() {
    $('.piechart').addClass('animate1');
    $('.piechart').removeClass('animate');

    $('.laptop').addClass('animate2');
    $('.laptop').removeClass('animate');

    $('.technician').addClass('animate3');
    $('.technician').removeClass('animate');

    $('.coinstack').addClass('animate4');
    $('.coinstack').removeClass('animate');
}, function() {
    $('.piechart').addClass('animate');
    $('.piechart').removeClass('animate1');

    $('.laptop').removeClass('animate2');
    $('.laptop').addClass('animate');

    $('.technician').removeClass('animate3');
    $('.technician').addClass('animate');

    $('.coinstack').removeClass('animate4');
    $('.coinstack').addClass('animate');
});


$('.plotbtn02').hover(function() {
    $('.machine04').addClass('animate1');
    $('.machine04').removeClass('animate');

    $('.machine05').addClass('animate2');
    $('.machine05').removeClass('animate');

    $('.machine06').addClass('animate3');
    $('.machine06').removeClass('animate');

    $('.paper').addClass('animate4');
    $('.paper').removeClass('animate');
}, function() {
    $('.machine04').addClass('animate');
    $('.machine04').removeClass('animate1');

    $('.machine05').removeClass('animate2');
    $('.machine05').addClass('animate');

    $('.machine06').removeClass('animate3');
    $('.machine06').addClass('animate');

    $('.paper').removeClass('animate4');
    $('.paper').addClass('animate');
});

$('.plotbtn03').hover(function() {
    $('.paper-with-pen').addClass('animate1');
    $('.paper-with-pen').removeClass('animate');

    $('.paper2').addClass('animate2');
    $('.paper2').removeClass('animate');

    $('.diy-on-plate').addClass('animate3');
    $('.diy-on-plate').removeClass('animate');

    $('.mobile').addClass('animate4');
    $('.mobile').removeClass('animate');

    $('.technician-on-plate').addClass('animate5');
    $('.technician-on-plate').removeClass('animate');

    $('.device').addClass('animate6');
    $('.device').removeClass('animate');

    $('.machine07').addClass('animate7');
    $('.machine07').removeClass('animate');

    $('.monitor').addClass('animate8');
    $('.monitor').removeClass('animate');

    $('.speech').addClass('animate9');
    $('.speech').removeClass('animate');
}, function() {
    $('.paper-with-pen').addClass('animate');
    $('.paper-with-pen').removeClass('animate1');

    $('.paper2').removeClass('animate2');
    $('.paper2').addClass('animate');

    $('.diy-on-plate').removeClass('animate3');
    $('.diy-on-plate').addClass('animate');

    $('.mobile').removeClass('animate4');
    $('.mobile').addClass('animate');

    $('.technician-on-plate').removeClass('animate5');
    $('.technician-on-plate').addClass('animate');

    $('.device').removeClass('animate6');
    $('.device').addClass('animate');

    $('.machine07').removeClass('animate7');
    $('.machine07').addClass('animate');

    $('.monitor').removeClass('animate8');
    $('.monitor').addClass('animate');

    $('.speech').removeClass('animate9');
    $('.speech').addClass('animate');
});
