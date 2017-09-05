var mini_menu = {

    /* Properties */

    /* Methods */
    toggleMiniMenu: function() {
        var width = window.innerWidth,
            $menuToggle = $("#menu-toggle"),
            $wrapper = $('#wrapper'),
            $sideWrapper = $('#sidebar-wrapper'),
            $sideMenu = $('.sidebar-nav li.panel_menu'),
            $logo = $('#logo'),
            $collapseEl = $('ul.collapse'),
            $menuLink = $('.sidebar-nav li a'),
            $upArrow = $('.sidebar-nav li.panel_menu i.fa.fa-angle-up');

        // toggle menu by clicking menu button
        $menuToggle.click(function(e) {
            e.preventDefault();

            $wrapper.toggleClass("toggled");

            // change the parent link to white_color
            $menuLink.removeClass('font_white');

            // close sub menus if main menu is toggled
            if ($collapseEl.hasClass('in')) {
                $collapseEl.removeClass('in');
                $upArrow.removeClass('fa-angle-up').addClass('fa-angle-down');
            }

            // change/show logo w/ text
            $logo.attr('src', 'seguimientoStyle/img/logo-icon.png');

            // toggled has already fired. Open menu if clicked
            if ($wrapper.hasClass("toggled")) {
                // make menu small
                $wrapper.css('padding-left', '63px');
                $sideWrapper.css('width', '63px');

                // change to logo icon
                $logo.attr('src', 'seguimientoStyle/img/logo-icon.png');
            } else {
                // make menu large
                $wrapper.css('padding-left', '250px');
                $sideWrapper.css('width', '250px');

                // change/show logo w/ text
                $logo.attr('src', 'seguimientoStyle/img/logo.png');

                // close sub menus if main menu is toggled
                if ($collapseEl.hasClass('in')) {
                    $collapseEl.removeClass('in');
                    $upArrow.removeClass('fa-angle-up').addClass('fa-angle-down');
                }
            }
        });

        // toggle menu by clicking icons
        $sideMenu.on('click', function() {

            // store child link of parent in var
            var $childEl = $(this).find('a');

            // if user clicks on logout or user profile link
            if ($childEl.attr('id') !== 'exit' && $childEl.attr('id') !== 'userProfile') {
                // if user clicks on element that already is open (has sub menu)
                if ($(this).find('i.fa.fa-angle-up').hasClass('fa-angle-up')) {

                    // if parent el does not have collapsed class
                    if ($childEl.hasClass('collapsed')) {
                        // remove the white text and icon
                        $childEl.removeClass('font_white');

                        // change up to down arrow
                        $childEl.find('i.fa.fa-angle-up')
                            .removeClass('fa-angle-up')
                            .addClass('fa-angle-down');
                    }

                    // if click on submenu dont change arrow from up to down
                    if (!$(this).find('li.sub_menu').hasClass('sub_menu')) {
                        // reset arrows
                        $('i.fa.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
                        // remove up arrow
                        $(this).find('i.fa.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
                    } else {
                        // keep font white on parent anchor
                        $(this).children('a').addClass('font_white');
                        // remove down arrow
                        $(this).find('i.fa.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
                    }
                } else {
                    // close sub menus if main menu is toggled
                    if ($collapseEl.hasClass('in')) {
                        $collapseEl.removeClass('in');
                        $upArrow.removeClass('fa-angle-up').addClass('fa-angle-down');
                    }

                    // change/show logo w/ text
                    $logo.attr('src', 'seguimientoStyle/img/logo.png');

                    // change the parent link to white_color
                    $menuLink.removeClass('font_white');

                    // change the parent link to white_color
                    $(this).children('a').addClass('font_white');

                    // reset arrows
                    $('i.fa.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
                    // remove down arrow
                    $(this).find('i.fa.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
                }

                if ($wrapper.hasClass("toggled")) {
                    $wrapper.toggleClass("toggled");

                    // make menu large
                    $wrapper.css('padding-left', '250px');
                    $sideWrapper.css('width', '250px');
                }
            }
        });

        // toggle menu by clicking icons
        $('.sidebar-nav li.panel_menu ul li.sub_menu').on('click', function() {
            $('.sidebar-nav li.panel_menu ul li.sub_menu').removeClass('clicked');
            $(this).addClass('clicked');
        });

        $('#sidebar-wrapper').hover(function() {
            $(this).toggleClass('hide_scroll')
        });
    },

    menuCharacterLimit: function() {
        var charLimitMenu = 18,
            charLimitSubMenu = 21,
            $mainMenuLink = $('.main_menu_link'),
            $subMenuLink = $('.sub_menu_link'),
            $mainMenuLinkParent,
            $mainMenuLinkChild,
            text,
            $menuLink = [];

        // add ... to main menu links
        $mainMenuLink.each(function() {

            // get the current text
            $text = $(this).text().trim();

            // check if text is longer that character limit
            if ($text.length > charLimitMenu) {
                // getting the current icons
                mainMenuLinkParent = $(this).children('i').get(0);
                mainMenuLinkChild = $(this).children('i').get(1);

                $(this).html($text.substr(0, charLimitMenu) + '...').prepend(mainMenuLinkParent).append(mainMenuLinkChild);
            }
        });

        // add ... to sub menu links
        $subMenuLink.each(function() {

            // get the current text
            $text = $(this).text().trim();

            // check if text is longer that character limit
            if ($text.length > charLimitSubMenu) {
                $(this).html($text.substr(0, charLimitSubMenu) + '...');
            }

        });
    },

    init: function() {
        // initiate toggleMiniMenu function
        mini_menu.toggleMiniMenu();
        mini_menu.menuCharacterLimit();
    }
};

$(document).ready(function() { mini_menu.init(); });