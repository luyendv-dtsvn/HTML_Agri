/* ########################################################### */
/* #################### RUBY MEGA MENU   ##################### */
/* ######################## V 1.0 ############################ */

/* ############## DEMO SHOWCASE JAVASCRIPT ################### */
/* THESE JS FOR DEMO SHOWCASE ONLY. ANY PROBLEM/QUESTION       */
/* REGARDING DEMO JS WILL NOT BE SUPPORTED.                    */
document.documentElement.style.setProperty(
  '--scrollbar-width',
  `${window.innerWidth - document.documentElement.clientWidth}px`
);
rubyMenuDemo = function()
{
  // Strict Mode
  "use strict";

  // Theme Switcher
  $( "#rubyTheme1" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-1.css') );
  });
  $( "#rubyTheme2" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-2.css') );
  });
  $( "#rubyTheme3" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-3.css') );
  });
  $( "#rubyTheme4" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-4.css') );
  });
  $( "#rubyTheme5" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-5.css') );
  });
  $( "#rubyTheme6" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-6.css') );
  });
  $( "#rubyTheme7" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-7.css') );
  });
  $( "#rubyTheme8" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-8.css') );
  });
  $( "#rubyTheme9" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-9.css') );
  });
  $( "#rubyTheme10" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-10.css') );
  });
  $( "#rubyTheme11" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-11.css') );
  });
  $( "#rubyTheme12" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-12.css') );
  });
  $( "#rubyTheme13" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-13.css') );
  });
  $( "#rubyTheme14" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-14.css') );
  });
  $( "#rubyTheme15" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-15.css') );
  });
  $( "#rubyTheme16" ).on('click', function() {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ruby-theme-16.css') );
  });
  $( "#cmn-toggle-1" ).on('click', function() {
    $("div.ruby-wrapper:not(.ruby-vertical)").toggleClass("ruby-menu-full-width");
  });
  $( "#cmn-toggle-2" ).on('click', function() {
    $("div.ruby-menu-demo-header").toggleClass("ruby-menu-demo-header-bg");
    $("div.ruby-wrapper").toggleClass("ruby-menu-transparent");
  });
  $( "#cmn-toggle-3" ).on('click', function() {
    var attr = $("#ruby-transitions").attr('disabled');
    if (typeof attr !== typeof undefined && attr !== false) {
      // Element has this attribute
      $("#ruby-transitions").removeAttr("disabled");
    } else {
      $("#ruby-transitions").attr("disabled", "disabled");
    }
  });
  $( "#cmn-toggle-4" ).on('click', function() {
    $("ul.ruby-menu").toggleClass("ruby-menu-dividers");
  });
}

rubyMenuDemo();


/* ########################################################### */
/* #################### RUBY MEGA MENU   ##################### */
/* ######################## V 1.0 ############################ */

/* #################### MAIN JAVASCRIPT ###################### */

