// JavaScript Document

// Site Nav
        $(".site-nav-open").on("click", function(){
			"use strict";
            $(".site-nav").show();
        });
        $(".site-nav-close").on("click", function(){
			"use strict";
            $(".site-nav").hide();
        });

        // Hero Arrow
        $(".hero-arrow").on("click", function(event){
			"use strict";
            event.preventDefault();
			//code hinting example
            
            
        });

        // Scroll Events
        $(window).on("load resize scroll", function(){
			"use strict";
            // Light/Dark Header
            var bodyPosition        = $("body").scrollTop(),
                lightSection1       = $("#intro"),
                lightSection1Top    = lightSection1.offset().top,
                lightSection1Bottom = lightSection1Top + lightSection1.outerHeight(),
                lightSection2       = $(".artwork-2"),
                lightSection2Top    = lightSection2.offset().top,
                lightSection2Bottom = lightSection2Top + lightSection2.outerHeight(),
                lightSection3       = $(".contact"),
                lightSection3Top    = lightSection3.offset().top,
                lightSection3Bottom = lightSection3Top + lightSection3.outerHeight();
            if (
                ( bodyPosition > lightSection1Top && bodyPosition < lightSection1Bottom ) ||
                ( bodyPosition > lightSection2Top && bodyPosition < lightSection2Bottom ) ||
                ( bodyPosition > lightSection3Top && bodyPosition < lightSection3Bottom )
            ) {
                $("header").addClass("dark");
            } else {
                $("header").removeClass("dark");
            }
            
        });