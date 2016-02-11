(function($){
  $(document).ready(function(){

    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDvkj4cMx9Vt2XjelNz_ypdYIQXDQKGps0&callback=initialize";
    document.body.appendChild(script);

    // messages popup
    var $msg = $('#popup-messages');
    if (typeof $msg !== undefined && $msg.length) {
      $msg.jqm({});
      $msg.jqmShow();
    };

    // vitamins popups
    $('.jqmWindow').jqm({});
    $('.encyclop__link').each(function() {
      $(this).click(function(ev) {
        ev.preventDefault();
        var n = $(this).attr('data-target');
        $('#popup-vitamin-' + n).jqmShow();
      })
    });

    $('#question').on('click', function(ev) {
      ev.preventDefault();
      $('#popup-question').jqmShow();
    });

    // navigation links
    $('.header__nav').singlePageNav({
      offset: 0,
      filter: ':not(.external)',
      updateHash: true,
      beforeStart: function() {
      },
      onComplete: function() {
      }
    });

    // scroll to address map
    $('#buy').on('click', function(ev) {
      ev.preventDefault();
      $('html, body').animate({
        scrollTop: $("#address").offset().top
      }, 900);
    });

    // scroll down button
    $('#down').on('click', function(ev) {
      ev.preventDefault();
      $('html, body').animate({
        scrollTop: $("#pros").offset().top + 40
      }, 300);
    });

  });
})(jQuery);