rubyMenu = function()
{
  // Strict Mode
  "use strict";

  var rubyMenuMegaBlog = "ul.ruby-menu > li.ruby-menu-mega-blog";
  var tabMaxHeight = -1;
  var $rubyMenuMainToggle = $(".c-hamburger");

  var rubyMenuMegaShopListHeight = $("ul.ruby-menu > li.ruby-menu-mega-shop > div").height();
  var rubyMenuMegaShopActiveContentHeight = $("ul.ruby-menu > li.ruby-menu-mega-shop > div > ul > li.ruby-active-menu-item > div").height();
  var rubyMenuMegaShopHeight = rubyMenuMegaShopListHeight + rubyMenuMegaShopActiveContentHeight;

  // Ruby Mobile Main Level Toggle
  $rubyMenuMainToggle.on("click", function(e) {
    e.preventDefault;
    $rubyMenuMainToggle.toggleClass("is-active");
    $("ul.ruby-menu").toggleClass("ruby-mobile-sublevel-show")
    // Do something else, like open/close menu
  });

  // PAGE LOAD FUNCTION
  $(window).bind("load resize", function() {

    var rubyWindowWidth = $(window).width();

    if ( rubyWindowWidth <= 768 ) {

      // Reset Ruby Menu Mega Blog height to auto for mobile view
      $(rubyMenuMegaBlog).find(">div").css("height","auto");
      $(rubyMenuMegaBlog).find(">div > ul > li > div").css("height","100%");

      // Reset Ruby Menu Mega Shop height to auto for mobile view
      $( "ul.ruby-menu > li.ruby-menu-mega-shop > div" ).css("height","auto");

      $( "ul.ruby-menu > li.ruby-menu-mega-shop > div > ul > li" ).mouseover(function() {
        $( "ul.ruby-menu > li.ruby-menu-mega-shop > div" ).css("height","auto");
      });
      $( "ul.ruby-menu > li.ruby-menu-mega-shop > div > ul > li" ).mouseout(function() {
        $( "ul.ruby-menu > li.ruby-menu-mega-shop > div" ).css("height","auto");
      });

      var rubyMenuDropdownToggle       = "span.ruby-dropdown-toggle";
      var $rubyDropdownToggleHtml      = $( "<span class='ruby-dropdown-toggle'></span>" );
      var rubyMenuDropdownToggleRotate = "ruby-dropdown-toggle-rotate";
      var rubyMenuSubLevelVisible      = "ruby-mobile-sublevel-show";

      // Append Dropdown Toggle Arrows and Bind Click Events
      if (  !$( rubyMenuDropdownToggle ).length  ) {
        $("ul.ruby-menu > li:has(> ul), ul.ruby-menu > li > ul > li:has(> ul), ul.ruby-menu > li > ul > li > ul > li:has(> ul), ul.ruby-menu > li.ruby-menu-mega, ul.ruby-menu > li.ruby-menu-mega-blog, ul.ruby-menu > li.ruby-menu-mega-shop, ul.ruby-menu > li.ruby-menu-mega-blog > div > ul.ruby-menu-mega-blog-nav > li, ul.ruby-menu > li.ruby-menu-mega-shop > div > ul > li").append($rubyDropdownToggleHtml);
        // Open&Close Any Sublevel Menu when Dropdown Toggle Arrows are clicked
        $( rubyMenuDropdownToggle ).bind('click', function(e) {
          e.stopPropagation();
          // Rotate the Arrow
          $(this).toggleClass( rubyMenuDropdownToggleRotate );
          // Define Any SubLevel as Variable
          var $rubyMenuToggler1stAncestor = $(this).parents().eq(0);
          var $rubyMenuAnySubLevel = $rubyMenuToggler1stAncestor.find(" > ul ");
          var $rubyMenuAnyMegaSubLevel = $rubyMenuToggler1stAncestor.find(" > div ");
          // Hide & Show SubLevel
          if($rubyMenuAnySubLevel.hasClass(rubyMenuSubLevelVisible)) {
            $rubyMenuAnySubLevel.removeClass(rubyMenuSubLevelVisible);
          } else {
            $rubyMenuAnySubLevel.addClass(rubyMenuSubLevelVisible);
          }
          if($rubyMenuAnyMegaSubLevel.hasClass(rubyMenuSubLevelVisible)) {
            $rubyMenuAnyMegaSubLevel.removeClass(rubyMenuSubLevelVisible);
          } else {
            $rubyMenuAnyMegaSubLevel.addClass(rubyMenuSubLevelVisible);
          }
        });
      }


    }
    else {
      // RUBY MEGA MENU - BLOG --> RETURN TO ACTIVE TAB ALWAYS WHEN MOUSEOUT
    	$( "ul.ruby-menu > li.ruby-menu-mega-blog > div > ul.ruby-menu-mega-blog-nav > li" ).mouseover(function() {
    	  if ( !$(this).is(":first-child") ) {
    			$( "ul.ruby-menu > li.ruby-menu-mega-blog > div > ul.ruby-menu-mega-blog-nav > li:first-child" ).removeClass( "ruby-active-menu-item" );
    		}
    	});

    	$( "ul.ruby-menu > li.ruby-menu-mega-blog > div > ul.ruby-menu-mega-blog-nav > li" ).mouseleave(function() {
    		$( "ul.ruby-menu > li.ruby-menu-mega-blog > div > ul.ruby-menu-mega-blog-nav > li:first-child" ).addClass( "ruby-active-menu-item" );
    	});

      // RUBY MEGA MENU - BLOG --> SET HEIGHT OF THE CONTAINER EQUALS TO THE HEIGHT OF THE MAXIMUM CONTENT HEIGHT
      $(rubyMenuMegaBlog).each(function() {
        var m = $(this).find("> div > ul > li");
        $(m).each(function() {
          var h = $(this).find("> div").height();
          tabMaxHeight = h > tabMaxHeight ? h : tabMaxHeight;
        });
        $(rubyMenuMegaBlog).find(">div").css("height",tabMaxHeight+5);
        $(rubyMenuMegaBlog).find(">div > ul > li > div").css("height",tabMaxHeight);
      });

      // RUBY MEGA MENU - SHOP --> SET HEIGHT OF THE CONTAINER EQUALS TO THE HEIGHT OF THE MAXIMUM CONTENT HEIGHT
      $( "ul.ruby-menu > li.ruby-menu-mega-shop > div" ).css("height",rubyMenuMegaShopHeight);

      $( "ul.ruby-menu > li.ruby-menu-mega-shop > div > ul > li" ).mouseover(function() {
        var updatedHeight = $ ( this ).find( "> div" ).height() + rubyMenuMegaShopListHeight;
        $( "ul.ruby-menu > li.ruby-menu-mega-shop > div" ).css("height",updatedHeight);
      });

      $( "ul.ruby-menu > li.ruby-menu-mega-shop > div > ul > li" ).mouseout(function() {
        $( "ul.ruby-menu > li.ruby-menu-mega-shop > div" ).css("height",rubyMenuMegaShopHeight);
      });

      // RUBY MEGA MENU - SHOP --> RETURN TO ACTIVE TAB ALWAYS WHEN MOUSEOUT
    	$( "ul.ruby-menu > li.ruby-menu-mega-shop > div > ul > li" ).mouseover(function() {
        if ( !$(this).is(":first-child") ) {
      		$( "ul.ruby-menu > li.ruby-menu-mega-shop > div > ul > li:first-child" ).removeClass( "ruby-active-menu-item" );
      	}
    	});

      $( "ul.ruby-menu > li.ruby-menu-mega-shop > div > ul > li" ).mouseleave(function() {
      	$( "ul.ruby-menu > li.ruby-menu-mega-shop > div > ul > li:first-child" ).addClass( "ruby-active-menu-item" );
    	});

    }
  });

}

rubyMenu();