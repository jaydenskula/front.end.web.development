// meowfacts API
fetch('https://meowfacts.herokuapp.com/')
  .then((response) => { return response.json() })
  //.then(function(response) { return response.json() })
  .then((data) => { console.log(data) });

function writeMeowFactsToPage(json) {
  for (const meowFact of json.data) {
    const p = document.createElement('p');
    p.innerText = meowFact;
    document.body.appendChild(p);
  }
}

fetch('https://meowfacts.herokuapp.com/?count=3')
  .then(response => response.json())
  .then(writeMeowFactsToPage);