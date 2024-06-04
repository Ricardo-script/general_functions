'use client';

import { forwardRef, ForwardedRef, PropsWithChildren, FormHTMLAttributes } from 'react';
import { FormContent } from './styles';

type FormProps = {
	children: React.ReactNode;
	flexDirection?: 'column' | 'row';
	gap?: number;
	padding?: number;
	width?: number | string;
} & FormHTMLAttributes<HTMLFormElement>;

const FormComponent = (
	{
		children,
		flexDirection = 'column',
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
