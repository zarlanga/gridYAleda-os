var d = document.querySelector("body");
var cont =0;
d.innerHTML = createGrid(2) 


function createGrid(n) {
  var col = getRandomColor();
  var columnas = 1+ Math.floor(Math.random()*3);
  var rows = 1+ Math.floor(Math.random()*3);
  var style = createStyle(columnas)//"display:grid;grid-template-columns:1fr 1fr;margin:20px;"
  ret = `<div style="${style}"">`;
  
  for (let i=0; i<columnas*rows; i++){
    console.log("n"+n)
    if (n<=0)
      
    ret += `<div style="background-color:${col};padding:15px;"> ${++cont}</div>`
    else ret+= createGrid(n-1);
  }
  ret += "</div>"
  return ret;
}

function createStyle(c){
  var sty ="";
  sty += "display:grid;";
  sty += `background-color:${getRandomColor()};`;
  sty += "grid-gap:10px;"
  sty += `grid-template-columns: ${getRandomColumns(c)};`;
  sty += "margin:4px;"
  return sty;
}

function getRandomColumns(n) {
  var colu ="";
  for (let i = 0; i<n; i++){
    colu += Math.floor(Math.random()*4) +1 + "fr ";
  }
  return colu
}
function getRandomColor(){
  return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}
//d.style = "color:blue; background-color:pink";d.style = null;
//d.setAttribute("style", "color:red; padding:20px") ;