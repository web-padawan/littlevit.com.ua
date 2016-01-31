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

  });
})(jQuery);
