

(async function() {
    const facts = await fetchData('https://dev.io-academy.uk/resources/CPS/api.php');
    const factContainer = document.querySelector('#catFacts');

    let output = ''
    facts.forEach((fact, i) => {
        output += `<div class="col-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Cat fact ${++i}</h5>
                    <p class="card-text">${fact}</p>
                </div>
            </div>
        </div>`
    })
    factContainer.innerHTML += output

}())

async function fetchData(url) {

    let data = {data: []}
    let i = 1;
    while (localStorage.getItem('fact' + i) !== null) {
        i++
        data.data.push(localStorage.getItem('fact' + i))
    }

    if (data.data.length == 0) {
        const response = await fetch(url);
        data = await response.json();

        data.data.forEach((fact, i) => {
            ++i;
            localStorage.setItem('fact' + i, fact);
        })

    }

    return data.data;
}

