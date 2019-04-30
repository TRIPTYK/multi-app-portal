(function($) {

    $('.dropdown-menu').hide();


    // Pour que le menu reste ouvert s'il l'était déjà...
    // let url = window.location;
    // url = url.toString();
    // url = url.split("=");
    // let ex = url[url.length-1];
    // if (ex == "true") {
    //     $('#tpk-leftnavbar').addClass('expanded');
    //     $("#tpk-topnavbar .text-logo").show();
    // }
    //--------------------

    $(document).ready(function(){


        /********
         *  SlideDown menu topnavbar
         * ********/
        $('#tpk-topnavbar .dropdown-toggle').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            let that = $(this);
            
            if (that.next('.dropdown-menu:visible').length == 0) {
                $('.dropdown-menu').slideUp();
                $('.dropdown-menu').attr("aria-expanded", false);
                $('.dropdown-toggle').attr("aria-expanded", false);
                $('.dropdown-toggle').parent().removeClass('active');

                that.next('.dropdown-menu').slideDown();
                that.next('.dropdown-menu').attr("aria-expanded", true);
                that.attr("aria-expanded", true);
                that.parent().addClass('active');
            } else {
                $('.dropdown-menu').slideUp();
                $('.dropdown-menu').attr("aria-expanded", false);
                $('.dropdown-toggle').attr("aria-expanded", false);
                $('.dropdown-toggle').parent().removeClass('active');
            }
            
        });


        /***********
         *  Expand left navbar 
         * **********/

        $('#tpk-topnavbar .text-logo').hide();
        $('.expand-leftbar').on('click', function(e) {

            // pour que le menu reste ouvert s'il n'était déjà ---> ou inverse
            // let newurl = window.location;
            // newurl = newurl.toString();
            // newurl = newurl.split('?');
            // newurl.pop();
            //----------

            e.preventDefault();
            if ($('#tpk-leftnavbar').hasClass('expanded')) {
                $('#tpk-leftnavbar').removeClass('expanded');
                $("#tpk-topnavbar .text-logo").hide();
                $('#tpk-leftnavbar .collapse').hide();
                // window.location = newurl + '?ex=false'; //
            } else {
                $('#tpk-leftnavbar').addClass('expanded');
                $("#tpk-topnavbar .text-logo").show();
                $('.menu-title').show();
                // window.location = newurl + '?ex=true'; //
            }
        });


        /**********
         *  Dropdown menu left if expanded
         * *********/
        $('#tpk-leftnavbar .sidebar-nav li a').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            let that = $(this);
            
            if ($('#tpk-leftnavbar').hasClass('expanded')) {
                if (that.next('.collapse').length == 0) {
                    // window.location = that.attr('href') + "?ex=true";
                    window.location = that.attr('href');
                } else {
                    if (that.next('.collapse:visible').length == 0) {
                        $('#tpk-leftnavbar .collapse').slideUp();
                        $('#tpk-leftnavbar .sidebar-nav li a').removeClass('active');
                        that.next('.collapse').slideDown();
                        that.addClass('active');
                    } else {
                        $('#tpk-leftnavbar .collapse').slideUp();
                        $('#tpk-leftnavbar .sidebar-nav li a').removeClass('active');
                    }
                }
            }
            
        });

        /**********
         *  Dropdown menu left if not expanded
         * *********/
        // $('#tpk-leftnavbar .sidebar-nav li a').hover(function(e){
        //     let that = $(this);
        //     if (!$('#tpk-leftnavbar').hasClass('expanded')) {
        //         $('.collapse').hide();
        //         $('.menu-title').hide();
        //             that.addClass('hover');
        //         that.next('.collapse').addClass('menu-position');
        //         that.next('.collapse').show();
        //         that.find('.menu-title').show();
        //     }
        // }, function(e) {
        //     let that = $(this);
        //     if (!$('#tpk-leftnavbar').hasClass('expanded')) {
        //         that.removeClass('hover');
        //         that.next('.collapse').removeClass('menu-position');
        //         that.next('.collapse').hide();
        //         that.find('.menu-title').hide();
        //     }
        // });

    });


})(jQuery);