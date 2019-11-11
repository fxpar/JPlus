// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Ecrire la date du lendemain');
  chrome.tabs.executeScript({
    file: 'content.js'
  });
});