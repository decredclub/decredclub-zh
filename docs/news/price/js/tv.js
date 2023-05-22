"use strict";!function(){if(window.TradingView&&window.TradingView.host&&!window.TradingView.reoloadTvjs)return;var t={"color-gull-gray":"#9db2bd","color-brand":"#2962FF","color-brand-hover":"#1E53E5","color-brand-active":"#1848CC"};const e=new RegExp("^http(s)?:(//)?");var o,i,n,r,a,s,d,l="-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif",h={host:null==window.location.host.match(/tradingview\.com|pyrrosinvestment\.com/i)?"https://s.tradingview.com":"https://www.tradingview.com",ideasHost:"https://www.tradingview.com",chatHost:"https://www.tradingview.com",widgetHost:"https://www.tradingview-widget.com",getHost:function(t){return t.useWidgetHost?h.widgetHost:h.host},embedStylesForCopyright:function(){var e=document.createElement("style");return e.innerHTML=".tradingview-widget-copyright {font-size: 13px !important; line-height: 32px !important; text-align: center !important; vertical-align: middle !important; font-family: "+l+" !important; color: "+t["color-gull-gray"]+" !important;} .tradingview-widget-copyright .blue-text {color: "+t["color-brand"]+" !important;} .tradingview-widget-copyright a {text-decoration: none !important; color: "+t["color-gull-gray"]+" !important;} .tradingview-widget-copyright a:visited {color: "+t["color-gull-gray"]+" !important;} .tradingview-widget-copyright a:hover .blue-text {color: "+t["color-brand-hover"]+" !important;} .tradingview-widget-copyright a:active .blue-text {color: "+t["color-brand-active"]+" !important;} .tradingview-widget-copyright a:visited .blue-text {color: "+t["color-brand"]+" !important;}",e},embedStylesForFullHeight:function(t,e,o){var i=e?"calc("+t+" - 32px)":t,n=document.querySelector("#"+o);n.parentElement.style.height=i,n.style.height="100%"},gId:function(){return"tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1)},isPersentHeight:function(t){return"%"===t},getSuffix:function(t){var e=t.toString().match(/(%|px|em|ex)/);return e?e[0]:"px"},hasCopyright:function(t){var e=document.getElementById(t),o=e&&e.parentElement;return!!o&&!!o.querySelector(".tradingview-widget-copyright")},calculateWidgetHeight:function(t,e){var o=parseInt(t),i=this.getSuffix(t),n=this.isPersentHeight(i),r=e&&this.hasCopyright(e);return n&&e&&(this.embedStylesForFullHeight(o+i,r,e),r)?100+i:r?"calc("+o+i+" - 32px)":o+i},onready:function(t){window.addEventListener?window.addEventListener("DOMContentLoaded",t,!1):window.attachEvent("onload",t)},css:function(t){var e,o=document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=t:(e=document.createTextNode(t),i.appendChild(e)),o.appendChild(i)},bindEvent:function(t,e,o){t.addEventListener?t.addEventListener(e,o,!1):t.attachEvent&&t.attachEvent("on"+e,o)},unbindEvent:function(t,e,o){t.removeEventListener?t.removeEventListener(e,o,!1):t.detachEvent&&t.detachEvent("on"+e,o)},cloneSimpleObject:function(t){if(null==t||"object"!=typeof t)return t;var e=t.constructor();for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e},isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},isMobileDevice:(o={Android:/Android/i.test(navigator.userAgent),BlackBerry:/BlackBerry/i.test(navigator.userAgent),iOS:/iPhone|iPad|iPod/i.test(navigator.userAgent),Opera:/Opera Mini/i.test(navigator.userAgent)},o.any=o.Android||o.BlackBerry||o.iOS||o.Opera,o),generateUtmForUrlParams:function(t){var e={utm_source:window.location.hostname,utm_medium:h.hasCopyright(t.container)?"widget_new":"widget"};return t.type&&(e.utm_campaign=t.type,"chart"===t.type&&(e.utm_term=t.symbol)),e},getPageUriString:function(){const t=location.href,o=this.invalidUrl(t);return o||t.replace(e,"")},invalidUrl:function(t){try{const o=new URL(t);return e.test(o.protocol)?null:"__NHTTP__"}catch(t){return"__FAIL__"}},WidgetAbstract:function(){},MiniWidget:function(t){this.id=h.gId(),this.options={whitelabel:t.whitelabel||"",width:h.WidgetAbstract.prototype.fixSize(t.width)||300,height:h.WidgetAbstract.prototype.fixSize(t.height)||400,symbols:t.symbols,tabs:t.tabs||"",symbols_description:t.symbols_description||"",customer:t.customer||"",container:t.container_id||"",greyText:t.greyText||"",large_chart_url:t.large_chart_url||"",large_chart_target:t.large_chart_target||"",gridLineColor:t.gridLineColor||"",fontColor:t.fontColor||"",widgetFontColor:t.widgetFontColor||"",underLineColor:t.underLineColor||"",underLineBottomColor:t.underLineBottomColor||"",trendLineColor:t.trendLineColor||"",timeAxisBackgroundColor:t.timeAxisBackgroundColor||"",activeTickerBackgroundColor:t.activeTickerBackgroundColor||"",noGraph:t.noGraph||!1,locale:t.locale,styleTickerActiveBg:t.styleTickerActiveBg||"",styleTabActiveBorderColor:t.styleTabActiveBorderColor||"",styleTickerBodyFontSize:t.styleTickerBodyFontSize||"",styleTickerBodyFontWeight:t.styleTickerBodyFontWeight||"",styleTickerHeadFontSize:t.styleTickerHeadFontSize||"",styleTickerHeadFontWeight:t.styleTickerHeadFontWeight||"",styleTickerChangeDownColor:t.styleTickerChangeDownColor||"",styleTickerChangeUpColor:t.styleTickerChangeUpColor||"",styleTickerLastDownBg:t.styleTickerLastDownBg||"",styleTickerLastUpBg:t.styleTickerLastUpBg||"",styleTickerSymbolColor:t.styleTickerSymbolColor||"",styleTickerSymbolHoverTextDecoration:t.styleTickerSymbolHoverTextDecoration||"",styleTickerActiveSymbolTextDecoration:t.styleTickerActiveSymbolTextDecoration||"",styleTabsActiveBorderColor:t.styleTabsActiveBorderColor||"",styleTabsNoBorder:t.styleTabsNoBorder||"",styleWidgetNoBorder:t.styleWidgetNoBorder||"",useWidgetHost:Boolean(t.useWidgetHost)},this.createWidget()},MediumWidget:function(t){this.id=h.gId();const e=h.calculateWidgetHeight(t.height||400,t.container_id);let o;switch(t.chartType){case"candlesticks":{const{chartType:e,upColor:i,downColor:n,borderUpColor:r,borderDownColor:a,wickUpColor:s,wickDownColor:d}=t;o={chartType:e,upColor:i,downColor:n,borderUpColor:r,borderDownColor:a,wickUpColor:s,wickDownColor:d};break}case"bars":{const{chartType:e,upColor:i,downColor:n}=t;o={chartType:e,upColor:i,downColor:n};break}case"line":{const{chartType:e,color:i,colorGrowing:n,colorFalling:r,lineWidth:a}=t;o={chartType:e,color:i,colorGrowing:n,colorFalling:r,lineWidth:a};break}case"area":default:{const{chartType:e="area",lineColor:i=t.trendLineColor||"",lineColorGrowing:n,lineColorFalling:r,topColor:a=t.underLineColor||"",bottomColor:s=t.underLineBottomColor||"",lineWidth:d}=t;o={chartType:e,lineColor:i,lineColorGrowing:n,lineColorFalling:r,topColor:a,bottomColor:s,lineWidth:d};break}}this.options={container:t.container_id||"",width:h.WidgetAbstract.prototype.fixSize(t.width)||"",height:h.WidgetAbstract.prototype.fixSize(e)||"",symbols:t.symbols,greyText:t.greyText||"",symbols_description:t.symbols_description||"",large_chart_url:t.large_chart_url||"",customer:t.customer||"",backgroundColor:t.backgroundColor||"",gridLineColor:t.gridLineColor||"",fontColor:t.fontColor||"",fontSize:t.fontSize||"",widgetFontColor:t.widgetFontColor||"",timeAxisBackgroundColor:t.timeAxisBackgroundColor||"",chartOnly:!!t.chartOnly,locale:t.locale,whitelabel:!!t.whitelabel||"",colorTheme:t.colorTheme,isTransparent:t.isTransparent,useWidgetHost:Boolean(t.useWidgetHost),showFloatingTooltip:t.showFloatingTooltip,valuesTracking:t.valuesTracking,changeMode:t.changeMode,dateFormat:t.dateFormat,timeHoursFormat:t.timeHoursFormat,showVolume:t.showVolume,showMA:t.showMA,volumeUpColor:t.volumeUpColor,volumeDownColor:t.volumeDownColor,maLineColor:t.maLineColor,maLineWidth:t.maLineWidth,maLength:t.maLength,hideDateRanges:t.hideDateRanges,hideMarketStatus:t.hideMarketStatus,hideSymbolLogo:t.hideSymbolLogo,scalePosition:t.scalePosition,scaleMode:t.scaleMode,fontFamily:t.fontFamily,noTimeScale:t.noTimeScale,...o},this.createWidget()},widget:function(t){this.id=t.id||h.gId();var e=h.getUrlParams(),o=t.tvwidgetsymbol||e.tvwidgetsymbol||e.symbol||t.symbol||"NASDAQ:AAPL",i=t.logo||"";i.src&&(i=i.src),i&&i.replace(".png","");var n=h.calculateWidgetHeight(t.height||500,t.container_id);this.options={whitelabel:t.whitelabel||"",width:t.width||800,height:n,symbol:o,interval:t.interval||"1",range:t.range||"",timezone:t.timezone||"",autosize:t.autosize,hide_top_toolbar:t.hide_top_toolbar,hide_side_toolbar:t.hide_side_toolbar,hide_legend:t.hide_legend,allow_symbol_change:t.allow_symbol_change,save_image:void 0===t.save_image||t.save_image,container:t.container_id||"",toolbar_bg:t.toolbar_bg||"f4f7f9",watchlist:t.watchlist||[],editablewatchlist:!!t.editablewatchlist,studies:t.studies||[],theme:t.theme||"",style:t.style||"",extended_hours:void 0===t.extended_hours?void 0:+t.extended_hours,details:!!t.details,calendar:!!t.calendar,hotlist:!!t.hotlist,hideideas:!!t.hideideas,hideideasbutton:!!t.hideideasbutton,widgetbar_width:+t.widgetbar_width||void 0,withdateranges:t.withdateranges||"",customer:t.customer||i||"",venue:t.venue,symbology:t.symbology,logo:i,show_popup_button:!!t.show_popup_button,popup_height:t.popup_height||"",popup_width:t.popup_width||"",studies_overrides:t.studies_overrides,overrides:t.overrides,enabled_features:t.enabled_features,disabled_features:t.disabled_features,publish_source:t.publish_source||"",enable_publishing:t.enable_publishing,whotrades:t.whotrades||void 0,locale:t.locale,referral_id:t.referral_id,no_referral_id:t.no_referral_id,fundamental:t.fundamental,percentage:t.percentage,hidevolume:t.hidevolume,padding:t.padding,greyText:t.greyText||"",horztouchdrag:t.horztouchdrag,verttouchdrag:t.verttouchdrag,useWidgetHost:Boolean(t.useWidgetHost)},t.cme&&(this.options.customer="cme"),isFinite(t.widgetbar_width)&&t.widgetbar_width>0&&(this.options.widgetbar_width=t.widgetbar_width),this._ready_handlers=[],this.create()},chart:function(t){this.id=h.gId(),this.options={width:t.width||640,height:t.height||500,container:t.container_id||"",realtime:t.realtime,chart:t.chart,locale:t.locale,type:"chart",autosize:t.autosize,mobileStatic:t.mobileStatic},this._ready_handlers=[],this.create()},stream:function(t){this.id=h.gId(),this.options={width:t.width||640,height:t.height||500,container:t.container_id||"",stream:t.stream,locale:t.locale,autosize:t.autosize},this.create()},EventsWidget:function(t){this.id=h.gId(),this.options={container:t.container_id||"",width:t.width||486,height:t.height||670,currency:t.currencyFilter||"",importance:t.importanceFilter||"",type:"economic-calendar"},this.createWidget(t)},IdeasStreamWidget:function(t){this.id=h.gId(),this.options={container:t.container_id||"",width:t.width||486,height:t.height||670,symbol:t.symbol||"",username:t.username||"",mode:t.mode||"",publishSource:t.publishSource||"",sort:t.sort||"trending",stream:t.stream,waitSymbol:t.waitSymbol,hideDescription:t.hideDescription,startingCount:t.startingCount,bgColor:t.bgColor||"",headerColor:t.headerColor||"",borderColor:t.borderColor||"",locale:t.locale,type:"ideas-stream",useWidgetHost:Boolean(t.useWidgetHost)},this._ready_handlers=[],this.createWidget()},IdeaWidget:function(t){this.id=h.gId(),this.options={container:t.container_id||"",width:t.width||486,height:t.height||670,idea:t.idea||"",chartUrl:t.chartUrl||"",whotrades:t.whotrades||void 0,locale:t.locale,type:"idea"},this.createWidget(t)},ChatWidgetEmbed:function(t){this.id=h.gId(),this.options={container:t.container_id||"",width:t.width||400,height:t.height||500,room:t.room||"",whotrades:t.whotrades||void 0,locale:t.locale,type:"chat-embed"},this.createWidget(t)}};h.WidgetAbstract.prototype={fixSize:function(t){return/^[0-9]+(\.|,[0-9])*$/.test(t)?t+"px":t},width:function(){return this.options.autosize?"100%":h.WidgetAbstract.prototype.fixSize(this.options.width)},height:function(){return this.options.autosize?"100%":h.WidgetAbstract.prototype.fixSize(this.options.height)},addWrapperFrame:function(t,e,o){var i=h.WidgetAbstract.prototype.height.call(this),n=h.WidgetAbstract.prototype.width.call(this);o=o||"transparent";return'<div id="'+this.id+'-wrapper" style="position: relative;box-sizing: content-box;width: '+n+";height: "+i+";margin: 0 auto !important;padding: 0 !important;font-family: "+l+';"><div style="width: '+n+";height: "+i+";background: "+o+';padding: 0 !important;">'+t+"</div>"+(e||"")+"</div>"},addFooterLogo:function(t,e){e=e||{};var o=new URL("https://www.tradingview.com/");return h.addUrlParams(o,h.generateUtmForUrlParams(this.options)),h.WidgetAbstract.prototype.addWrapperFrame.call(this,t,`<div style="\n\t\t\t\t\tposition:absolute;\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tbox-sizing: content-box;\n\t\t\t\t\theight: 24px;\n\t\t\t\t\twidth: ${h.WidgetAbstract.prototype.width.call(this)};\n\t\t\t\t\tbottom: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tfont-family: ${l};\n\t\t\t\t">\n\t\t\t\t\t<div\n\t\t\t\t\t\tstyle="\n\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t\tmargin: 0 1px 1px 1px;\n\t\t\t\t\t\t\tline-height: 7px;\n\t\t\t\t\t\t\tbox-sizing: content-box;\n\t\t\t\t\t\t\theight: 11px;\n\t\t\t\t\t\t\tpadding: 6px 10px;\n\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t\tbackground: #fff;\n\t\t\t\t\t\t"\n\t\t\t\t\t>\n\t\t\t\t\t\t<a\n\t\t\t\t\t\t\thref="${o.toString()}"\n\t\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t\t\tstyle="color: #0099d4; text-decoration: none; font-size: 11px;"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<span style="color: #b4b4b4; font-size: 11px;">${e.greyText||"powered by"}</span>\n\t\t\t\t\t\t\t${e.linkText||"tradingview.com"}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>`,"#fff")}},h.ChatWidgetEmbed.prototype={createWidget:function(){var t=this.widgetCode();t=h.WidgetAbstract.prototype.addFooterLogo.call(this,t),c(t,this.options)},widgetCode:function(){var t=new URL(h.chatHost);return t.pathname="/chatwidgetembed/",h.addUrlParams(t,{whotrades:this.options.whotrades,locale:this.options.locale}),h.addUrlParams(t,h.generateUtmForUrlParams(this.options)),this.options.room&&(t.hash=this.options.room),`\n\t\t\t\t<iframe\n\t\t\t\t\tsrc="${t.toString()}"\n\t\t\t\t\t${this.options.width?`width="${this.options.width}"`:""}\n\t\t\t\t\t${this.options.height?`height="${this.options.height}"`:""}\n\t\t\t\t\tframeborder="0" allowTransparency="true" scrolling="no"\n\t\t\t\t>\n\t\t\t\t</iframe>\n\t\t\t`}},h.IdeaWidget.prototype={createWidget:function(){var t=this.widgetCode();c(t,this.options);var e=this,o=document.getElementById(this.id);this.postMessage=h.postMessageWrapper(o.contentWindow,this.id),this.postMessage.on("resize",(function(t){t.id===e.id&&(o.style.height=t.height+"px")}),!0)},widgetCode:function(){var t=new URL(h.ideasHost);return t.pathname="/idea-popup/",h.addUrlParams(t,{id:this.id,width:this.options.width,height:this.options.height,idea:this.options.idea,chart_url:this.options.chartUrl,whotrades:this.options.whotrades,locale:this.options.locale}),this.options.type="idea",h.addUrlParams(t,h.generateUtmForUrlParams(this.options)),`\n\t\t\t\t<iframe id="${this.id}"\n\t\t\t\t\tsrc="${t.toString()}"\n\t\t\t\t\twidth="${this.options.width}"\n\t\t\t\t\t${this.options.height?`height="${this.options.height}"`:""}\n\t\t\t\t\tframeborder="0" allowTransparency="true" scrolling="no"\n\t\t\t\t>\n\t\t\t\t</iframe>\n\t\t\t`},getSymbol:function(t){this.postMessage.on("symbolInfo",t)}},h.EventsWidget.prototype={createWidget:function(){var t=this.widgetCode();c(t,this.options)},widgetCode:function(){var t=new URL(h.getHost(this.options));return t.pathname="/eventswidgetembed/",h.addUrlParams(t,{currency:this.options.currency,importance:this.options.importance}),this.options.type="events",h.addUrlParams(t,h.generateUtmForUrlParams(this.options)),`\n\t\t\t\t<iframe src="${t.toString()}"\n\t\t\t\t\twidth="${this.options.width}"\n\t\t\t\t\t${this.options.height?`height="${this.options.height}"`:""}\n\t\t\t\t\tframeborder="0" scrolling="no">\n\t\t\t\t</iframe>\n\t\t\t`}},h.IdeasStreamWidget.prototype={createWidget:function(){var t=this.widgetCode();c(t,this.options);var e=this,o=document.getElementById(this.id);this.postMessage=h.postMessageWrapper(o.contentWindow,this.id),h.bindEvent(o,"load",(function(){e._ready=!0;for(var t=e._ready_handlers.length;t--;)e._ready_handlers[t].call(e)})),e.postMessage.on("resize",(function(t){if(t.id===e.id){var i=Math.max(t.height,450);o.style.height=i+"px"}}),!0)},widgetCode:function(){var t=this.options,e=new URL(h.getHost(t));return e.pathname="/ideaswidgetembed/",h.addUrlParams(e,{id:this.id,width:t.width,height:t.height,symbol:t.symbol,username:t.username,mode:t.mode,publish_source:t.publishSource,sort:t.sort,stream:t.stream,wait_symbol:t.waitSymbol,hide_desc:t.hideDescription,s_count:t.startingCount,bg_color:t.bgColor,h_color:t.headerColor,borderColor:t.borderColor,locale:t.locale,useWidgetHost:Boolean(t.useWidgetHost)}),h.addUrlParams(e,h.generateUtmForUrlParams(this.options)),`\n\t\t\t\t<iframe id="${this.id}"\n\t\t\t\t\tsrc="${e.toString()}"\n\t\t\t\t\twidth="${t.width}"\n\t\t\t\t\t${this.options.height?`height="${this.options.height}"`:""}\n\t\t\t\t\tframeborder="0" allowTransparency="true" scrolling="no">\n\t\t\t\t</iframe>\n\t\t\t`},setSymbol:function(t){var e=document.getElementById(this.id);this.postMessage.post(e.contentWindow,"setSymbol",t)},ready:function(t){this._ready?t.call(this):this._ready_handlers.push(t)}},h.MiniWidget.prototype={createWidget:function(){var t=this.widgetCode(),e=this.options;if(!e.noLogoOverlay&&!e.whitelabel){var o=this.options.greyText||"Quotes by";t=h.WidgetAbstract.prototype.addFooterLogo.call(this,t,{greyText:o,linkText:"TradingView"})}c(t,e)},widgetCode:function(){var t=new URL(h.getHost(this.options));t.pathname=this.options.customer?this.options.customer+"/miniwidgetembed/":"/miniwidgetembed/",h.addUrlParams(t,{width:this.options.width,height:this.options.height,noGraph:this.options.noGraph,locale:this.options.locale,whitelabel:this.options.whitelabel?"1":""},!0),this.options.type="market-overview",h.addUrlParams(t,h.generateUtmForUrlParams(this.options));for(var e=["large_chart_url","large_chart_target","backgroundColor","gridLineColor","fontColor","underLineColor","underLineBottomColor","trendLineColor","activeTickerBackgroundColor","timeAxisBackgroundColor","locale","styleTickerActiveBg","styleTabActiveBorderColor","styleTickerBodyFontSize","styleTickerBodyFontWeight","styleTickerHeadFontSize","styleTickerHeadFontWeight","styleTickerChangeDownColor","styleTickerChangeUpColor","styleTickerLastDownBg","styleTickerLastUpBg","styleTickerSymbolColor","styleTickerSymbolHoverTextDecoration","styleTickerActiveSymbolTextDecoration","styleTabsActiveBorderColor","styleTabsNoBorder","styleWidgetNoBorder"],o=e.length-1;o>=0;o--){var i=e[o],n=this.options[i];n&&t.searchParams.append(i,n)}var r={},a=function(t){for(var e=[],o=0;o<t.length;o++){var i=t[o];if(h.isArray(i)){var n=encodeURIComponent(i[0]),a=encodeURIComponent(i[1]);e.push(n),r[n]=a}else"string"==typeof i&&e.push(i)}return e.join(",")};if(this.options.tabs){o=0;for(var s=this.options.tabs.length;o<s;o++){var d=this.options.tabs[o];this.options.symbols[d]&&t.searchParams.append(d,a(this.options.symbols[d]))}t.searchParams.append("tabs",this.options.tabs.join(","))}else this.options.symbols&&t.searchParams.append("symbols",a(this.options.symbols));if(this.options.symbols_description)for(var l in this.options.symbols_description)r[l]=this.options.symbols_description[l];return h.addUrlParams(t,r,!0),`\n\t\t\t\t<iframe id="${this.id}"\n\t\t\t\t\tsrc="${t.toString()}"\n\t\t\t\t\twidth="${this.options.width}"\n\t\t\t\t\t${this.options.height?`height="${this.options.height}"`:""}\n\t\t\t\t\tframeborder="0"\n\t\t\t\t\tallowTransparency="true"\n\t\t\t\t\tscrolling="no"\n\t\t\t\t\tstyle="margin: 0 !important; padding: 0 !important;"\n\t\t\t\t>\n\t\t\t\t</iframe>\n\t\t\t`},remove:function(){var t=document.getElementById("tradingview_widget");t.parentNode.removeChild(t)}},h.MediumWidget.prototype={createWidget:function(){var t=this.widgetCode();c(t,this.options)},widgetCode:function(){const t=Object.create(null);for(const e of["symbols","width","height","colorTheme","backgroundColor","gridLineColor","fontColor","widgetFontColor","underLineColor","underLineBottomColor","trendLineColor","activeTickerBackgroundColor","timeAxisBackgroundColor","scalePosition","scaleMode","chartType","color","colorGrowing","colorFalling","lineColor","lineColorGrowing","lineColorFalling","topColor","bottomColor","upColor","downColor","borderUpColor","borderDownColor","wickUpColor","wickDownColor","fontFamily","fontSize","noTimeScale","valuesTracking","changeMode","dateFormat","timeHoursFormat","lineWidth","volumeUpColor","volumeDownColor","chartOnly","whitelabel","isTransparent","showFloatingTooltip","showVolume","showMA","maLineColor","maLineWidth","maLength","hideDateRanges","hideMarketStatus","hideSymbolLogo"])this.options[e]&&(t[e]=this.options[e]);t["page-uri"]=h.getPageUriString(),this.options.type="symbol-overview";const e=h.generateUtmForUrlParams(this.options);for(var o of Object.keys(e))t[o]=e[o];const i=new URL("/embed-widget/symbol-overview/",h.getHost(this.options));return this.options.customer&&(i.pathname+=this.options.customer+"/"),this.options.locale&&i.searchParams.append("locale",this.options.locale),i.hash=encodeURIComponent(JSON.stringify(t)),`\n\t\t\t\t<iframe id="${this.id}"\n\t\t\t\t\tsrc="${i.toString()}"\n\t\t\t\t\tstyle="\n\t\t\t\t\t\tmargin: 0 !important;\n\t\t\t\t\t\tpadding: 0 !important;\n\t\t\t\t\t\t${this.options.width?`width: ${this.options.width};`:""}\n\t\t\t\t\t\t${this.options.height?`height: ${this.options.height};`:""}\n\t\t\t\t\t"\n\t\t\t\t\tframeborder="0" allowTransparency="true" scrolling="no"\n\t\t\t\t>\n\t\t\t\t</iframe>\n\t\t\t`},remove:function(){var t=document.getElementById("tradingview_widget");t.parentNode.removeChild(t)}},h.widget.prototype={create:function(){this.options.type=this.options.fundamental?"fundamental":"chart";var t=this.render(),e=this;this.options.noLogoOverlay||(t=h.WidgetAbstract.prototype.addWrapperFrame.call(this,t)),c(t,this.options);var o=document.getElementById("tradingview-copyright");o&&o.parentElement&&o.parentElement.removeChild(o),this.iframe=document.getElementById(this.id),this.postMessage=h.postMessageWrapper(this.iframe.contentWindow,this.id),h.bindEvent(this.iframe,"load",(function(){e.postMessage.get("widgetReady",{},(function(){var t;for(e._ready=!0,t=e._ready_handlers.length;t--;)e._ready_handlers[t].call(e)}))})),e.postMessage.on("logoCreated",(function(t){if(t.left&&t.bottom&&t.width&&t.height&&t.href){e._logoOverlay&&(e._logoOverlay.parentNode.removeChild(e._logoOverlay),delete e._logoOverlay);var o=document.createElement("a");t.text&&(o.textContent=t.text,o.style.color="transparent"),o.style.position="absolute",o.style.display="inline-block",o.style.left=t.left,o.style.bottom=t.bottom,o.style.width=t.width,o.style.height=t.height,o.style.backgroundColor="transparent",o.style.pointerEvents="none",o.href=t.href,o.setAttribute("target","_blank"),e._logoOverlay=o,document.getElementById(e.id+"-wrapper").appendChild(o)}})),e.postMessage.on("setLogoOverlayVisibility",(function(t){e._logoOverlay&&t&&"boolean"==typeof t.visible&&(e._logoOverlay.style.display=t.visible?"inline-block":"none")})),e.postMessage.on("openChartInPopup",(function(t){for(var o=h.cloneSimpleObject(e.options),i=["symbol","interval"],n=i.length-1;n>=0;n--){var r=i[n],a=t[r];a&&(o[r]=a)}o.show_popup_button=!1;var s=e.options.popup_width||900,d=e.options.popup_height||600,l=(screen.width-s)/2,c=(screen.height-d)/2,g=window.open(e.generateUrl(o),"_blank","resizable=yes, top="+c+", left="+l+", width="+s+", height="+d);g&&(g.opener=null)}))},ready:function(t){this._ready?t.call(this):this._ready_handlers.push(t)},render:function(){var t=this.generateUrl();return`\n\t\t\t\t<iframe\n\t\t\t\t\tid="${this.id}"\n\t\t\t\t\tsrc="${t}"\n\t\t\t\t\tstyle="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;"\n\t\t\t\t\tframeborder="0" allowTransparency="true" scrolling="no" allowfullscreen\n\t\t\t\t>\n\t\t\t\t</iframe>\n\t\t\t`},generateUrl:function(t){var e;function o(e,o){return o=o||e,void 0===t[e]?"":"&"+encodeURIComponent(o)+"="+(t[e]?"1":"0")}function i(e,o,i){return i=i||e,t[e]?"&"+i+"="+o:""}function n(e,o,i){return i=i||{},"&"+e+"="+(t[e]?encodeURIComponent(JSON.stringify(o)):encodeURIComponent(JSON.stringify(i)))}e="cme"===(t=t||this.options).customer?"/cmewidgetembed/":t.customer?"/"+t.customer+"/widgetembed/":"/widgetembed/";const r=Object.create(null);var a=(t.enable_publishing?h.ideasHost:h.getHost(t))+e+"?frameElementId="+this.id+"&symbol="+encodeURIComponent(t.symbol)+"&interval="+encodeURIComponent(t.interval)+(t.range?"&range="+encodeURIComponent(t.range):"")+(t.whitelabel?"&whitelabel=1":"")+(t.hide_top_toolbar?"&hidetoptoolbar=1":"")+(t.hide_legend?"&hidelegend=1":"")+o("hide_side_toolbar","hidesidetoolbar")+o("allow_symbol_change","symboledit")+o("save_image","saveimage")+"&toolbarbg="+t.toolbar_bg.replace("#","")+(t.watchlist&&t.watchlist.length&&t.watchlist.join?"&watchlist="+encodeURIComponent(t.watchlist.join("")):"")+i("editablewatchlist","1")+i("details","1")+i("calendar","1")+i("hotlist","1")+(t.studies&&h.isArray(t.studies)?"string"==typeof t.studies[0]?i("studies",encodeURIComponent(t.studies.join(""))):n("studies",t.studies):"")+o("horztouchdrag")+o("verttouchdrag")+i("widgetbar_width",t.widgetbar_width,"widgetbarwidth")+i("hideideas","1")+i("theme",encodeURIComponent(t.theme))+i("style",encodeURIComponent(t.style))+(void 0===t.extended_hours?"":"&extended_hours="+t.extended_hours)+i("timezone",encodeURIComponent(t.timezone))+i("hideideasbutton","1")+i("withdateranges","1")+i("hidevolume","1")+(void 0===t.padding?"":"&padding="+t.padding)+i("show_popup_button","1","showpopupbutton")+n("studies_overrides",t.studies_overrides,{})+n("overrides",t.overrides,{})+n("enabled_features",t.enabled_features,[])+n("disabled_features",t.disabled_features,[])+(t.show_popup_button?"&showpopupbutton=1":"")+(t.publish_source?"&publishsource="+encodeURIComponent(t.publish_source):"")+(t.enable_publishing?"&enablepublishing="+encodeURIComponent(t.enable_publishing):"")+(t.venue?"&venue="+encodeURIComponent(t.venue):"")+(t.symbology?"&symbology="+encodeURIComponent(t.symbology):"")+(t.whotrades?"&whotrades="+encodeURIComponent(t.whotrades):"")+(t.locale?"&locale="+t.locale:"")+(t.referral_id?"&referral_id="+t.referral_id:"")+(t.no_referral_id?"&no_referral_id=1":"")+(t.fundamental?"&fundamental="+encodeURIComponent(t.fundamental):"")+(t.percentage?"&percentage="+encodeURIComponent(t.percentage):"")+"&utm_source="+encodeURI(window.location.hostname)+"&utm_medium="+(h.hasCopyright(t.container)?"widget_new":"widget")+(t.type?"&utm_campaign="+t.type:"")+(t.type&&"chart"===t.type?"&utm_term="+encodeURIComponent(t.symbol):"");return r["page-uri"]=h.getPageUriString(),a=a+"#"+encodeURIComponent(JSON.stringify(r))},image:function(t){this.postMessage.get("imageURL",{},(function(e){var o=h.host+"/x/"+e+"/";t(o)}))},subscribeToQuote:function(t){var e=document.getElementById(this.id);this.postMessage.post(e.contentWindow,"quoteSubscribe"),this.postMessage.on("quoteUpdate",t)},getSymbolInfo:function(t){this.postMessage.get("symbolInfo",{},t)},remove:function(){var t=document.getElementById(this.id);t.parentNode.removeChild(t)},reload:function(){var t=document.getElementById(this.id),e=t.parentNode;e.removeChild(t),e.innerHTML=this.render()}},h.chart.prototype={create:function(){this.isMobile=h.isMobileDevice.any;var t,e=this.render(),o=this;h.chartCssAttached||(h.css(this.renderCss()),h.chartCssAttached=!0),c(e,this.options),t=document.getElementById(this.id),h.bindEvent(t,"load",(function(){var t;for(o._ready=!0,t=o._ready_handlers.length;t--;)o._ready_handlers[t].call(o)})),h.onready((function(){var e=!1;if(document.querySelector&&document.querySelector('a[href$="/v/'+o.options.chart+'/"]')&&(e=!0),!e)for(var i=document.getElementsByTagName("a"),n=new RegExp("/v/"+o.options.chart+"/$"),r=new RegExp("/chart/([0-9a-zA-Z:+*-/()]+)/"+o.options.chart),a=0;a<i.length;a++)if(n.test(i[a].href)||r.test(i[a].href)){e=!0;break}e&&(t.src+="#nolinks",t.name="nolinks")})),this.postMessage=h.postMessageWrapper(t.contentWindow,this.id),this.postMessage.on("toggleFullscreen",(function(e){t.contentWindow===this.source&&o.toggleFullscreen(e.value)}),!0)},ready:h.widget.prototype.ready,renderCss:function(){return".tradingview-widget {position: relative;}"},render:function(){var t=this.options.mobileStatic&&this.isMobile?new URL(`${h.host}/embed-static/${this.options.chart}`):new URL(`${h.host}/embed/${this.options.chart}`);h.addUrlParams(t,{method:"script",locale:this.options.locale},!0),this.options.type="chart",h.addUrlParams(t,h.generateUtmForUrlParams(this.options));var e=this.options.autosize?'style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;"':`style="width: ${this.options.width}px; height: ${this.options.height}px;"`;const o=this.options.autosize?'style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;"':`width="${this.options.width}" height="${this.options.height}"`;return`\n\t\t\t\t<div class="tradingview-widget" ${e}>\n\t\t\t\t\t<iframe id="${this.id}" src="${t.toString()}"\n\t\t\t\t\t\t${o}\n\t\t\t\t\t\tframeborder="0" allowTransparency="true" scrolling="no"\n\t\t\t\t\t>\n\t\t\t\t\t</iframe>\n\t\t\t\t</div>\n\t\t\t`},toggleFullscreen:function(t){var e=document.getElementById(this.id);t?(e.style.position="fixed",e.style.width="100vw",e.style.maxWidth="100%",e.style.height="100vh",e.style.maxHeight="100%",e.style.left="0px",e.style.top="0px",e.style.zIndex="1000000",e.style.backgroundColor="#fff"):(e.style.position="static",this.options.autosize?(e.style.width="100%",e.style.height="100%"):(e.style.width=this.options.width+"px",e.style.height=this.options.height+"px"),e.style.maxWidth="none",e.style.maxHeight="none",e.style.zIndex="auto",e.style.backgroundColor="transparent")},getSymbolInfo:function(t){this.postMessage.get("symbolInfo",{},t)}},h.stream.prototype={create:function(){this.isMobile=h.isMobileDevice.any;var t=this.render();c(t,this.options)},render:function(){var t=new URL(h.host+this.options.stream+"/embed/");h.addUrlParams(t,{locale:this.options.locale},!0),this.options.type="chart",h.addUrlParams(t,h.generateUtmForUrlParams(this.options));var e=this.options.autosize?'style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;"':`style="width: ${this.options.width}px; height: ${this.options.height}px;"`,o=this.options.autosize?'style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;"':`width="${this.options.width}" height="${this.options.height}"`;return`\n\t\t\t\t<div class="tradingview-widget"\t${e}>\n\t\t\t\t\t<iframe id="${this.id}" src="${t.toString()}"\n\t\t\t\t\t\t${o}\n\t\t\t\t\t\tframeborder="0" allowTransparency="true" scrolling="no"\n\t\t\t\t\t>\n\t\t\t\t\t</iframe>\n\t\t\t\t</div>\n\t\t\t`}},h.postMessageWrapper=(n={},r={},a={},s=0,d=0,window.addEventListener&&window.addEventListener("message",(function(t){var e;try{e=JSON.parse(t.data)}catch(t){return}if(e&&e.provider&&"TradingView"===e.provider)if(e.source=t.source,"get"===e.type){if(!r[e.name])return;r[e.name].forEach((function(t){"function"==typeof t&&t.call(e,e.data,(function(t){var o={id:e.id,type:"on",name:e.name,client_id:e.client_id,data:t,provider:"TradingView"};i.postMessage(JSON.stringify(o),"*")}))}))}else if("on"===e.type)n[e.client_id]&&n[e.client_id][e.id]&&(n[e.client_id][e.id].call(e,e.data),delete n[e.client_id][e.id]);else if("post"===e.type){if(!r[e.name])return;r[e.name].forEach((function(t){"function"==typeof t&&t.call(e,e.data,(function(){}))}))}})),function(t,e){return n[e]={},a[e]=t,i=t,{on:function(t,e,o){r[t]&&o||(r[t]=[]),r[t].push(e)},off:function(t,e){if(!r[t])return!1;var o=r[t].indexOf(e);o>-1&&r[t].splice(o,1)},get:function(t,o,i){var r={id:s++,type:"get",name:t,client_id:e,data:o,provider:"TradingView"};n[e][r.id]=i,a[e].postMessage(JSON.stringify(r),"*")},post:function(t,e,o){var i={id:d++,type:"post",name:e,data:o,provider:"TradingView"};t&&"function"==typeof t.postMessage&&t.postMessage(JSON.stringify(i),"*")}}}),h.getUrlParams=function(){for(var t=/\+/g,e=/([^&=]+)=?([^&]*)/g,o=window.location.search.substring(1),i=e.exec(o),n=function(e){return decodeURIComponent(e.replace(t," "))},r={};i;)r[n(i[1])]=n(i[2]),i=e.exec(o);return r},h.createUrlParams=function(t){var e=[];for(var o in t)t.hasOwnProperty(o)&&null!=t[o]&&e.push(encodeURIComponent(o)+"="+encodeURIComponent(t[o]));return e.join("&")},h.addUrlParams=function(t,e,o){for(var i in e)e.hasOwnProperty(i)&&(o?e[i]:null!=e[i])&&t.searchParams.set(i,e[i]);return t};var c=function(t,e){var o=document.getElementById(e.container);if(o){o.innerHTML=t;var i=o.parentElement&&o.parentElement.querySelector(".tradingview-widget-copyright");if(i){i.style.width=o.querySelector("iframe").style.width;var n=i.querySelector("a");if(n){var r=n.getAttribute("href");if(r)try{const t=new URL(r);h.addUrlParams(t,h.generateUtmForUrlParams(e)),n.setAttribute("href",t.toString())}catch(t){console.log(`Cannot update link UTM params, href="${r}"`)}}}}else document.write(t);document.body.appendChild(h.embedStylesForCopyright())},g=function(t,e){for(var o in e)"object"==typeof e[o]&&t.hasOwnProperty(o)?g(t[o],e[o]):t[o]=e[o];return t};window.TradingView?g(window.TradingView,h):window.TradingView=h}();