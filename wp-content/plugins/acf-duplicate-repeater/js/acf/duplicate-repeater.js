!function i(a,o,l){function u(n,e){if(!o[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(s)return s(n,!0);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}var f=o[n]={exports:{}};a[n][0].call(f.exports,function(e){return u(a[n][1][e]||e)},f,f.exports,i,a,o,l)}return o[n].exports}for(var s="function"==typeof require&&require,e=0;e<l.length;e++)u(l[e]);return u}({1:[function(e,n,t){"use strict";e("flexible-content.js"),e("repeater.js")},{"flexible-content.js":24,"repeater.js":25}],2:[function(e,t,n){(function(e){"use strict";var n,i=(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule?n:{default:n};t.exports={extendACF:function(e,n){var t,d,f;t=acf.models[e].prototype,d=n,f=i.default.extend({},t),i.default.each(d,function(e,n){if(void 0!==t[e]){if("events"===e)return void(t.events=i.default.extend(t.events,n));"function"==typeof n&&(f[e]=t[e])}t[e]=n}),t.parent=f}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(t,d,e){(function(e){"use strict";var n,s=(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule?n:{default:n};var c={_default:t("acf-values/default.js"),accordion:function(e,n){i(e,n,"> .acf-input > .acf-table > tbody > .acf-row > .acf-field, > .acf-input > .acf-fields > .acf-field")},button_group:t("acf-values/button-group.js"),checkbox:t("acf-values/checkbox.js"),color_picker:t("acf-values/color-picker.js"),text_and_hidden:t("acf-values/text-and-hidden.js"),date_time_picker:t("acf-values/text-and-hidden.js"),file:t("acf-values/file.js"),flexible_content:function(e,n){var t=acf.getField(e),f=acf.getField(n);t.$layouts().each(function(e,n){var t,d=(0,s.default)(n);f.add({layout:d.data("layout")}),t=f.$layouts().last(),i(d,t,"> .acf-table > tbody > .acf-row > .acf-field, > .acf-fields > .acf-field")})},gallery:t("acf-values/gallery.js"),google_map:t("acf-values/google-map.js"),group:function(e,n){i(e,n,"> .acf-input > .acf-table > tbody > .acf-row > .acf-field, > .acf-input > .acf-fields > .acf-field")},image:t("acf-values/image.js"),link:t("acf-values/link.js"),oembed:t("acf-values/oembed.js"),radio:t("acf-values/radio.js"),range:t("acf-values/range.js"),relationship:t("acf-values/relationship.js"),repeater:function(e,n){var t=acf.getField(e),d=acf.getField(n),f=d.$rows();t.$rows().each(function(e,n){var t=f[e]?(0,s.default)(f[e]):d.add();i((0,s.default)(n),t,"> .acf-field, > .acf-fields > .acf-field")})},select:t("acf-values/select.js"),taxonomy:t("acf-values/taxonomy.js"),textarea:t("acf-values/textarea.js"),true_false:t("acf-values/true-false.js"),user:t("acf-values/user.js"),wysiwyg:t("acf-values/wysiwyg.js")};c.date_time_picker=c.date_picker=c.time_picker=c.text_and_hidden,c.post_object=c.page_link=c.select;var i=function(e,n,t){t=t||"> .acf-field, > .acf-fields > .acf-field";var l=e.find(t),u=n.find(t);l.each(function(e,n){return u[e]?(0,s.default)(l[e]).data("type")!==(0,s.default)(u[e]).data("type")?(console.trace("Error: source field type does not match destination field type"),!1):(t=(0,s.default)(l[e]),d=(0,s.default)(u[e]),f=t.attr("data-type"),i=acf.getField(d),a=s.default.Event("acf_duplicate:"+f),o=s.default.Event("acf_duplicated:"+f),a.destination=o.destination=d,t.trigger(a),void(a.isDefaultPrevented()||(c[f]?c[f](t,d):-1!==["text","email","url","number"].indexOf(f)?c._default(t,d,f):c.text_and_hidden(t,d),t.trigger(o),i.has("conditions")&&i.getConditions().render()))):(console.trace("Error: source fields do not match destination fields"),!1);var t,d,f,i,a,o})};d.exports={copyValues:i}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"acf-values/button-group.js":4,"acf-values/checkbox.js":5,"acf-values/color-picker.js":6,"acf-values/default.js":7,"acf-values/file.js":8,"acf-values/gallery.js":9,"acf-values/google-map.js":10,"acf-values/image.js":11,"acf-values/link.js":12,"acf-values/oembed.js":13,"acf-values/radio.js":14,"acf-values/range.js":15,"acf-values/relationship.js":16,"acf-values/select.js":17,"acf-values/taxonomy.js":18,"acf-values/text-and-hidden.js":19,"acf-values/textarea.js":20,"acf-values/true-false.js":21,"acf-values/user.js":22,"acf-values/wysiwyg.js":23}],4:[function(e,t,n){(function(e){"use strict";var n,d=(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule?n:{default:n};t.exports=function(e,n){var t=n.find('[type="radio"]');e.find('[type="radio"]').each(function(e,n){if((0,d.default)(n).prop("checked"))return(0,d.default)(t[e]).trigger("click"),!1})}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],5:[function(e,t,n){(function(e){"use strict";var n,d=(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule?n:{default:n};t.exports=function(e,n){var t=n.find('[type="checkbox"]');e.find('[type="checkbox"]').each(function(e,n){(0,d.default)(t[e]).prop("checked",(0,d.default)(n).prop("checked"))})}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(e,t,n){(function(e){"use strict";var n;(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule;t.exports=function(e,n){var t=acf.getField(e),d=acf.getField(n),f=t.$inputText().val();d.$inputText().iris("option","color",f)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,t,n){(function(e){"use strict";var n,f=(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule?n:{default:n};t.exports=function(e,n,t){var d=e.find('[type="'+t+'"]');acf.getField(e),acf.getField(n);n.find('[type="'+t+'"]').each(function(e,n){(0,f.default)(n).val((0,f.default)(d[e]).val())})}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(t,d,e){(function(e){"use strict";n("undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null);var f=n(t("./default.js"));function n(e){return e&&e.__esModule?e:{default:e}}d.exports=function(e,n){var t=e.find(".acf-file-uploader"),d=n.find(".acf-file-uploader");(0,f.default)(e,n,"hidden"),t.hasClass("has-value")&&(d.find("div").first().html(t.find("div").first().html()),n.find(".acf-file-uploader").addClass("has-value"))}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./default.js":7}],9:[function(e,t,n){(function(e){"use strict";var n,i=(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule?n:{default:n};t.exports=function(e,n){var t=e.find(".acf-gallery-attachments"),d=n.find(".acf-gallery-attachments"),f=n.find('input[type="hidden"]').attr("name")+"[]";t.children().each(function(e,n){var t=(0,i.default)(n).clone();t.find('[type="hidden"]').attr("name",f),d.append(t)})}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,n){(function(e){"use strict";var n;(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule;t.exports=function(e,n){var t=acf.getField(e);acf.getField(n).setValue(t.getValue())}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],11:[function(d,f,e){(function(e){"use strict";n("undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null);var t=n(d("./default.js"));function n(e){return e&&e.__esModule?e:{default:e}}f.exports=function(e,n){(0,t.default)(e,n,"hidden"),n.find("img").attr("src",e.find("img").attr("src")),e.find(".acf-image-uploader").hasClass("has-value")&&n.find(".acf-image-uploader").addClass("has-value")}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./default.js":7}],12:[function(e,t,n){(function(e){"use strict";var n;(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule;t.exports=function(e,n){var t=e.find(".link-node"),d=n.find(".link-node");d.html(t.html()),d.attr("href",t.attr("href")),d.attr("target",t.attr("target")),d.trigger("change")}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],13:[function(t,f,e){(function(e){"use strict";n("undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null),n(t("./default.js"));var d=n(t("./text-and-hidden.js"));function n(e){return e&&e.__esModule?e:{default:e}}f.exports=function(e,n){var t=e.find('[type="hidden"]').val();(0,d.default)(e,n),!1===t&&(t=""),acf.getField(n).search(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./default.js":7,"./text-and-hidden.js":19}],14:[function(f,i,e){(function(e){"use strict";n("undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null);var t=n(f("./button-group.js")),d=n(f("./default.js"));function n(e){return e&&e.__esModule?e:{default:e}}i.exports=function(e,n){(0,t.default)(e,n),(0,d.default)(e,n,"text")}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./button-group.js":4,"./default.js":7}],15:[function(d,f,e){(function(e){"use strict";n("undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null);var t=n(d("./default.js"));function n(e){return e&&e.__esModule?e:{default:e}}f.exports=function(e,n){(0,t.default)(e,n,"range"),(0,t.default)(e,n,"number")}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./default.js":7}],16:[function(e,t,n){(function(e){"use strict";var n,i=(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule?n:{default:n};t.exports=function(e,n){var d=n.find(".values > .list"),t=n.find(".acf-relationship").children('input[type="hidden"]'),f=t.attr("name")+"[]";e.find(".values > .list").children().each(function(e,n){var t=(0,i.default)(n).clone();t.find('[type="hidden"]').attr("name",f),d.append(t)}),t.trigger("change")}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],17:[function(e,t,n){(function(e){"use strict";var n,a=(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule?n:{default:n};t.exports=function(e,n,t){t=t||" > .acf-input > select";var d,f=e.find(t),i=n.find(t);+f.data("ui")&&(i.html(""),f.find("option").each(function(e,n){i.append((0,a.default)(n).clone())})),d=i.find("option"),f.find("option").each(function(e,n){(0,a.default)(d[e]).prop("selected",(0,a.default)(n).prop("selected"))})}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],18:[function(i,a,e){(function(e){"use strict";n("undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null);var t=n(i("./radio.js")),d=n(i("./checkbox.js")),f=n(i("./select.js"));function n(e){return e&&e.__esModule?e:{default:e}}a.exports=function(e,n){(0,t.default)(e,n),(0,d.default)(e,n),(0,f.default)(e,n,"> .acf-input > .acf-taxonomy-field > select")}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./checkbox.js":5,"./radio.js":14,"./select.js":17}],19:[function(d,f,e){(function(e){"use strict";n("undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null);var t=n(d("./default.js"));function n(e){return e&&e.__esModule?e:{default:e}}f.exports=function(e,n){(0,t.default)(e,n,"text"),(0,t.default)(e,n,"hidden")}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./default.js":7}],20:[function(e,t,n){(function(e){"use strict";var n;(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule;t.exports=function(e,n){n.find("textarea").val(e.find("textarea").val())}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],21:[function(e,t,n){(function(e){"use strict";var n;(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule;t.exports=function(e,n){n.find('[type="checkbox"]').prop("checked",e.find('[type="checkbox"]').prop("checked")),n.find('[type="checkbox"]').trigger("change")}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],22:[function(d,f,e){(function(e){"use strict";n("undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null);var t=n(d("./select.js"));function n(e){return e&&e.__esModule?e:{default:e}}f.exports=function(e,n){(0,t.default)(e,n)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./select.js":17}],23:[function(e,t,n){(function(e){"use strict";var n;(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule;t.exports=function(e,n){var t,d=acf.getField(e),f=acf.getField(n),i=d.$input().attr("id"),a=f.$input().attr("id"),o=tinymce.get(i),l=tinymce.get(a);l&&o?(t=o.getContent(),l.setContent(t),n.find("textarea").val(e.find("textarea").val()),l.save()):(t=d.getValue(),f.$input().html(t))}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],24:[function(a,e,n){(function(e){"use strict";var n,f=(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule?n:{default:n},t=a("acf-extend.js"),i=a("acf-values.js");var d=acf_duplicate_repeater.options;(0,t.extendACF)("FlexibleContentField",{events:{'click [data-name="duplicate-layout"]':"_duplicate"},render:function(){var e=this.parent.render.apply(this,arguments);return this.$layouts().each(function(e,n){(0,f.default)(n).find('[data-name="duplicate-layout"]').length||(0,f.default)(n).find(".acf-fc-layout-controls").prepend(d.duplicate_flexible_btn)}),e},_duplicate:function(e){var n,t=(0,f.default)(e.target).closest(".layout"),d=(t.closest(".acf-field"),this.add({layout:t.data("layout"),before:t}));d&&(d.addClass("_duplicated"),(0,i.copyValues)(t,d,"> .acf-table > tbody > .acf-row > .acf-field, > .acf-fields > .acf-field"),setTimeout(function(){d.removeClass("_duplicated")},125),(n=f.default.Event("acf_duplicated_layout")).destination=d,t.trigger(n))}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"acf-extend.js":2,"acf-values.js":3}],25:[function(a,e,n){(function(e){"use strict";var n,f=(n="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&n.__esModule?n:{default:n},t=a("acf-extend.js"),i=a("acf-values.js");var d=acf_duplicate_repeater.options;(0,t.extendACF)("RepeaterField",{events:{'click a[data-event="duplicate-row"]':"_duplicate"},render:function(){var e=this.parent.render.apply(this,arguments);return this.$rows().each(function(e,n){(0,f.default)(n).find('[data-event="duplicate-row"]').length||(0,f.default)(n).find("> td.remove").append(d.duplicate_repeater_btn)}),e},_duplicate:function(e){var n,t,d;(0,f.default)(e.target).hasClass("acf-icon")&&(n=(0,f.default)(e.target).closest(".acf-row"),(t=this.add({before:n}))&&(t.addClass("_duplicated"),(0,i.copyValues)(n,t),setTimeout(function(){t.removeClass("_duplicated")},125),(d=f.default.Event("acf_duplicated_row")).destination=t,n.trigger(d)))}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"acf-extend.js":2,"acf-values.js":3}]},{},[1]);