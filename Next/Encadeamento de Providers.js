//Create context:

'use client'

type ContextSideBarTypes = {
	openMenu?: boolean;
	setOpenMenu: (newState: boolean) => void;
};

import { createContext, useState, PropsWithChildren } from 'react';
import { ContextSideBarTypes } from '@/types';

export const GlobalSideBar = createContext({} as ContextSideBarTypes);

export default function GlobalSideBarProvider(props: PropsWithChildren): JSX.Element {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<GlobalSideBar.Provider value={{ openMenu, setOpenMenu }}>
			{props.children}
		</GlobalSideBar.Provider>
	);
}


//-----------------------------------------------------------------------------------------------------------------
// combine providers

import { FunctionComponent, ReactNode } from 'react';
import GlobalSideBarProvider from './GlobalSideBarProvider';

type PropsProvider = {
	children: ReactNode;
};

type ProviderType = FunctionComponent<PropsProvider>;

const composeProviders = (...providers: ProviderType[]) => ({ children }: PropsProvider): JSX.Element =>
	providers.reduceRight(
		(children, Provider) => <Provider>{children}</Provider>,
		<>{children}</>
	);

export const AllProviders = composeProviders(GlobalSideBarProvider);

//----------------------------------------------------------------------------------------------------------------
// layout.tsx

'use client';
import StyledComponentsRegistry from '../lib/registry';
import GlobalStyles from '@/styles/GlobalStyles';
import { AllProviders } from '@/context/Providers';

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html lang="pt-br">
			<body>
				<AllProviders>
					<GlobalStyles />
					<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				</AllProviders>
			</body>
		</html>
	);
}
