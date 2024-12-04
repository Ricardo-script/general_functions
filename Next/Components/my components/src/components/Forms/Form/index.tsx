'use client';

import { forwardRef, ForwardedRef, PropsWithChildren, FormHTMLAttributes } from 'react';
import { FormContent } from './styles';

type FormProps = {
	children: React.ReactNode;
	flexDirection?: 'column' | 'row';
	alignItems?: 'center' | 'flex-end' | 'flex-start';
	gap?: number;
	padding?: number;
	width?: number | string;
} & FormHTMLAttributes<HTMLFormElement>;

const FormComponent = (
	{
		children,
		flexDirection = 'column',
		alignItems = 'flex-start',
		gap = 15,
		padding = 0,
		width = 0,
		...restProps
	}: PropsWithChildren<FormProps>,
	ref: ForwardedRef<HTMLFormElement>,
): JSX.Element => {
	return (
		<FormContent
			$flexDirection={flexDirection}
			$alignItems={alignItems}
			$gap={gap}
			$padding={padding}
			$width={width}
			{...restProps}
			ref={ref}
		>
			{children}
		</FormContent>
	);
};

export type { FormProps };

export const Form = forwardRef<HTMLFormElement, PropsWithChildren<FormProps>>(FormComponent);
