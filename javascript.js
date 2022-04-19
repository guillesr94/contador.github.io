const add=document.getElementById("btn_add")
const less=document.getElementById("btn_less")
const reset=document.getElementById("reset")
const numero = document.getElementById("numero")

document.addEventListener("click",(e)=>{
    let resultado= Number(numero.textContent)
    
    if(e.target === add){       
        resultado += 1;
        numero.textContent=resultado
        console.log(resultado)
    }
    if(e.target === less){
        resultado -= 1;
        console.log(resultado)
        if(resultado<0){
            resultado=0
            numero.textContent=resultado;
        }
        numero.textContent = resultado;
    }
   
    if(e.target === reset){
        resultado=0
        numero.textContent = resultado
    }
})