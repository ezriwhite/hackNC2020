console.log("Atleast reached background.js")
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log('herre');
        var newURL = `https://google.com/search?q=${request.company}+sustainability`;
        chrome.tabs.create({ url: newURL, active: false }, (tab) => {
            chrome.tabs.executeScript(tab.id, {
                code: "console.log('asdf');"
            })
        });
        

        /*function modifyDOM() {
            //You can play with your DOM here or check URL against your regex
            console.log('Tab script:');
            //return document.getElementById("search").innerHTML;
            return document.body.innerHTML;
        }*/

        /*chrome.tabs.executeScript({
            code: '(' + modifyDOM.toString() + ')();' //argument here is a string but function.toString() returns function's code
        }, (results) => {
            //Here we have just the innerHTML and not DOM structure
            console.log('Popup script:')
            console.log(results[0]);
        });*/
        // chrome.tabs.executeScript({ file: "content.js" })


        sendResponse({
            response: `https://google.com/search?q=${request.company}+sustainability`
        });
    }
);