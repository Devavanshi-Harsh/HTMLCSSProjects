function clearForm() {
    document.getElementById("registration-form").reset();
}
function changeStylesheet(styleName) {
  var i, linkTag;
  var stylesheets = document.getElementsByTagName('link');

  for (i = 0; i < stylesheets.length; i++) {
    linkTag = stylesheets[i];
    if (linkTag.getAttribute('rel').indexOf('stylesheet') !== -1) {
      linkTag.disabled = true;
      if (linkTag.getAttribute('title') === styleName) {
        linkTag.disabled = false;
      }
    }
  }
}
