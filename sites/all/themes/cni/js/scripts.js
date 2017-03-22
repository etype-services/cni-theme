(function ($) {
    Drupal.behaviors.superfish = {
        attach: function (context) {

            function mobile_menu(w) {
                var wrapper = $('#mobile-menu-wrapper');
                if (w > 767) {
                    if ( wrapper.length > 0 ) {
                        wrapper.remove();
                    }
                } else {
                    if ( wrapper.length === 0 ) {
                        $('.region-user-menu').prepend('<div id="mobile-menu-wrapper"><div id="mobile-menu-control"></div><div id="search-control"></div><ul id="mobile-menu" class="menu"></ul></div>');
                        $('#superfish-1 li').clone().appendTo($('#mobile-menu'));
                        $('#block-system-user-menu ul.menu li').clone().appendTo($('#mobile-menu'));
                        $('#mobile-menu li ul').remove();
                        $('#mobile-menu-control').click(function(){$('#mobile-menu').toggle()});
                        $('#search-control').click(function(){
                            $('#block-search-form').toggle();
                            if($('#block-search-form').is(':visible')) {
                                $('#edit-search-block-form--2').focus();
                            }
                        });
                    }
                }
            };

            var w = $(window).width();
            mobile_menu(w);
            var obj = $('#superfish li.sf-depth-1:first-child a');
            obj.click(function (e) {
                var text = $(this).text();
                e.preventDefault();
                $('#block-superfish-1 ul li.sf-depth-1:not(:first-child)').toggle();
                if (text == 'Show Menu') {
                    $(this).text('Hide Menu');
                } else {
                    $(this).text('Show Menu');
                }
            });

            $(window).resize(function () {
                var w = $(window).width();
                mobile_menu(w);
            });
        }
    };
})(jQuery);
