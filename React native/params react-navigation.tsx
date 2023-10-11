declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined
            Profile: undefined
            Details: {
                id: string
                //isLogging: boolean
            }
        }
    }
}


export default function Home() {
    const { navigate } = useNavigation();

    return (
        <View>
            <Button
                title='Perfil'
                onPress={() => {navigate('Profile')}}
            />
            <Button
                title='Detalhes'
                onPress={() => {navigate('Details', {id: '12345-asdsadw' })}} //abre e fecha chaves com propriedade e valor
            />
        </View>
    );
}


import { useRoute } from '@react-navigation/native'

type DetailsParamProps = { //criar tipagem para o parametro
    id: string
}

export default function Details(){

    const { id } = useRoute().params as DetailsParamProps //resgatando valor com a tipagem correta

    return(
        <View>
            <Text>Tela de detalhes</Text>
            <Text>ID: {id} </Text>
        </View>
    );
}


//-----  Outra maneira com typescript ----------------

type ChatProps = {
    route: {
        params: {
            data: {
                avatar: string;
                name: string
            }
        }
    }
}

function Chat({ route: { params } }: ChatProps) {

    const { data } = params


//-----------------------------------------------------------------------