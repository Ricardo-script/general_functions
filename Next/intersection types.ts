/*
	A extensão de tipos no TypeScript pode ser feita usando o & operador. Isso é chamado de tipos de interseção, 
	que podem ser usados ​​para combinar dois ou mais tipos diferentes.
*/

// ✔️ Using different types
type Fruit = {
    sweet: boolean
}

type Vegetable = {
    berry: boolean
}

type Tomato = Fruit & Vegetable

// ✔️ Using interfaces
interface Fruit {
  sweet: boolean
}

interface Vegetable {
  berry: boolean
}

type Tomato = Fruit & Vegetable;

// ❌ This is not valid
interface Tomato = Fruit & Vegetable

/* 
	O Tomatotipo agora conterá ambos os campos dos outros dois tipos. Você pode combinar quantos tipos forem necessários. 
	Essa sintaxe também pode ser usada com interfaces. No entanto, se você quiser definir seu tipo como uma interface, precisará usar a extendspalavra-chave.
*/

type Fruit = {
  sweet: boolean
}

interface Vegetable {
  berry: boolean
}

interface Tomato extends Fruit, Vegetable {
  
}

//************ obs: extends só pode ser usado com classes e interfaces