

(async function() {
    const response = await fetch('https://dev.maydenacademy.co.uk/resources/CPS/catfacts.json');
    const facts = await response.json();
    const factContainer = document.querySelector('#catFacts');

    facts.data.forEach((fact, i) => {
        factContainer.innerHTML += `<div class="col-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Cat fact ${++i}</h5>
                    <p class="card-text">${fact}</p>
                </div>
            </div>
        </div>`
    })

}())

