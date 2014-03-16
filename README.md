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

Basic Usage
--------
Display an alert using the default settings:
```javascript
pagealert('Your Alert text');
```
Available Parameters
```javascript
params = {
	'url' : 'string', 
	//If set, will add href to alert
	'type' : 'string', 
	//Changes the text on the left hand side of alert
	'theme' : 'string', 
	//Sets theme for alert.
	//Naming convention of custom themes should be xxx-alert where xxx is your custom theme's name.
	//Therefore to call red-alert, you would pass the string 'red'
	'class' : 'string', 
	//Sets an optional class for the alert
	'delay' : int, 
	//Sets the duration the alert stays visible on the screen.  
	//Duration is in milliseconds (1s == 1000ms)
	'width' : int, 
	//Sets a static width for the alert
	'parent' : 'string' 
	//Chooses where the alert will be shown.
	//Default is the #pageAlerts container
};
```
Advanced Usage Examples
--------

Error alert that lasts for five seconds:
```javascript
pagealert('Oh man.  An error alert?!',{'class':' fa-a fa-a-exclamation','theme':'red','delay':5000});
```
You can see from the code example that three parameters are passed through.  The class controls the icon shown in place of the default 'type' text.

The built in red theme is chosen by passing through "red" as the theme.

Lastly, the alert's duration delay is set to last for five seconds.

Future Updates
--------

I plan to release more updates to this extension in the future.  Some notable future updates include removing the jQuery dependency, adding more themeing options, and simplifying adding icons.
