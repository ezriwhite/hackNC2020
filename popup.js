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
            let url = tabs[0].url;
            let target = companies.find((c) => (url.toLowerCase()).includes(c.name.toLowerCase()))
            if (target !== undefined) {
                document.getElementById('root').appendChild(renderCompany(target))
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

            chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
                let url = tabs[0].url;

                chrome.tabs.create({ url: url });

            });
        }, false);
    }
});

function renderCompany(company) {
    let wrapper = document.createElement('div')
    wrapper.innerHTML = `<h1 id="comp-name">${company.name}</h1>
    <h2>Ethically Made: ${company.ethical}</h2>
    <h2>Sustainability Made: ${company.sustainable}</h2>
    <h2>Minority Owned? ${company.minority_owned}</h2>
    <button id="checkPage">Read more about the company</button>`;

    return wrapper;
};
