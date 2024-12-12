function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function autoSelectGoodRadio() {
    const radios = document.querySelectorAll('input[type="radio"]');
    if(radios.length === 0) {
        // console.warn("No radio found.");
        return;
    }
    radios.forEach(radio => {
        if(!radio.checked && radio.value === "4") {
            radio.click();
            console.log("Good radio selected:", radio.value);
        }
    });
    radios.forEach(radio => {
        if(!radio.checked && radio.value === "5") {
            radio.click();
            console.log("Good radio selected:", radio.value);
        }
    });
}

function autoSelectBadRadio() {
    const radios = document.querySelectorAll('input[type="radio"]');
    if(radios.length === 0) {
        // console.warn("No radio found.");
        return;
    }
    radios.forEach(radio => {
        if(!radio.checked && radio.value === "1") {
            radio.click();
            console.log("Bad radio selected:", radio.value);
        }
    });
    radios.forEach(radio => {
        if(!radio.checked && radio.value === "0") {
            radio.click();
            console.log("Bad radio selected:", radio.value);
        }
    });
}

function autoSelectRandomRadio() {
    const radios = document.querySelectorAll('input[type="radio"]');
    if(radios.length === 0) {
        // console.warn("No radio found.");
        return;
    }
    radios.forEach(radio => {
        var randomValue = getRandomInt(100)%5;
        if(!radio.checked && radio.value === randomValue.toString()) {
            radio.click();
            console.log("Random radio selected:", randomValue.toString());
        }
        if(!radio.checked && radio.value === (randomValue+1).toString()) {
            radio.click();
            console.log("Random radio selected:", (randomValue+1).toString());
        }
    });
}

if (!window.hasMessageListener){
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if(request.action === "selectGoodRadios") {
            console.log("selectGoodRadios action triggered.");
            autoSelectGoodRadio();
            sendResponse({ success: true, message: "Good radios selected." });
        }else if(request.action === "selectBadRadios") {
            console.log("selectBadRadios action triggered.");
            autoSelectBadRadio();
            sendResponse({ success: true, message: "Bad radios selected." });
        }else if(request.action === "selectRandomRadios") {
            console.log("selectRandomRadios action triggered.");
            autoSelectRandomRadio();
            sendResponse({ success: true, message: "Random radios selected." });
        }else{
            // console.warn("Unknown action:", request.action);
            sendResponse({ success: false, message: "Unknown action." });
        }
    });
}

