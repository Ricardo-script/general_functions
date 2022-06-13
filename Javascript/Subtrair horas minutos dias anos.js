Date.prototype.addHours = function (value) {
    this.setHours(this.getHours() + value);
  }
  
  var data = new Date();
  console.log(data);
  
  data.addHours(-30);
  console.log(data);


  // ou:

var time = new Date('2014-03-14T23:54:00');
var outraData = new Date();
outraData.setHours(time.getHours() + 2); // Adiciona 2 horas




// Horas/ minutos/ segundos/ dias / meses / anos

Date.prototype.addHoras = function(horas){
    this.setHours(this.getHours() + horas)
};
Date.prototype.addMinutos = function(minutos){
    this.setMinutes(this.getMinutes() + minutos)
};
Date.prototype.addSegundos = function(segundos){
    this.setSeconds(this.getSeconds() + segundos)
};
Date.prototype.addDias = function(dias){
    this.setDate(this.getDate() + dias)
};
Date.prototype.addMeses = function(meses){
    this.setMonth(this.getMonth() + meses)
};
Date.prototype.addAnos = function(anos){
    this.setYear(this.getFullYear() + anos)
};