(function($){
  $(document).ready(function(){

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
