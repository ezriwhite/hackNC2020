document.addEventListener('DOMContentLoaded', function () {
    var sustainabilityButton = document.getElementById('sustainability');
    var ethicsButton = document.getElementById('ethics');
    var minorityOwnedButton = document.getElementById('minority-owned');
    var urlSearchButton = document.getElementById('url-search');

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

    urlSearchButton.addEventListener('click', function () {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
            document.getElementById('root').innerHTML = ""
            let url = tabs[0].url;
            let target = companies.find((c) => (url.toLowerCase()).includes(c.name.toLowerCase()))
            if (target !== undefined) {
                document.getElementById('root').appendChild(renderCompany(target))
                var checkPageButton = document.getElementById('checkPage');
                checkPageButton.addEventListener('click', function () {
                    // document.getElementById('root').appendChild(document.createElement("P").appendChild(document.createTextNode(document.getElementById('comp-name').innerHTML)))

                    company = document.getElementById('comp-name').innerHTML
                    // document.getElementById('root').appendChild(document.createElement("P").appendChild(document.createTextNode(getResults(company, 0))))
                    var newURL = `https://google.com/search?q=${company}+sustainability`;
                    chrome.tabs.create({ url: newURL });
                }, false);
            } else {
                document.getElementById('root').appendChild(document.createElement("P").appendChild(document.createTextNode("Website not found. Try our search tool instead.")))
            }

            // document.getElementById('root').appendChild(document.createElement("P").appendChild(document.createTextNode(url)))
        })
        // chrome.tabs.getCurrent((tab) => {
        //     url = tab.url
        //     document.getElementById('root').appendChild(document.createElement("P").appendChild(document.createTextNode(url))
        //     // for(let i = 0; i < companies.length; i++) {

        //     // }
        // })

    })



}, false);

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('root').innerHTML = ""
        e.preventDefault();
        company = document.getElementById('company-name').value
        var target = companies.find((c) => company === c.name)
        if (target === undefined) {
            target = "Company not found."
            document.getElementById('root').appendChild(document.createElement("P").appendChild(document.createTextNode(target)))
        } else {
            document.getElementById('root').appendChild(renderCompany(target))
        }

        var checkPageButton = document.getElementById('checkPage');
        checkPageButton.addEventListener('click', function () {
            company = document.getElementById('comp-name').innerHTML
            console.log("hi")
            chrome.runtime.sendMessage({
                company: company,
            }, function (response) {
                //Alert the message
                console.log("The response from the background page: " + response.response);//You have to choose which part of the response you want to display ie. response.response
            });
            // var newURL = `https://google.com/search?q=${company}+sustainability`;
            // chrome.tabs.create({ url: newURL });
        }, false);
    }
});

function getResults() {

}

function renderCompany(company) {
    let wrapper = document.createElement('div')
    wrapper.innerHTML = `<h1 id="comp-name">${company.name}</h1>
    <h2>Ethically Made: ${company.ethical}</h2>
    <h2>Sustainability Made: ${company.sustainable}</h2>
    <h2>Minority Owned? ${company.minority_owned}</h2>
    <button id="checkPage" class="readMore">Read more</button>`;
    return wrapper;
};


