function updateTermometer(){

  // Algoritmul functiei:
  var input = document.getElementById("temperature-input");
  var termometer = document.getElementById("termometer-indicator");
  var valoarea = input.value;
  if(valoarea >= -20 &&  valoarea <= 50 ){
    termometer.style.width =( valoarea *3 +60) +'px';
    if(valoarea < 0){
      termometer.style.background = "blue";
    }
  else if(valoarea > 0){
      termometer.style.background = "green";
    }
  }
  // * sa se gaseasca campul "temperature-input"
  // * sa se gaseasca div-ul "termometer-indicator"
  // * sa se citeasca valoarea temperaturii din input
  // * sa se verifice daca valoarea este cuprinsa intre -20..+50 grade C
  // * sa se atribuie proprietatea .style.height indicatorului termometrului astfel incat fiecare grad mareste latimea cu 3px
}
