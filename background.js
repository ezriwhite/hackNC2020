console.log("Atleast reached background.js")
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        var newURL = `https://google.com/search?q=${request.company}+sustainability`;
        chrome.tabs.create({ url: newURL });

        //Construct & send a response
        sendResponse({
            response: `https://google.com/search?q=${request.company}+sustainability`
        });
    }
);