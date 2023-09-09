const feedbackTypes = {
    BUG:{
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

//Object.entries(feedbackTypes) => 

/**
 * [
 *  ['BUG', {...}],
 *  ['IDEA', {...}],
 *  ['OTHER', {...}]
 * 
 * ]
 */

<div>
    { Object.entries(feedbackTypes).map(([key, value]) => {
        return(
            <button>
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
            </button>
        )
    })}
</div>

//Utilizando Object.values retorna:

//Object.values(feedbackTypes)
/*
(3) [{…}, {…}, {…}]

	0:
		image: {source: 'teste', alt: 'Imagem de um inseto'}
		title: "Problema"
		[[Prototype]]: Object
	1:
		image: {source: 'teste', alt: 'Imagem de uma lampada'}
		title: "Ideia"
		[[Prototype]]: Object
	2:
		image: {source: 'teste', alt: 'Imagem de um balão de pensamento'}
		title: "Outro"
		[[Prototype]]: Object
	
length: 3
[[Prototype]]: Array(0)

*/


//Utilizando Object.keys
//Object.keys(feedbackTypes)
/*
	(3) ['BUG', 'IDEA', 'OTHER']
		0: "BUG"
		1: "IDEA"
		2: "OTHER"
		
	length: 3
	[[Prototype]]: Array(0)
*/



//-----------------------------------------------------------------------------------------------------------------------------

// outro exemplo: retornando: (2) ['carRight', Array(2)]
const saveData = () => {

	// data objeto recebe states arrays: 
	const data = {
		carRight,
		carTop,
		carLeft,
		carBottom,
		carTopToRight,
		carTopToLeft,
		carRightToBottom,
		carLeftToBottom,
		carLeftToTop,
		carRightToTop,
		carBottomToLeft,
		carBottomToRight,
		objSemaforo,
		objSemaforoLeft,
		objSemaforoRight,
		objBotoeira,
		objOcupacao,
		objDetector,
	}

	Object.entries(data).forEach((item, index) => {
		console.log(item);
	});
}

//----------------------------------------------------------------------------------------------------------------------------------

// outro exemplo: retornando somente o Array: (2) [{…}, {…}]

Object.values(dataObjects).forEach(item => { 
	console.log(item)
});


//---------------------------------------------------------------------------------------------------------------------------------

//exemplo: 
Object.values(dataObjects).forEach(item => {
	if(item.length > 0){
		item.forEach(item => {
			data.push(item)
		})
	}
});


//---------------------------------------------------------------------------------

const objeto = {
    'Registro de liberação de Termofusão': { cod_registro: '', revisao: '' },
    'Registro de liberação de Extrusão': { cod_registro: '', revisao: '' },
    'Registro de Solda por Termofusão': { cod_registro: '', revisao: '' },
    'Registro de Teste de Pressurização': { cod_registro: '', revisao: '' },
    'Registro de Reparos': { cod_registro: '', revisao: '' },
    'Registro de Ensaio destrutivo de Cunha': { cod_registro: '', revisao: '' },
    'Registro de Ensaio destrutivo de extrusão': { cod_registro: '', revisao: '' },
    'Registro de spark test /vacuo test': { cod_registro: '', revisao: '' },
    'Disposição de Geomenbrana': { cod_registro: '', revisao: '' },
    'Disposição de Geotextil': { cod_registro: '', revisao: '' },
    'Disposição de Geocelula': { cod_registro: '', revisao: '' },
    'Disposição Geocomposto': { cod_registro: '', revisao: '' },
    'Disposição de GCL': { cod_registro: '', revisao: '' },
    'Disposição de Greogrelha': { cod_registro: '', revisao: '' },
    'Relatorios de Qualidade': { cod_registro: '', revisao: '' },
    'Registro de Ensaio destrutivo de termofusão': { cod_registro: '', revisao: '' },
};

const arrayDeObjetos = Object.entries(objeto).map(([key, value]) => ({ nome: key, ...value }));
console.log(arrayDeObjetos);






