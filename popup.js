document.querySelector('.btn1').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (tabs.length === 0) {
            // console.error("No active tab found.");
            return;
        }
        chrome.scripting.executeScript({target: { tabId: tabs[0].id },files: ['content.js']}, () => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "selectGoodRadios" }, response => {
                if (chrome.runtime.lastError) {
                    // console.error("Error message send:", chrome.runtime.lastError.message);
                } else {
                    console.log("Response received:", response);
                }
            });
        });
    });
});

document.querySelector('.btn2').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (tabs.length === 0) {
            // console.error("No active tab found.");
            return;
        }
        chrome.scripting.executeScript({target: { tabId: tabs[0].id },files: ['content.js']}, () => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "selectBadRadios" }, response => {
                if (chrome.runtime.lastError) {
                    // console.error("Error message send:", chrome.runtime.lastError.message);
                } else {
                    console.log("Response received:", response);
                }
            });
        });
    });
});

document.querySelector('.btn3').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (tabs.length === 0) {
            // console.error("No active tab found.");
            return;
        }
        chrome.scripting.executeScript({target: { tabId: tabs[0].id },files: ['content.js']}, () => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "selectRandomRadios" }, response => {
                if (chrome.runtime.lastError) {
                    // console.error("Error message send:", chrome.runtime.lastError.message);
                } else {
                    console.log("Response received:", response);
                }
            });
        });
    });
});
