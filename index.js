

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1

console.info(randomNumber)

inputButton.addEventListener('click', (e) => {
    e.preventDefault();
    const inputNumber = document.querySelector('#inputNumber'); //pega todo o elemento HTML
    const inputButton = document.querySelector('#inputButton'); //guarda todo elemento HTML
    const result = document.querySelector("#result"); // guarda o elemento HTML

    const x = inputNumber.value // guarda na variável o valor do input em formato string

    if (Number(x) == randomNumber) { 
        document.querySelector("#screen1").classList.add("hide"); // procura o elemento de id screen1 e adiciona a classe a palavra hide
        document.querySelector('#screen2').classList.remove("hide");//procura o elemento de id screen2 e remove a classe a palavra hide
      
        result.innerText = `Acertou em ${xAttempts} tentativa(s)`; // na variavel result, que guarda o elemento h2 de classe result, troca/altera/inclui o texto
    
        console.log(`Acertou em ${xAttempts} tentativa(s)`);

    }

    xAttempts++

})
