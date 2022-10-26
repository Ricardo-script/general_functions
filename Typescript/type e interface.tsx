/* 
type: geralmente usado em props
interface: geralmente usando com retornos de API
*/

//type

type TypeProps = {
	text: string;
}

const Title = ({text} : TypeProps) => {
	return <h1>{text}</h1>;
}



//---------------------------------------------------------------------


//interface

interface PersonalInfos {
  name: string;
  age: number;
  hobbies: Array<string>;
}