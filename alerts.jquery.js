/* 
 *
 * Copyright : 	(C) 2013 Vico Bertogli 
 * Author	 : 	Vico Bertogli III
 * Website 	 : 	http://www.b3wd.com
 * Github  	 : 	https://github.com/Mad-Chemist
 *
 */

var alertNumber =0, alertWidth = '300px', alertDelay = 4000;
$(document).ready(function() {
	$('body').append('<div id="pageAlerts"></div>');
	$("<style type='text/css'>#pageAlerts { position:fixed; top:0; width:100%; z-index:9999999999999; pointer-events:none;} #pageAlerts .alert {width: "+alertWidth+"; margin: 5px auto; color: #FFF; display: block; padding: 10px; text-align: center; font-weight: bold; z-index:99999999999999;} #pageAlerts .alert.good { background:green; } #pageAlerts .alert.bad { background:#E00000;;} .round6 { -webkit-border-radius: 6px; -moz-border-radius: 6px; border-radius: 6px; }</style>").appendTo("head");
});
$.fn.pageAlert = function(alert,type,color) {
	var type 	 = (type == 1) ? "bad" : "good";
	var addColor = (color !== 'undefined') ? "style='background:#"+color+"';" : "";
	$(this).append('<span class="round6 alert '+type+'" id="alert'+alertNumber+'" '+addColor+'>'+alert+'</span>');
	$('#alert'+alertNumber).delay(alertDelay).fadeOut(function() { $(this).remove(); });
	alertNumber++;
};


//CUSTOMIZATION

//set alertWidth to the width you want the alerts to be shown at
//set alertDelay to the delay you want the alerts to linger for

//DEFINITION

// $(WHERE YOU WANT ALERT TO SHOW -> for best results this should be '#pageAlerts').pageAlert('TEXT YOU WANT SHOWN', TYPE - > 1 for red and 0 for green background, CUSTOM BACKGROUND COLOR -> must be in hex format);

// USAGE EXAMPLES:

// $('#pageAlerts').pageAlert('This is a sample green alert',0); ---> This will add a green alert alert to the alert container previously defined

// $('#pageAlerts').pageAlert('This is a sample red alert',1); ---> This will add a red alert alert to the alert container previously defined

// $('#pageAlerts').pageAlert('This is a sample custom color alert',1, 333333); ---> This will add a dark grey alert alert to the alert container previously defined.  The third paramater requires the values to be in hex format

// $('body').pageAlert('This is a sample red alert',1); ---> This adds the alert to the body, instead of the defined container