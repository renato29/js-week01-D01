const resultado = document.querySelectorAll("p")
console.log(resultado)


const input = document.querySelector("input[type=text]")

function fibo(){
    console.log('inside the fibo function');
    let n0=0;
    let n1=1;
    for (i=1;i<input.value;i++){
        console.log(n1)
        let aux= n1
        n1+=n0
        n0=aux
    }
    resultado[1].innerHTML=n1
        
}

