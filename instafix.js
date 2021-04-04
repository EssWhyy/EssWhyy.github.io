//temp fix for instagram in-app browser cause the padding is messed up for some reason

var isInstagram = navigator.userAgent.match(/instagram/i);
if (isInstagram) {
  var head = document.querySelector('head');
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'instamobile.css';
  head.appendChild(link);
}
