let color = '#333333';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});


chrome.webNavigation.onDOMContentLoaded.addListener((details) => {
  chrome.scripting.executeScript({
    target: { tabId: details.tabId },
    files: ['content-script.js']
  });
}, {url: [{hostSuffix : 'google.co.jp'}]});