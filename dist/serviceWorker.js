// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command === "click") {
    sendResponse({ success: "success" });
  }
});

console.log("Background script loaded.");
