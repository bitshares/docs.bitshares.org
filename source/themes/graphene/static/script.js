(function($) {
  var $window = $(window);
  var $document = $(document);

  /*
   * Sidebar stick.
   */
  $(function() {
    var $sidebar = $('.menubar');
    var $navbar = $('.header');
    var elTop;
    $window
      .on('resize.sidestick', function() {
        $sidebar.removeClass('fixed');
        elTop = $sidebar.offset().top - 51; /// 51 is height of menubar
        $window.trigger('scroll.sidestick');
      })
      .on('scroll.sidestick', function() {
        var scrollY = $window.scrollTop();
        $sidebar.toggleClass('fixed', (scrollY >= elTop));
      })
      .trigger('resize.sidestick');
  });

  /*
   * Top Nav stick
   */
  $(function() {
    var $navbar = $('.header');
    var elTop;
    $window
      .on('resize.topnav', function() {
        $navbar.removeClass('fixed');
        elTop = $navbar.offset().top;
        $window.trigger('scroll.topnav');
      })
      .on('scroll.topnav', function() {
        var scrollY = $window.scrollTop();
        $navbar.toggleClass('fixed', (scrollY >= elTop));
      })
      .trigger('resize.topnav');
  });

})(jQuery);
