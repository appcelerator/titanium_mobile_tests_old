var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var data = '';
data+= 'ID: ' + Titanium.App.getID() + '\n';
data+= 'Name: ' + Titanium.App.getName() + '\n';
data+= 'Version: ' + Titanium.App.getVersion() + '\n';
data+= 'Publisher: ' + Titanium.App.getPublisher() + '\n';
data+= 'URL: ' + Titanium.App.getURL() + '\n';
data+= 'Description: ' + Titanium.App.getDescription() + '\n';
data+= 'Copyright: ' + Titanium.App.getCopyright() + '\n';
data+= 'GUID: ' + Titanium.App.getGUID() + '\n';
data+= 'Build: ' + Titanium.version + '.' + Titanium.buildHash + ' (' + Titanium.buildDate + ')\n';
data+= 'Runtime: ' + Titanium.Platform.runtime + '\n';
data+= 'Display caps density: ' + Titanium.Platform.displayCaps.density + '\n';
data+= 'Platform & Version: ' + Titanium.Platform.name + ' ' + Titanium.Platform.version;

var fontSize = (Ti.Platform.osname === 'android') ? 16 : 14;

var label1 = Titanium.UI.createLabel({
	color:'#222',
	text:data,
	font:{fontSize:fontSize,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	top:10
});

var view1 = Titanium.UI.createView();

win.add(label1);

//
// Create a scroll view
//
var scrollView = Titanium.UI.createScrollView({
	contentHeight:'auto',
	contentWidth:'auto',
	top:0,
	showVerticalScrollIndicator:true,
	showHorizontalScrollIndicator:true
});

scrollView.add(label1);
win.add(scrollView);