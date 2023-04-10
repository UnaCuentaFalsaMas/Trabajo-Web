// listen button submit 
document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    calculaImc(altura, peso);
    console.log(altura+'\n'+peso);
});

// calculate imc 
function calculaImc(altura, peso){
    var imc = peso / (altura * altura);
    console.log(imc);
    document.getElementById('resultado').textContent = imc;
}

