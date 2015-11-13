(function($) {
  var $window = $(window);
  var $document = $(document);
  $(function() {
    var $card = $('.title-card');
    if (!$card.length) return;

    var $header = $('.header');
    var headerHeight = $header.length ? $header.outerHeight() : 0;

    $window
      .on('resize.title-card', function() {
        var windowWidth = $window.width();

        if (windowWidth < 480) {
          $card.css('height', '');
        } else {
          var height = $window.height();
          $card.css('height', height - headerHeight);
        }
      })
      .trigger('resize.title-card');
  });
})(jQuery);
