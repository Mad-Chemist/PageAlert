Page Alert
=============
#### A simple plugin to display alerts on your page.

Features
--------
* A simple aesthetically pleasing alert plugin
* Themes included
* Access to fontawesome icons
* Customizable parameters

Setup
--------
In order for this plugin to properly work, you will need to load your copy of jQuery before you link the javascript file.  Once jQuery is linked, simply include alerts.jquery.js and you're ready to go!

Usage
--------
Display an alert using the default settings:
```javascript
pagealert('Your Alert text');
```
Available Parameters
```javascript
params = {
	'url' : 'string', //if set, will add href to alert
	'type' : 'string', //changes the text on the left hand side of alert
	'theme' : 'string', //sets theme for alert.  Naming convention of custom themes should be xxx-alert where xxx is your custom theme's name.  Therefore to call red-alert, you would pass the string 'red'
	'class' : 'string', //sets an optional class for the alert
	'duration' : int, //sets the duration the alert stays visible on the screen.  duration is in milliseconds (1s == 1000ms)
	'width' : int, //sets a static width for the alert
	'parent' : 'string' //chooses where the alert will be shown.  Default is the #pageAlerts container
};
```