var button = document.createElement("button");

button.innerText = "This is the inserted button, click on me!";
button.onclick = async function () {
  console.log("button click");
  const response = await chrome.runtime.sendMessage({
    command: "click",
  });
};

document.body.prepend(button);

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "CONTENT_SCRIPT_READINESS_CHECK") {
    sendResponse({ success: "success" });
  }
});

console.log("Content script loaded.");
