// Crie uma pasta chamada themes 

    //1. crie um arquivo chamado theme.ts:


    export const theme = {
    colors: {
        white: '#FFF',
        }
    }


    //2. Dentro da pasta themes criar um arquivo de typescript chamado styled.d

    import { theme } from './theme';

    import 'styled-components/native';

    declare module 'styled-components/native' {
        type ThemeType = typeof theme;

        export interface DefaultTheme extends ThemeType { }
    }


    //3. No arquivo App.tsx

    import { NavigationContainer } from "@react-navigation/native";
    import { theme } from "src/themes/theme";
    import { ThemeProvider } from "styled-components/native";

    import Routes from "./src/routes";

    export default function App(): JSX.Element {
        return (
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <Routes />
                </NavigationContainer>
            </ThemeProvider>
        );
    }


    //4. modo de uso:

    import styled from "styled-components/native";

    export const Container = styled.View`
        flex: 1;
        color: ${props => props.theme.colors.white};
        background: ${({theme}) => theme.colors.white} // usando desestruturação
    `;



