/* 
type: geralmente usado em props, (styles)
interface: geralmente usando com retornos de API
*/

//type possui o igual " = " e abre e fecha chaves " { } "

type TypeProps = {
	text: string;
}

const Title = ({text} : TypeProps) => {
	return <h1>{text}</h1>;
}

// style components
type ModalStatus = {
    view: string;
    visible: boolean;
};

export const ContentModal = styled.div<ModalStatus>`
    margin: 0 auto;
    display: ${props => props.visible == true ? 'block' : 'none'};
`;

//----------------------------------------------------------------------------------------------

//interface
//geralmente usando com retornos de API

interface PersonalInfos {
  name: string;
  age: number;
  hobbies: Array<string>;
}