const textArea = document.querySelector(".text-area")
const mensagem = document.querySelector(".mensagem");

function btnCriptografar(){
    const textoEncriptado= encriptar(textArea.value);
    mensagem.value= textoEncriptado;
    textArea.value= "";
}

function encriptar(stringEncriptada){

    let matrizCodigo =[["e", "enter"],["i", "imes" ],["a", "ai" ],["o", "ober" ],["u", "ufat" ]];
    stringEncriptada=stringEncriptada.toLowerCase();

    for (let i =  0; i < matrizCodigo.length; i++ ){
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function btnDesencriptar(){
    const textoDesencriptado= desencriptar(textArea.value);
    mensagem.value= textoDesencriptado;
    textArea.value= "";
}

function desencriptar(stringDesenciptada){

    let matrizCodigo =[["e", "enter"],["i", "imes" ],["a", "ai" ],["o", "ober" ],["u", "ufat" ]];
    stringDesenciptada=stringDesenciptada.toLowerCase();

    for (let i =  0; i < matrizCodigo.length; i++ ){
        if(stringDesenciptada.includes(matrizCodigo[i][1])) {
            stringDesenciptada=stringDesenciptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesenciptada;
}
