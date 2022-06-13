 
 const avancar = () => {
    const img01 = document.getElementById('slide1');
    const img02 = document.getElementById('slide2');
    const img03 = document.getElementById('slide3');

    if(img01.checked){
        img02.checked = true;
        return;
    }
    if(img02.checked){
        img03.checked = true;
        return;
    }
    if(img03.checked){
        img01.checked = true;
        return;
    }
 }

 const voltar = () => {
    const img01 = document.getElementById('slide1');
    const img02 = document.getElementById('slide2');
    const img03 = document.getElementById('slide3');

    if(img03.checked){
        img02.checked = true;
        return;
    }
    if(img02.checked){
        img01.checked = true;
        return;
    }
    if(img01.checked){
        img03.checked = true;
        return;
    }
 }
 
 
 /*i = 0 ;

const avancar = () => {
    let img01 = document.getElementById('slide1');
    let img02 = document.getElementById('slide2');
    let img03 = document.getElementById('slide3');
    
    
    i++;
    console.log(i);
    switch (i) {
        case 1:
            img02.checked = true;
            
            break;
        case 2:
            img03.checked = true;
            
            break;
        case 3:
            img01.checked = true;
            
            break;
        default:
            break;
    }
    if (i >= 3) {
        i = 0;
    }

}

const voltar = () => {
    i--;    
    let img01 = document.getElementById('slide1');
    let img02 = document.getElementById('slide2');
    let img03 = document.getElementById('slide3');
    
    console.log(i);
    
    switch (i) {
        case -1:
            img02.checked = true;
            break;
        case -2:
            img03.checked = true;
            break;
        case -3:
            img01.checked = true;
            
            break;
        default:
            break;
    }

   if(i <= -3 ){
         i = 0;
   }

}*/