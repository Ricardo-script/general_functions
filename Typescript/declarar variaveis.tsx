
let numero: number;
let texto: string;
let status: boolean;

//Também podemos declarar e atribuir um valor:

let idade: number =  25;
let nome: string = 'TreinaWeb';
let statusPublicacao: boolean = true;

//----------------------------------------------------------------------------------

//Tipagem no TypeScript: arrays.

let carros: string[] = [];
carros.push('Gol');
carros.push('Fiesta');

//Ou podemos inicializar o array com os valores:

Copiar
let animais: string[] = ['Cachorro', 'Gato'];

//Array com mais de um tipo

let carros: (string | number)[] = ['Gol', 2014,'Fiesta', 2018];

let cursos: ('TreinaWeb' | number)[] = ['TreinaWeb', 2018];


//diferentes maneiras pelas quais você pode criar uma matriz de booleanos no texto datilografado:-------

let arr1: boolean[] = [];
let arr2: boolean[] = new Array();
let arr3: boolean[] = Array();

let arr4: Array<boolean> = [];
let arr5: Array<boolean> = new Array();
let arr6: Array<boolean> = Array();

let arr7 = [] as boolean[];
let arr8 = new Array() as Array<boolean>;
let arr9 = Array() as boolean[];

let arr10 = <boolean[]>[];
let arr11 = <Array<boolean>> new Array();
let arr12 = <boolean[]> Array();

let arr13 = new Array<boolean>();
let arr14 = Array<boolean>();

// ou fornecer os valores iniciais:
let arr1: boolean[] = [true, false];
let arr2: boolean[] = new Array(true, false);

//-----------------------------------------------------------------------------------------------------------

