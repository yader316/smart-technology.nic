!function(g){g.fn.twentytwenty=function(m){m=g.extend({default_offset_pct:.5,orientation:"horizontal",before_label:"1080p",after_label:"720p",no_overlay:!1,move_slider_on_hover:!1,move_with_handle_only:!0,click_to_move:!1},m);return this.each(function(){var e=m.default_offset_pct,s=g(this),c=m.orientation,t="vertical"===c?"down":"left",n="vertical"===c?"up":"right";if(s.wrap("<div class='twentytwenty-wrapper twentytwenty-"+c+"'></div>"),!m.no_overlay){s.append("<div class='twentytwenty-overlay'></div>");var a=s.find(".twentytwenty-overlay");a.append("<div class='twentytwenty-before-label' data-content='"+m.before_label+"'></div>"),a.append("<div class='twentytwenty-after-label' data-content='"+m.after_label+"'></div>")}var d=s.find("img:first"),l=s.find("img:last");s.append("<div class='twentytwenty-handle'></div>");var r=s.find(".twentytwenty-handle");r.append("<span class='twentytwenty-"+t+"-arrow'></span>"),r.append("<span class='twentytwenty-"+n+"-arrow'></span>"),s.addClass("twentytwenty-container"),d.addClass("twentytwenty-before"),l.addClass("twentytwenty-after");function i(t){var e,n,a,i,o=(e=t,n=d.width(),a=d.height(),{w:n+"px",h:a+"px",cw:e*n+"px",ch:e*a+"px"});r.css("vertical"===c?"top":"left","vertical"===c?o.ch:o.cw),i=o,"vertical"===c?(d.css("clip","rect(0,"+i.w+","+i.ch+",0)"),l.css("clip","rect("+i.ch+","+i.w+","+i.h+",0)")):(d.css("clip","rect(0,"+i.cw+","+i.h+",0)"),l.css("clip","rect(0,"+i.w+","+i.h+","+i.cw+")")),s.css("height",i.h)}function o(t,e){var n,a,i;return n="vertical"===c?(e-y)/u:(t-p)/h,a=0,i=1,Math.max(a,Math.min(i,n))}g(window).on("resize.twentytwenty",function(t){i(e)});function w(t){((t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY)&&"vertical"!==c||(t.distX<t.distY&&t.distX<-t.distY||t.distX>t.distY&&t.distX>-t.distY)&&"vertical"===c)&&t.preventDefault(),s.addClass("active"),p=s.offset().left,y=s.offset().top,h=d.width(),u=d.height()}function v(t){s.hasClass("active")&&(e=o(t.pageX,t.pageY),i(e))}function f(){s.removeClass("active")}var p=0,y=0,h=0,u=0,_=m.move_with_handle_only?r:s;_.on("movestart",w),_.on("move",v),_.on("moveend",f),m.move_slider_on_hover&&(s.on("mouseenter",w),s.on("mousemove",v),s.on("mouseleave",f)),r.on("touchmove",function(t){t.preventDefault()}),s.find("img").on("mousedown",function(t){t.preventDefault()}),m.click_to_move&&s.on("click",function(t){p=s.offset().left,y=s.offset().top,h=d.width(),u=d.height(),e=o(t.pageX,t.pageY),i(e)}),g(window).trigger("resize.twentytwenty")})}}(jQuery);