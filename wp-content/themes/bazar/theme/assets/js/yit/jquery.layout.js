var YIT_Browser={isTablet:function(){var e=jQuery("body").hasClass("responsive")||jQuery("body").hasClass("iPad")||jQuery("body").hasClass("Blakberrytablet")||jQuery("body").hasClass("isAndroidtablet")||jQuery("body").hasClass("isPalm");var t=jQuery(window).width()<=1024&&jQuery(window).width()>=768;return e&&t},isPhone:function(){var e=jQuery("body").hasClass("responsive")||jQuery("body").hasClass("isIphone")||jQuery("body").hasClass("isWindowsphone")||jQuery("body").hasClass("isAndroid")||jQuery("body").hasClass("isBlackberry");var t=jQuery(window).width()<=480&&jQuery(window).width()>=320;return e&&t},isViewportBetween:function(e,t){if(t=="undefinied"){t=0}if(!t){return jQuery(window).width()<e}else{return jQuery(window).width()<e&&jQuery(window).width()>t}},isLowResMonitor:function(){return jQuery(window).width()<1200},isMobile:function(){return this.isTablet()||this.isPhone()},isIE:function(){if(undefined!==jQuery.browser){return jQuery.browser.msie}},isIE8:function(){return this.isIE()&&jQuery.browser.version=="8.0"},isIE9:function(){return this.isIE()&&jQuery.browser.version=="9.0"},isIE10:function(){return this.isIE()&&jQuery.browser.version=="10.0"}};(function(e){var t;e.fn.extend({stickyFooter:function(n){function r(){var n=e(document.body).height()-e("#sticky-footer-push").height();if(n<e(window).height()){var r=e(window).height()-n;if(!e("#sticky-footer-push").length>0){e(t).before('<div id="sticky-footer-push"></div>')}if(e("#wpadminbar").length>0){r-=28}e("#sticky-footer-push").height(r)}}t=this;r();e(window).on("sticky",r).scroll(r).resize(r)}})})(jQuery);jQuery(document).ready(function(e){e("li.megamenu > div > ul.sub-menu").each(function(){e(this).addClass("megamenu-length-"+e(this).children("li").length)});var t=function(t,n){if(!n){n=e(this)}if(e("body").hasClass("isMobile")){var r=e(".sub-menu:visible");if(r.length){r.each(function(t,i){if(e(i).parent().hasClass("megamenu")){e(r[t]).hide();return false}else{var s=n.parents(".sub-menu");e.each(r,function(t){if(!s[t]){e(r[t]).hide()}})}})}}var i={};var s=e("body").outerWidth(true);if(yit.isBoxed)s=e("#header .container").outerWidth(true);var o=e("> ul.sub-menu",n);if(o.length>0){var u=o.outerWidth(true);var a=n.position().left+u;if(a>=s){if(s>=u){i.right=0}else{i.left=(u-s)/2}}else if(n.hasClass("megamenu")){i.left=n.position().left}e("> .sub-menu",n).css(i).stop(true,true).fadeIn(300)}};e(window).resize(t);var n=function(t,n){if(!n){n=e(this)}if(!n.parent().parent().hasClass("megamenu")){e("> .sub-menu",n).fadeOut(300)}};e("#nav ul > li").hover(t,n);e("#nav ul > li").each(function(){var t=e(this);if(e("ul",this).length>0){e(this).children("a").append('<span class="sf-sub-indicator"> &raquo;</span>');var n;(n=function(){t.children("a").css("padding-right","").css({paddingRight:parseInt(t.children("a").css("padding-right"))+16})})();e(window).resize(n)}});if(e("body").hasClass("isMobile")&&!e("body").hasClass("iphone")&&!e("body").hasClass("ipad")){e(".menu-item").click(function(r){r.stopPropagation();var i=e("> .submenu, > .sub-menu",this);if(i.length){e("> a",this).attr("href","#");r.preventDefault();if(i.is(":hidden")){t(r,e(this))}else{n(r,e(this))}}})}})