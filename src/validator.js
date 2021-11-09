const validator = {
  // Algoritmo de Lunh

  isValid: function(valorNumero){
    // Pasar los números a un array y en orden inverso
    let numeroInverso = Array.from(valorNumero).reverse();
    let sumatotal=0;
    
    // Ubicar las posiciones pares
    for(let i = 0; i<numeroInverso.length; i++){
      if((i+1) % 2 == 0){ // Para que mi posición empiece desde 1
        let cifra = (numeroInverso[i]*2);// Multiplicar por 2 a las posiciones pares
        if(cifra>=10){
          let cifra1 = Math.floor(cifra/10);
          let cifra2 = cifra % 10;
          numeroInverso[i]= cifra1 + cifra2;
        }
        else{
          numeroInverso[i] = cifra;
        }
      
      }else{
        numeroInverso[i] = numeroInverso[i]*1;
      }
      sumatotal = sumatotal + numeroInverso[i];
    }
    
    if(sumatotal%10==0){
      return true;
    } else {
      return false;
    }
    
  },
  
  maskify: function(valorNumero){
   let largoTarjeta = valorNumero.length - 4; //todos los numeros menos las ultimas 4 posiciones
   let cuatroNumeros = valorNumero.substring(valorNumero.length - 4 ); // 4 ultimas posiciones

   let resultado = "";

   for(let mask = 1; mask <= largoTarjeta; mask++){ //oculto los numeros menos los ultimos 4
    resultado += "#";
  } //console.log(resultado + cuatroNumeros)
  return resultado + cuatroNumeros; //sumo los numeros visibles y ocultos
  }
}
 export default validator;
