//src/test/index.ts:

export * from './test-utils';

//-----------------------------------------------------------------------------------------------
//src/test/test-utils.tsx

import { render, RenderOptions, RenderResult } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AllProviders } from 'src/context/CombineProviders';
import theme from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';

function AllProvider({ children }: { children: React.ReactNode }) {
	return (
		<MemoryRouter>
			<ThemeProvider theme={theme}>
				<AllProviders>{children}</AllProviders>
			</ThemeProvider>
		</MemoryRouter>
	);
}

function customRender(component: React.ReactNode, options?: RenderOptions): RenderResult {
	return render(component, { wrapper: AllProvider, ...options });
}

export * from '@testing-library/react';
export { customRender as render };

//-----------------------------------------------------------------------------------------------

//exemple test:

import { expect, describe, it, beforeEach, afterEach, vi } from 'vitest';
import { FormLogin } from '..';
import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from 'src/test';
import { VerificationCode } from 'src/templates/ContentModalForgot/VerificationCode';

describe('Login form', () => {
	it('should render the login form correctly', () => {
		render(<FormLogin />);
		expect(screen.getByLabelText(/usuário/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
		expect(screen.getByText(/entrar/i)).toBeInTheDocument();
		expect(screen.getByText(/esqueceu a senha/i)).toBeInTheDocument();
	});
});

describe('CodeVerification', () => {
	const mockSetCurrentIndex = vi.fn();
	beforeEach(() => {
		vi.useFakeTimers();
		mockSetCurrentIndex.mockClear();
		render(<VerificationCode />);
	});

	afterEach(() => {
		vi.runOnlyPendingTimers();
		vi.useRealTimers();
	});

	it('should render all code fields', () => {
		const inputs = screen.getAllByRole('spinbutton');
		expect(inputs).toHaveLength(5);
	});

	it('should automatically advance focus when typing', () => {
		const inputs = screen.getAllByRole('spinbutton');

		fireEvent.change(inputs[0], { target: { value: '1' } });
		expect(document.activeElement).toBe(inputs[1]);
	});
});
