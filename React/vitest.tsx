//Vitest + React Testing Library
//Additional dependencies

yarn add -D @testing-library/dom @testing-library/jest-dom @testing-library/react jsdom vitest 




//vitest.config.js
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest-setup.js",
  },
});




//vitest-setup.js
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

afterEach(() => {
    cleanup();
})

//package.json:

"scripts": {
	"test": "vitest"
},

//----------------------------------------------------------------------------------------------------------------------------------------
// Criar encapsulamento de providers
// criar pasta test em src:

//src/test/index.tsx:
export * from './test-utils';



//src/test/test-utils.tsx:
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import theme from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';

function AllProvider({ children }: { children: React.ReactNode }) {
	return (
		<MemoryRouter>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</MemoryRouter>
	);
}

function customRender(component: React.ReactNode, options?: RenderOptions): RenderResult {
	return render(component, { wrapper: AllProvider, ...options });
}

export * from '@testing-library/react';
export { customRender as render };

//uso:

import { expect, describe, it } from 'vitest';
import { FormLogin } from '..';
import '@testing-library/jest-dom/vitest';
import { render, screen } from 'src/test';

describe('Login form', () => {
	it('should render the login form correctly', () => {
		render(<FormLogin />); // -- customRender
		expect(screen.getByLabelText(/usuário/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
		expect(screen.getByText(/entrar/i)).toBeInTheDocument();
		expect(screen.getByText(/esqueceu a senha/i)).toBeInTheDocument();
	});
});



