!function($){function ButtonGroup(a){this.$item=$(a),this.$button_group=this.$item.find(".btn-group"),this.$item.hasClass("btn-checkbox")?this.kind="checkbox":this.$item.hasClass("btn-check")?this.kind="check":this.kind="radio",this.$buttons=this.$button_group.find(".btn"),this.$inputs=this.$item.find("input[id]");var b=this;this.$buttons.off("click").each(function(){var a=$(this),c=b.$inputs.filter("#"+a.attr("data-for")),d=!!c.prop("checked");a.toggleClass("btn-checked",d),webshim.ready("dom-extend",function(){webshim.addShadowDom(c,b.$button_group)}),a.attr("style","-ms-touch-action: manipulation; touch-action: manipulation;"),a.click(function(){return b.button_click(b,a,c)})})}function Survey(){this.$form=$("form"),this.$progressbar=$(".progress .progress-bar"),this.already_answered=this.$progressbar.data("already-answered"),this.items_left=this.$progressbar.data("items-left"),this.items_on_page=this.$progressbar.data("items-on-page"),$(".default_formr_button")[0]||this.items_on_page--,this.hidden_but_rendered=this.$progressbar.data("hidden-but-rendered"),this.percentage_minimum=this.$progressbar.data("percentage-minimum"),this.percentage_maximum=this.$progressbar.data("percentage-maximum"),this.form_inputs={},this.last_update=!1,this.next_update=!1,this.dont_update=!1,$("button.submit_automatically_after_timeout").each(function(a,b){$('<div class="submit_fuse_box"><div class="submit_fuse"></div></div>').appendTo(b),$(window).on("load",function(){var a=$(b).data("timeout");$(".white_cover").remove(),window.setTimeout(function(){$(b).click()},a),$(".submit_fuse").animate({width:0},a)})}),webshim.ready("DOM geolocation",function(){"use strict";$(".geolocator").click(function(){var a=$(this).closest(".controls").find("input[type=hidden]"),b=$(this).closest(".controls").find("input[type=text]");return b.attr("placeholder","You can also enter your location manually"),b.prop("readonly",!1),navigator.geolocation.getCurrentPosition(function(c){a.val(flatStringifyGeo(c)),b.val("lat:"+c.coords.latitude+"/long:"+c.coords.longitude),b.prop("readonly",!0)},function(a){}),!1}).each(function(){$(this).closest(".input-group-btn.hidden").removeClass("hidden")})}),webshim.ready("DOM forms forms-ext dom-extend",function(){var a=$("div.btn-radio, div.btn-checkbox, div.btn-check");a.each(function(a,b){new ButtonGroup(b)}),$(".item-number.counter input[type=number]").each(function(){var a=$(this);a.parents("span").hide();var b=$('<div class="btn-group"><button class="btn btn-lg btn-down"><i class="fa fa-minus-circle"></i></button><button class="btn btn-lg btn-up"><i class="fa fa-plus-circle"></i></button></div>');b.insertAfter(a.parents("span")),b.find(".btn-down").click(function(){var b=1;return a.attr("value")&&(b=+a.attr("value")),a.attr("min")<b&&(a.attr("value",b-1),a.change()),!1}),b.find(".btn-up").click(function(){var b=1;return a.attr("value")&&(b=+a.attr("value")),a.attr("max")>b&&(a.attr("value",b+1),a.change()),!1}),webshim.ready("dom-extend",function(){webshim.addShadowDom(a,b)})}),$("select.select2zone, .form-group.select2 select").each(function(a,b){"use strict";var c=$(b);c.select2(),webshim.ready("dom-extend",function(){webshim.addShadowDom(c,c.select2("container"))})}),$(".select2pills select").each(function(a,b){"use strict";var c=$(b);c.select2({width:"width:300px",dropdownCssClass:"bigdrop",maximumSelectionSize:c.data("select2maximumSelectionSize"),maximumInputLength:c.data("select2maximumInputLength"),formatResult:function(a){if(""!==a.id){var b="<strong>"+a.text+"</strong><br><img width='200px' alt='"+a.text+"' src='assets/img/pills/"+a.id+".jpg'/>";return b}return""},formatSelection:function(a){return a.text},escapeMarkup:function(a){return a}}).on("change select2-open",function(a){document.activeElement.blur()}),webshim.ready("dom-extend",function(){webshim.addShadowDom(c,c.select2("container"))})}),$(".clickable_map").each(function(a,b){"use strict";var c=$(b);c.find("label").attr("for",null);var d=c.find("label img"),e=$("<div class='map_link_container'><a class='topleft'></a><a class='topright'></a><a class='bottomleft'></a><a class='bottomright'></a></div>");e.appendTo(c.find("label")),d.appendTo(e),c.find("label div a").click(function(a){return c.find(".selected").removeClass("selected"),c.find("input[type=text]").val($(this).attr("class")).change(),$(this).addClass("selected"),!1})}),$(".people_list textarea").each(function(a,b){"use strict";var c=$(b);c.select2({width:"element",height:"2000px",data:[],formatNoMatches:function(a){return""!==a?"Füge '"+a+"' hinzu!":"Weitere Personen hinzufügen."},tokenSeparators:["\n"],separator:"\n",createSearchChoice:function(a,b){return 0===$(b).filter(function(){return 0===this.text.localeCompare(a)}).length?(a=a.replace("\n","; "),{id:a,text:a}):void 0},initSelection:function(a,b){for(var c=a.val().split("\n"),d=[],e=0;e<c.length;e++)d.push({id:c[e],text:c[e]});b(d)},maximumSelectionSize:15,maximumInputLength:50,formatResultCssClass:function(a){return"people_list_results"},multiple:!0,allowClear:!0,escapeMarkup:function(a){return a}}).removeClass("form-control");var d=$("<span class='select2-plus'>+</span>");d.insertBefore(c.select2("container").find(".select2-search-field input")),webshim.ready("dom-extend",function(){webshim.addShadowDom(c,c.select2("container"))})}),$("input.select2add").each(function(a,b){var c=$(b);if(!c.select2("container").hasClass("select2-container")){var d=c.attr("data-select2add");"object"!=typeof d&&(d=$.parseJSON(d));for(var e,f=[],g=0;g<d.length;g++){e=d[g].id.split(",");for(var h=0;h<e.length;h++)e[h].trim().length>0&&f.push({id:e[h],text:e[h]})}var i=$(b).parents(".form-group").hasClass("network_select")||$(b).parents(".form-group").hasClass("ratgeber_class")||$(b).parents(".form-group").hasClass("cant_add_choice");c.select2({createSearchChoice:function(a,b){return i?null:0===$(b).filter(function(){return 0===this.text.localeCompare(a)}).length?(a=a.replace(",",";"),{id:a,text:a}):void 0},initSelection:function(a,b){var d;if(c.data("select2multiple")){var e=a.val().split(",");d=new Array(e.length);for(var g=0;g<e.length;g++)d[g]={id:e[g],text:e[g]}}else d={id:a.val(),text:a.val()};$.each(f,function(b,c){return c.id===a.val()?(d=c,!1):void 0}),b(d)},maximumSelectionSize:c.data("select2maximumSelectionSize"),maximumInputLength:c.data("select2maximumInputLength"),data:f,multiple:!!c.data("select2multiple"),allowClear:!0,escapeMarkup:function(a){return a}}),webshim.ready("forms forms-ext dom-extend form-validators",function(){webshim.addShadowDom(c,c.select2("container"))})}})}),webshim.ready("forms forms-ext dom-extend form-validators",function(){webshim.addCustomValidityRule("always_invalid",function(a,b){return $(a).hasClass("always_invalid")?!0:void 0},"Cannot submit while there are problems with openCPU."),webshim.refreshCustomValidityRules()});var a=mysql_datetime(),b=window.performance.now?performance.now():null;$(".form-group:not([data-showif])").each(function(c,d){$(d).find("input.item_shown").val(a),$(d).find("input.item_shown_relative").val(b)}),$(".form-group").each(function(a,b){$(b).change(function(){$(this).addClass("formr_answered"),$(this).find("input.item_answered").val(mysql_datetime()),$(this).find("input.item_answered_relative").val(window.performance.now?performance.now():null)})}),$(".form-group.item-submit").each(function(a,b){$(b).find("button").click(function(){$(b).find("input.item_answered").val(mysql_datetime()),$(b).find("input.item_answered_relative").val(window.performance.now?performance.now():null)})})}ButtonGroup.prototype.button_click=function(a,b,c){var d=!!c.prop("checked");return"radio"===a.kind&&(a.$buttons.removeClass("btn-checked"),d=!1),b.toggleClass("btn-checked",!d),"check"===a.kind&&b.find("i").toggleClass("fa-check",!d),c.prop("checked",!d),"checkbox"===a.kind&&c.triggerHandler("click.groupRequired"),b.change(),!1},Survey.prototype.update=function(){var a=this;if(!a.dont_update){var b=(new Date).getTime();if(a.last_update&&a.last_update+500>b)return void(a.next_update||(a.next_update=window.setTimeout($.proxy(a.update,a),a.last_update+500-b)));a.last_update=b,a.next_update=!1,a.getData(),a.showIf(),a.getProgress()}},Survey.prototype.getData=function(){var a=this.$form.serializeArray();this.data={};var b=this;$.each(a,function(a,c){if(0!==c.name.indexOf("_")&&"session_id"!=c.name){if(c.name.indexOf("[]",c.name.length-2)>-1&&(c.name=c.name.substring(0,c.name.length-2)),""===c.value&&1===$("input[type=hidden][name='"+c.name+"']").length&&c.value===$("input[type=hidden][name='"+c.name+"']").attr("value"))return!0;if(b.data[c.name])b.data[c.name]+=", "+c.value;else{var d=c.value;$.isNumeric(d)&&(d=parseFloat(d)),b.data[c.name]=d}}})},Survey.prototype.getProgress=function(){var a=this;a.items_answered_on_page=$(".formr_answered").length+0,a.items_visible_on_page=$(".form-group:not(.hidden)").length+0;var b=(a.items_answered_on_page+a.already_answered)/(a.items_visible_on_page+a.items_left+a.already_answered),c=b*(a.percentage_maximum-a.percentage_minimum);return c+=a.percentage_minimum,c>a.percentage_maximum&&(c=a.percentage_maximum),a.$progressbar.css("width",Math.round(c)+"%"),a.$progressbar.text(Math.round(c)+"%"),c},Survey.prototype.showIf=function(e){var survey=this;survey.items_with_showifs||(survey.items_with_showifs=$(".form-group[data-showif]"));var any_change=!1;return survey.items_with_showifs.each(function(i,elm){var showif=$(elm).data("showif");with(survey.data){var hide=!0;try{hide=!eval(showif)}catch(e){window.console&&console.log("JS showif failed",showif,e,$(elm).find("input").attr("name"))}$(elm).hasClass("hidden")!=hide&&(any_change=!0,$(elm).toggleClass("hidden",hide),$(elm).find("input,select,textarea,button").prop("disabled",hide),$(elm).find(".select2-container").select2("enable",!hide),hide||($(elm).find("input.item_shown").val(mysql_datetime()),$(elm).find("input.item_shown_relative").val(window.performance.now?performance.now():null)))}}),any_change},Survey.prototype.doMonkey=function(a){var b=this;if(a>2)return!1;void 0===a?a=0:a++,b.dont_update=!0;var c=$("form.main_formr_survey .form-row:not(.hidden):not(.formr_answered):not(.item-submit)"),d=new Date,e=d.toISOString().split("T")[0],f={text:"thank the formr monkey",textarea:"thank the formr monkey\nmany times",year:d.getFullYear(),email:"formr_monkey@example.org",url:"http://formrmonkey.example.org/",date:"07-08-2015",month:"07-08-2015",yearmonth:"07-08-2015",week:"07-08-2015",datetime:e,"datetime-local":d.toISOString(),day:d.getDay(),time:"11:22",color:"#ff0000",number:20,tel:"1234567890",cc:"4999-2939-2939-3",range:1};c.each(function(a,b){b=$(b);var c=null,d=null,e=null,g=null,h="text",i=null,j=null,k=null,l=null,m=null,n=null,o=null;for(select2Elements=b.find(".select2-container:visible"),r=0,s=select2Elements.length;s>r;r++)return select2Element=$(select2Elements[r]),void(select2Element.data("select2").opts.data?select2Element.select2("data",select2Element.data("select2").opts.data[0]):select2Element.data("select2").select&&select2Element.select2("val",select2Element.data("select2").select[0].options[1].value));for(buttonElements=b.find("button.btn:visible"),r=0,s=buttonElements.length;s>r;r++)return buttonElement=buttonElements[r],void(buttonElement.disabled||buttonElement.click());for(l=b.find("select:visible"),r=0,s=l.length;s>r;r++){if(k=l[r],!k.disabled&&!k.value.trim()){j=k.options;for(var p=0,q=j.length;q>p;p++)if(i=j.item(p),i&&i.text.trim()&&i.value.trim()){k.selectedIndex=p;break}}return}g=b.find("input:not(.ws-inputreplace):not(input[type=hidden])");for(var r=0,s=g.length;s>r;r++)c=g[r],e=c.getAttribute("name"),c.disabled||(h=c.getAttribute("type").toLowerCase(),f[h]?(d=c.getAttribute("maxlength"),f[h]&&$(c).val(f[h]),c.max&&$(c).val(c.max+""),c.min&&$(c).val(c.min+""),d&&c.value>d&&$(c).val(c.value.substr(0,d))):"checkbox"!=h&&"radio"!=h||$(c).prop("checked",!0));for(n=b.find("textarea:visible"),r=0,s=n.length;s>r;r++)m=n[r],m.disabled||m.value.trim()||(o=m.getAttribute("maxlength"),$(m).val(f.textarea),o&&m.value>o&&(m.value=m.value.substr(0,o)))}),c.each(function(a,b){$(b).trigger("change")}),b.dont_update=!1,b.update(),b.doMonkey(a)},$(function(){var a=new Survey;a.update(),$("form.main_formr_survey").on("change",function(){a.update()}),$(".form-row.hidden").length>0&&($(".show_hidden_items").click(function(){return $(".form-row.hidden").removeClass("hidden"),!1}),$(".show_hidden_items").attr("disabled",!1)),$("button.monkey").length>0&&($("button.monkey").click(function(){return a.doMonkey(0),!1}),$("button.monkey").attr("disabled",!1))})}(jQuery);