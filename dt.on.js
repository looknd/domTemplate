/**
 * 绑定事件
 */
(function ($) {

    "use strict";

    $.domTemplate.registerTag('on', function (ctx, name, exp) {
        var attrs = exp.split(",");
        for (var i = 0; i < attrs.length; i++) {
            var pairs = attrs[i].split("=");
            if (pairs.length === 2) {

                ctx.options.$currentElement.on($.dt.trim(pairs[0]),$.dt.template.compile($.dt.trim(pairs[1]), ctx.options.data));
            }
        }
    });

})($);