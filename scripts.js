let dados  =  [];
const elementoH1 = document.querySelector("h1");
const btn = document.querySelector(".btn-azul");

btn.addEventListener("click", () => {
  let articles = document.querySelectorAll("article");
  for(let i = 0; i < articles.length; i++) {
    articles[i].remove();

  }
  dados = [];
  elementoH1.innerText = `${dados.length} monstros`;
});

async function renderizar() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const dadosJSON = await response.json();

  dados = dadosJSON.slice(0, 5);
  elementoH1.innerText = `${dados.length} monstros`;

  for (let objeto of dados) {
    const elementArticle = document.createElement("article");
    elementArticle.classList.add("monstros");

    elementArticle.innerHTML = `
      <img src="https://robohash.org/${objeto.id}?set=set2" alt="${objeto.name}" />
        <div>
          <h2>${objeto.name}</h2>
          <p>${objeto.email}</p>
        </div>
      `;

      elementoH1.insertAdjacentElement("afterend", elementArticle);
    }
  }  
    
  renderizar();

  console.log("primeiro");
  

  /*fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  })
  .then((response) => {
    if(response.status === 200) alert('sucesso!')
    else alert('ALGO DEU ERRADO')
    return response.json();
  })
  .then((json) => {
    dados = json
  });*/

 

  

 

  
 