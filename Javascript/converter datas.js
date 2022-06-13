	
	//data no formato: 2021-09-25T17:28:36.988Z
	
	const formataData = (data) => {
        const dataRecebida = data.substring(0,10);
        const dataFormatada = dataRecebida.split('-').reverse().join('/');
        return dataFormatada;
    }
	
	//resultado: 25/09/2021
	
	
	//==============================================================================
	/*var date = new Date(); 
    var hour = date.getHours(); 
    hour = (hour < 10 ? "0" : "") + (hour); 
    var min = date.getMinutes(); 
    min = (min < 10 ? "0" : "") + min; 
    var sec = date.getSeconds(); 
    sec = (sec < 10 ? "0" : "") + sec; 
    var year = date.getFullYear(); 
    var month = date.getMonth() + 1; 
    month = (month < 10 ? "0" : "") + month; 
    var day = date.getDate(); 
    day = (day < 10 ? "0" : "") + day;*/
	
	const handleLogs = () => {
    let dados = []
    logs.map(Logs => {
      //conversao de data/hora
        console.log("TESTE")
        console.log(Logs.data)
        var novaData = new Date(Logs.data)
        console.log(novaData)
        var hour = novaData.getHours();
        //hour = (hour < 10 ? "0" : "") + (hour);
       
        var min = novaData.getMinutes();
        //min = (min < 10 ? "0" : "") + min; 
       
        var sec = novaData.getSeconds();
        //sec = (sec < 10 ? "0" : "") + sec; 

        var day = novaData.getDay();        
        //day = (day < 10 ? "0" : "") + day;

        var month = novaData.getMonth()+1;
        
      //  month = (month < 10 ? "0" : "") + month;
        var year = novaData.getFullYear();


        console.log("DATA ID "+Logs._id)        
        Logs.data = day+'/'+month+'/'+year+' '+hour+':'+min+':'+sec
        console.log('data'+Logs.data)
        dados.push(Logs)
    })

//==============================================================================

/* Formato americano*/
let dateObj = new Date('02/03/2018 00:00:00')

let dateString = dateObj.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute:'2-digit',
    second:'2-digit'
}).replace(/\//g, '-')

console.log(dateString)

/* resultado: 02-03-2018, 12:00:00 AM */

//===================================================================

let UNIX = Date.now()

console.log('UnixTimeStamp: ', UNIX)
console.log('Unix String (UTC): ', new Date(UNIX))

function Format(timestamp, lang) {

   let dateObj = new Date(timestamp)
   
   return dateObj.toLocaleString(lang, {
       year: 'numeric',
       month: '2-digit',
       day: '2-digit',
       hour: '2-digit',
       minute:'2-digit',
       second:'2-digit'
   }).replace(/\//g, '-')
   
}

console.log('formato pt-BR: ', Format(UNIX, 'pt-BR'))
console.log('formato en-US: ', Format(UNIX, 'en-US'))
console.log('formato en-GB: ', Format(UNIX, 'en-GB'))

//=======================================================================
