chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "logMessage") {
        console.log("Background received:", message.content);
        sendResponse({ success: true });
    }
});
