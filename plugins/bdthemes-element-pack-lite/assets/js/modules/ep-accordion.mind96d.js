!function(t,n){"use strict";var o=function(t,n){var o=t.find(".bdt-ep-accordion-container"),i=o.find(".bdt-ep-accordion");if(o.length){var a=i.data("settings"),e=a.activeHash,d=a.hashTopOffset,c=a.hashScrollspyTime,r=a.activeScrollspy;null==r&&(r="no"),"yes"==e&&(n(window).on("load",(function(){"yes"==r?l(i,c,d):bdtUIkit.accordion(i).toggle(n('[data-title="'+window.location.hash.substring(1)+'"]').data("accordion-index"),!1)})),n(i).find(".bdt-ep-accordion-title").off("click").on("click",(function(t){window.location.hash=n.trim(n(this).attr("data-title")),l(i,c=1e3,d)})),n(window).on("hashchange",(function(t){l(i,c=1e3,d)})))}function l(t,o,i){if(window.location.hash&&n(t).find('[data-title="'+window.location.hash.substring(1)+'"]').length){var a=n('[data-title="'+window.location.hash.substring(1)+'"]').closest(t).attr("id");"yes"==r?n("html, body").animate({easing:"slow",scrollTop:n("#"+a).offset().top-i},o,(function(){})).promise().then((function(){bdtUIkit.accordion(t).toggle(n('[data-title="'+window.location.hash.substring(1)+'"]').data("accordion-index"),!1)})):bdtUIkit.accordion(t).toggle(n('[data-title="'+window.location.hash.substring(1)+'"]').data("accordion-index"),!0)}}};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/bdt-accordion.default",o),elementorFrontend.hooks.addAction("frontend/element_ready/bdt-acf-accordion.default",o)}))}(jQuery,window.elementorFrontend);