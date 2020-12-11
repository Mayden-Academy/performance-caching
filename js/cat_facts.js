

(async function() {
    const response = await fetch('https://dev.io-academy.uk/resources/CPS/api.php');
    const facts = await response.json();
    const factContainer = document.querySelector('#catFacts');

    let output = '';
    facts.data.forEach((fact, i) => {
        output += `<div class="col-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Cat fact ${++i}</h5>
                    <p class="card-text">${fact}</p>
                </div>
            </div>
        </div>`
    })
    factContainer.innerHTML += output;

}())

