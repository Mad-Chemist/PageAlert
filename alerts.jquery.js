/* 
 *
 * Copyright : 	(C) 2013 Vico Bertogli 
 * Author	 : 	Vico Bertogli III
 * Website 	 : 	http://www.b3wd.com
 * Github  	 : 	https://github.com/Mad-Chemist
 *
 */

var alertNumber =0, alertWidth = '300px', alertDelay = 4000, alertDefaultTheme = 'teal';
$(document).ready(function() {
	$('head').append('<style id="alert-title"></style>');
	$('body').append('<div id="pageAlerts"></div>');
});
function pagealert(message,params) {
	if (typeof message === 'undefined') return; //if no message, exit

	if (typeof params === 'undefined') var params = {}; //if array doesnt exist, create it

	if (typeof params['type'] !== 'undefined') $('#alert-title').append('#alert'+alertNumber+':before { content: "'+ params['type']+'"; }'); //add left content if requested
	params['theme'] = (typeof params['theme'] === 'undefined') 	? alertDefaultTheme+'-alert ' : params['delay']+'-alert ';
	params['class'] = (typeof params['class'] === 'undefined') 	? '' : params['class'];
	params['delay'] = (typeof params['delay'] === 'undefined') 	? alertDelay : params['delay'];
	params['url'] 	= (typeof params['url'] === 'undefined') 	? '' : 'href="'+params['url']+'"';
	


	$('#pageAlerts').append('<a id="alert'+alertNumber+'" class="notice '+params['theme']+params['class']+'" '+params['url']+'>'+message+'</a>');
	$('#alert'+alertNumber).width($('#alert'+alertNumber).outerWidth()).css('display','block');
	if (params['delay'] !== 0) $('#alert'+alertNumber).delay(params['delay']).fadeOut('slow',function() { $(this).remove(); });
	alertNumber++;
}

/*params = [
{
	'url' : 'string',
	'title' : 'string',
	'theme' : 'string',
	'class' : 'string',
	'delay' : 'int'

} ;*/
