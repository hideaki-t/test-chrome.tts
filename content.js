chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
    if (req.method === "getSelectionText") {
        sendResponse({data: document.getSelection().toString()});
    } else {
        sendResponse({});
    }
});
