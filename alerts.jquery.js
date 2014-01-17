/* 
 *
 * Copyright : 	(C) 2013 Vico Bertogli 
 * Author	 : 	Vico Bertogli III
 * Website 	 : 	http://www.b3wd.com
 * Github  	 : 	https://github.com/Mad-Chemist
 *
 */

var alertNumber =0,  alertDuration = 4000, alertDefaultTheme = 'teal';
jQuery(document).ready(function() {
	pagealertInit();
});
function pagealert(message,params) {
	if (typeof message === 'undefined') return; //if no message, exit

	if (typeof params === 'undefined') var params = {}; //if array doesnt exist, create it

	if (typeof params['type'] !== 'undefined') jQuery('#alert-title').append('.alert'+alertNumber+':before { content: "'+ params['type']+'"; }'); 

	params['theme'] = (typeof params['theme'] === 'undefined') 	? alertDefaultTheme+'-alert ' : params['theme']+'-alert ';
	params['class'] = (typeof params['class'] === 'undefined') 	? '' : params['class'];
	params['duration'] = (typeof params['duration'] === 'undefined') 	? alertDuration : params['duration'];
	params['url'] 	= (typeof params['url'] === 'undefined') 	? '' : 'href="'+params['url']+'"';
	params['parent'] = (typeof params['parent'] === 'undefined') 	? '#pageAlerts' : params['parent'];

	
		jQuery(params['parent']).append('<a id="" class="notice alert'+alertNumber + ' ' +params['theme']+params['class']+'" '+params['url']+'>'+message+'</a>');

	params['width'] 	= (typeof params['width'] === 'undefined') 	? jQuery('.alert'+alertNumber).outerWidth() : params['width'];

	jQuery('.alert'+alertNumber).width(params['width']).css('display','block');
	if (params['duration'] !== 0) jQuery('.alert'+alertNumber).delay(params['duration']).fadeOut('slow',function() { jQuery(this).remove(); });
	alertNumber++;
}
/*params = [
{
	'url' : 'string',
	'type' : 'string',
	'theme' : 'string',
	'class' : 'string',
	'duration' : 'int',
	'width' : 'int',
	'parent' : 'string'

} ;*/

function pagealertInit() {
	jQuery('head').append('<style id="alert-title"></style>');
	jQuery('body').append('<div id="pageAlerts"></div>');
}

function pagealertSettings(params) {
	alertNumber = (typeof params['start'] === 'undefined') 			? alertNumber 					: 	params['start']; //sets starting alert number

	alertDuration = (typeof params['duration'] === 'undefined') 	? alertDuration 				: 	params['duration']; //sets default duration of alerts

	alertDefaultTheme = (typeof params['theme'] === 'undefined')	? alertDefaultTheme+'-alert ' 	: 	params['theme']+'-alert ';

}
/*params = [
{
	'start' : 'int',
	'duration' : 'int',
	'theme' : 'string',
	'pointerevents' : 'bool',


} ;*/