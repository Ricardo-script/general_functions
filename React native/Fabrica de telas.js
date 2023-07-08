// generator/FormComponents.ts: Crie os components

import { ButtonSend, Input } from "../components/Forms";

export const FormComponents = {
    input: Input,
    button: ButtonSend
}


//-------------------------------------------------------------------------------------------------

// generator/constructor.ts: criar objeto para construção da tela, nesse exemplo: home, cadastro

export const GENERATOR_SCREENS = {
    home: {
        contents: [
            { type: 'input', label: 'Nome' },
            { type: 'input', label: 'E-mail', placeholder: 'nome@email.com' },
            { type: 'button', title: 'Enviar' }
        ]
    },
    cadastro:{
        ...
    }
}

//----------------------------------------------------------------------------------------------------------------------------

//generator/index.ts: arquivo para exportar todos de uma vez

export { GENERATOR_SCREENS as screens } from './constructor'
export { FormComponents } from './FormComponents'

//----------------------------------------------------------------------------------------------------------------------------

//src/screens/Home.tsx:

import { Container } from './styles'
import { Form } from '../../components/Forms'
import { FormComponents, screens } from '../../generator'

type ComponentsTypes = keyof typeof FormComponents 

export default function Home(): JSX.Element {
    return (
        <Container>
            <Form>
                {
                    screens.home.contents.map((screen, index) => {
                        const Component = FormComponents[screen.type as ComponentsTypes] //FormComponent[input] / [button]
                        return <Component key={index} {...screen} />
                    })
                }
            </Form>
        </Container>
    );
}




