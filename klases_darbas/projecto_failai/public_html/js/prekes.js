
export class Preke{
  constructor(){
    cards();
    krepseli();
  }
}

function cards() {
  $(document).ready(function() {
    $(document).on('click', '.card', function() {
      $(this).toggleClass('aktyvi_preke'); 
    });

    $('.card').removeClass('aktyvi_preke'); 
  });
}
function krepseli(){
  $(document).ready(function() {
    $(document).on('click', '.krepselis', function() {
      $(this).parent().fadeToggle( "slow", "linear" );
    });

  });
}