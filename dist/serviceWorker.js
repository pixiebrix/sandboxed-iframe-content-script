async function isTargetReady(target) {
  const response = await chrome.tabs.sendMessage(
    target.tabId,
    {
      type: "CONTENT_SCRIPT_READINESS_CHECK",
      target,
    },
    { frameId: target.frameId },
  );
  return response;
}

async function getCurrentTab() {
  const queryOptions = { active: true, lastFocusedWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

async function messageFrames() {
  const tab = await getCurrentTab();

  const frames = await chrome.webNavigation.getAllFrames({ tabId: tab.id });

  frames.forEach(({ frameId }) => {
    isTargetReady({ tabId: tab.id, frameId })
      .then((response) => {
        console.log({ frameId, response });
      })
      .catch((error) => {
        console.error({ frameId, error });
      });
  });
}

chrome.runtime.onMessage.addListener(function (request) {
  if (request.command === "click") {
    messageFrames();
  }
});

console.log("Background script loaded.");
