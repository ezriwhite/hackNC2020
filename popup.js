document.addEventListener('DOMContentLoaded', function () {
    var checkPageButton = document.getElementById('checkPage');
    var sustainabilityButton = document.getElementById('sustainability');
    var ethicsButton = document.getElementById('ethics');
    var minorityOwnedButton = document.getElementById('minority-owned');


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
    checkPageButton.addEventListener('click', function () {

        chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
            let url = tabs[0].url;

            chrome.tabs.create({ url: url });

        });
        /*var newURL = "http://espn.com";
        chrome.tabs.create({ url: newURL }, function () {

        });*/
    }, false);
}, false);

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        company = document.getElementById('company-name').value
        document.getElementById('root').appendChild(document.createElement("P").appendChild(document.createTextNode(company)))

        // const $root = $("#root");
        // $root.append(`<p>Hello</p>`)
        // renderCompany(companies.find((c) => c.name === company))
        /*if (company == "hello") {
            var newURL = "http://espn.com";
            chrome.tabs.create({ url: newURL });
        } else {
            var newURL = "http://yahoo.com";
            chrome.tabs.create({ url: newURL });
        }*/
        /*var newItem = document.createElement("p");
        newItem.appendChild(document.createTextNode(company))
        document.getElementById('comp-name').insertBefore(newItem, list.childNodes[0])*/

    }
});

function renderCompany(company) {
    return `<h1 id="comp-name">${company.name}</h1>
        <h2>Ethically Made: ${company.ethical}</h2>
        <h2>Sustainability Made: ${company.sustainable}</h2>
        <h2>Minority Owned? ${company.minority_owned}</h2>
        <button id="checkPage">Read more about the company</button>`;
};
