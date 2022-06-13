
// javascript
function toggle(){
  document.getElementById("el").classList.toggle('selected')
}


//css
p.selected {
  color: blue;
}

p:not(.selected){
  color: red;
}


//html
<p id="el">Lorem ipsum</p>
<button onClick="toggle()">Toggle</button>