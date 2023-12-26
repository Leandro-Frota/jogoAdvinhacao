
// varáveis
const randomNumber = Math.round(Math.random() * 10);
const btnTry = document.querySelector('#btnTry'); //guarda todo elemento HTML
const btnReset = document.querySelector('#btnReset'); //pega todo o elemento HTML
const screen1 = document.querySelector("#screen1");
const screen2= document.querySelector('#screen2');
const inputNumber = document.querySelector('#inputNumber'); 
const result = document.querySelector("#result"); // guarda o elemento HTML
let xAttempts = 1

function resetClick(){
    screen1.classList.remove('hide');
    screen2.classList.add('hide');
    xAttempts=1
}

btnTry.addEventListener('click', (e) => {
    e.preventDefault(); // não envia o formulário, característica de um botão dentro de um form

    const x = inputNumber.value // guarda na variável o valor do input em formato string

    if (Number(x) == randomNumber) { 
        screen1.classList.add("hide"); // procura o elemento de id screen1 e adiciona a classe a palavra hide
        screen2.classList.remove("hide");//procura o elemento de id screen2 e remove a classe a palavra hide
      
        result.innerText = `Acertou em ${xAttempts} tentativa(s)`; // na variavel result, que guarda o elemento h2 de classe result, troca/altera/inclui o texto
    
        console.log(`Acertou em ${xAttempts} tentativa(s)`);

    }

    inputNumber.value="";
    xAttempts++

})

//função callbacck
btnReset.addEventListener('click',resetClick)