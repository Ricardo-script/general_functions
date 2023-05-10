'use client'

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&family=Roboto:wght@100;300;400;500;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, input, textarea, select, button{
        font: 400 1rem sans-serif;
    }

    @media (max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }
`;

//-------------------------------------------------------------------------------------------------
//dentro de layout.tsx:

'use client';
import StyledComponentsRegistry from '../lib/registry';
import GlobalStyles from '@/styles/GlobalStyles';
import { AllProviders } from '@/context/Providers';

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html lang="pt-br">
			<body>
				<AllProviders>
					<StyledComponentsRegistry>
						<GlobalStyles /> // GlobalStyles deve estar dentro de StyledComponentsRegistry
						{children}
					</StyledComponentsRegistry>
				</AllProviders>
			</body>
		</html>
	);
}

