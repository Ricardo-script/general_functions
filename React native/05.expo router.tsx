## create app

npx create-expo-app

ou

npx create-expo-app --template
--choose a template: Navigation Typescript

//-------------------------------------------------------------------------------------------------------------
- Excluir a pasta app 
- Excluir de dentro da pasta assets a pasta fonts
- Excluir pasta components
- Excluir pasta constants
- Criar para src
- Ao criar a pasta src deve mudar o caminho da pasta dentro de tsconfig.json e na propriedade compilerOptions

"compilerOptions": {
     "strict": true,
      "paths": {
      "@/*": ["./src/*"]
    }
},

- criar dentro de src a pasta "app"
- criar um arquivo chamado '_layout.tsx' dentro de app que sera o ponto de entrada da aplicação:

import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";

export default function Layout() {
    return (
        <Provider>
            <Slot />
        </Provider>
    );
}

interface ProviderProps {
    children: React.ReactNode;
}

function Provider({ children }: ProviderProps) {
    return <SafeAreaView children={children} style={{ flex: 1 }} />;
}

//src/app/(app)/_layout.tsx: -----------------------------------------------------------------------------------------

import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function () {
    return (
        <Stack
            initialRouteName="index"
            screenOptions={{
                header: () => (
                    <View
                        style={{
                            backgroundColor: "orange",
                            width: "100%",
                            height: 75,
                            borderBottomEndRadius: 20,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: 15,
                        }}
                    >
                        <Text>Header customizado</Text>
                    </View>
                ),
            }}
        >
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="profile" options={{ title: "Perfil" }} />
        </Stack>
    );
}


//--------------------------------------------------------------------------------------------------------------

//src/app/(app)/index.tsx:

import { View } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: "#797373" }}>
            <Link href={"/user/Ricardo"}>Ir para Usuário</Link>
            <Link href={"/(tabs)/dashboard"}>Ir para dashboard</Link>
        </View>
    );
}


//-----------------------------------------------------------------------------------------------------------------

//src/app/(app)/Profile.tsx:

import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Profile(): JSX.Element {
    return (
        <View>
            <Text>Peril</Text>
            <Link href={"/"}>Home</Link>
        </View>
    );
}


//----------------------------------------------------------------------------------------------------------------

//Arquitetura de pastas

-src
  --(app)
  --(tabs)
  --(user)
  	--[id].tsx
  	--styles.tsx
  --_layout.tsx
 
 ----------------------------------------------------------------------------------------------------------------

//navegação com router:
import { router } from "expo-router";

export default function Index() {
    const signUp = () => {
        router.navigate("/sign-up");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={signUp}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

