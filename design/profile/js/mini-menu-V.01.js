var mini_menu = {

    /* Properties */

    /* Methods */
    toggleMiniMenu: function() {
        var width = window.innerWidth;
        var $logo = $('#logo');

        // toggle menu by clicking menu button
        $("#menu-toggle").click(function(e) {
            e.preventDefault();

            $("#wrapper").toggleClass("toggled");

            // change the parent link to white_color
            $('.sidebar-nav li a').removeClass('font_white');

            // close sub menus if main menu is toggled
            if($('ul.collapse').hasClass('in')) {
                $('ul.collapse').removeClass('in');
                $('.sidebar-nav li.panel_menu i.fa.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
            }

            // large view ports
            // if(width > 767)
            // {                

            //     // if the menu is already small then show the large, else show small
            //     if ($(".container-fluid").hasClass("container-fluid-with-mini-menu"))
            //     {
            //         // make menu large
            //         $(".container-fluid").removeClass("container-fluid-with-mini-menu");
                                        
            //         // change to logo icon
            //         $logo.attr('src', 'seguimientoStyle/img/logo-icon.png');                   
            //     }
            //     else
            //     {
            //         // close sub menus if main menu is toggled
            //         if($('ul.collapse').hasClass('in')) {
            //             $('ul.collapse').removeClass('in');
            //             $('.sidebar-nav li.panel_menu i.fa.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
            //         }

            //         // make menu small
            //         $(".container-fluid").addClass("container-fluid-with-mini-menu");                                                  
                    
            //         // change/show logo w/ text
            //         $logo.attr('src', 'seguimientoStyle/img/logo.png');
                    
            //     }                
            // }
            // else
            // {         
                // change/show logo w/ text
                $logo.attr('src', 'seguimientoStyle/img/logo-icon.png');

                // toggled has already fired. Open menu if clicked
                if ($("#wrapper").hasClass("toggled"))
                { 

                    // $("#sidebar-wrapper").getNiceScroll().hide();
                    // $("#sidebar-wrapper").niceScroll({
                    //     "railalign": "left",
                    //     "cursorcolor": "#2398f7",
                    //     "cursorborder": "#2398f7",
                    //     "cursorwidth": "3px"        
                    // });

                    // make menu small
                    $('#wrapper').css('padding-left', '63px');
                    $('#sidebar-wrapper').css('width', '63px');    

                    // change to logo icon
                    $logo.attr('src', 'seguimientoStyle/img/logo-icon.png');                
                }
                else
                {  
                    // make menu large
                    $('#wrapper').css('padding-left', '250px');
                    $('#sidebar-wrapper').css('width', '250px');

                    // change/show logo w/ text
                    $logo.attr('src', 'seguimientoStyle/img/logo.png');

                    // close sub menus if main menu is toggled
                    if($('ul.collapse').hasClass('in')) {
                        $('ul.collapse').removeClass('in');
                        $('.sidebar-nav li.panel_menu i.fa.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
                    }
                }
            // }
        });

        // toggle menu by clicking icons
        $('.sidebar-nav li.panel_menu').on('click', function() {

            // store child link of parent in var
            var $childEl = $(this).find('a');                        

            // if user clicks on element that already is open (has sub menu)
            if($(this).find('i.fa.fa-angle-up').hasClass('fa-angle-up')) 
            {    
                
                // if parent el does not have collapsed class
                if($childEl.hasClass('collapsed'))
                {
                    // remoce the white text and icon
                    $childEl.removeClass('font_white');
                    
                    // change up to down arrow
                    $childEl.find('i.fa.fa-angle-up')
                    .removeClass('fa-angle-up')
                    .addClass('fa-angle-down');
                }

                // close sub menus if main menu is toggled
                // if($('ul.collapse').hasClass('in')) {
                //     console.log('ywa');
                //     $('ul.collapse').removeClass('in');
                //     $('.sidebar-nav li.panel_menu i.fa.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
                // }

                // if click on submenu dont change arrow from up to down
                if(! $(this).find('li.sub_menu').hasClass('sub_menu') ) 
                {                   
                    // reset arrows
                    $('i.fa.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
                    // remove up arrow          
                    $(this).find('i.fa.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');                    
                }
                else
                {
                    // keep font white on parent anchor
                    $(this).children('a').addClass('font_white');
                    // remove down arrow
                    $(this).find('i.fa.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');                    
                }                              
            }
            else 
            {


                // close sub menus if main menu is toggled
                if($('ul.collapse').hasClass('in')) {
                    $('ul.collapse').removeClass('in');
                    $('.sidebar-nav li.panel_menu i.fa.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
                }

                // change/show logo w/ text
                $logo.attr('src', 'seguimientoStyle/img/logo.png');

                // change the parent link to white_color
                $('.sidebar-nav li a').removeClass('font_white');
               
                // change the parent link to white_color
                $(this).children('a').addClass('font_white');

                // reset arrows
                $('i.fa.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');             
                // remove down arrow
                $(this).find('i.fa.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
            }

            // large view ports
            // if(width > 767)
            // {
            //     if ($("#wrapper").hasClass("toggled"))
            //     {
            //         $(".container-fluid").removeClass("container-fluid-with-mini-menu");
            //         $("#wrapper").toggleClass("toggled");
            //     }
            // }
            // else
            // {
                if ($("#wrapper").hasClass("toggled"))
                {
                    $("#wrapper").toggleClass("toggled");

                    // make menu large
                    $('#wrapper').css('padding-left', '250px');
                    $('#sidebar-wrapper').css('width', '250px');                    
                }
            // }
        });

        // toggle menu by clicking icons
        $('.sidebar-nav li.panel_menu ul li.sub_menu').on('click', function() {
            $('.sidebar-nav li.panel_menu ul li.sub_menu').removeClass('clicked');
            $(this).addClass('clicked');

            // remoce the white text and icon
            // $(this).closest('a').addClass('testing');
            // console.log($(this).closest('a'));

            // if(! $(this).parents('a').hasClass('collapsed'))
            // {
                

            //     // remoce the white text and icon
            //     $(this).parents('a').addClass('font_white');
                
            //     // // change up to down arrow
            //     $(this).parents('a').find('i.fa.fa-angle-down')
            //     .removeClass('fa-angle-down')
            //     .addClass('fa-angle-up');
            // }
        });
    },

    init: function() {

        // initiate toggleMiniMenu function
        mini_menu.toggleMiniMenu();
    }
};

$(document).ready(function() { mini_menu.init(); });