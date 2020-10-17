document.addEventListener('DOMContentLoaded', function () {
    var checkPageButton = document.getElementById('checkPage');
    var sustainabilityButton = document.getElementById('sustainability');
    var ethicsButton = document.getElementById('ethics');
    var minorityOwnedButton = document.getElementById('minority-owned');
    checkPageButton.addEventListener('click', function () {

        chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
            let url = tabs[0].url;

            chrome.tabs.create({ url: url });

        });
        /*var newURL = "http://espn.com";
        chrome.tabs.create({ url: newURL }, function () {

        });*/
    }, false);

    sustainabilityButton.addEventListener('click', function () {
        var newURL = "https://www.forbes.com/sites/ellevate/2019/10/07/why-sustainable-fashion-matters/#77a99c1771b8";
        chrome.tabs.create({ url: newURL });
    }, false);

    ethicsButton.addEventListener('click', function () {
        var newURL = "https://ethicalmadeeasy.com/what-is-ethical-fashion/";
        chrome.tabs.create({ url: newURL });
    });

    minorityOwnedButton.addEventListener('click', function () {
        var newURL = "https://medium.com/juno-collective/why-helping-minority-owned-businesses-is-still-important-4475403c041b";
        chrome.tabs.create({ url: newURL });
    });
}, false);

