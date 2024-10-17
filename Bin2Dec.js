
function binario(num){
    // Verifica se o número é um binário válido de até 8 dígitos
    if (/^[01]{1,8}$/.test(num)){
        return parseInt(num, 2)// Converte binário para decimal
    }else{
        return "Número inválido! Por favor, insira um valor de 1 a 8 dígitos contendo apenas 0 e 1."
    }
     
}

document.getElementById("converter").addEventListener("click", () => {
    const num = document.getElementById("binario").value;
    const resultado = binario(num);
    document.getElementById("resultado").textContent = 
        `Resultado: ${resultado}`;
});