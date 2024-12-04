import { ButtonHTMLAttributes } from 'react';
import { Container, Title, Spinner } from './styes';

type ButtonProps = {
	children: React.ReactNode;
	variant?: 'contained' | 'outlined';
	color?: 'neutral' | 'success' | 'info' | 'alert' | 'danger';
	width?: number;
	height?: number;
	iconRight?: JSX.Element;
	iconLeft?: JSX.Element;
	loading?: boolean;
	enabled?: boolean;
	fontSize?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Botão personalizado com suporte a ícones, loading e várias opções de estilo.
 *
 * @component
 *
 * @param {Object} props - Propriedades do botão.
 * @param {React.ReactNode} props.children - Conteúdo do botão.
 * @param {"contained" | "outlined"} [props.variant="contained"] - Estilo do botão (contido ou delineado).
 * @param {"neutral" | "success" | "info" | "alert" | "danger"} [props.color="success"] - Cor do botão.
 * @param {number} [props.width=0] - Largura do botão.
 * @param {JSX.Element} [props.iconRight] - Ícone à direita do texto do botão.
 * @param {JSX.Element} [props.iconLeft] - Ícone à esquerda do texto do botão.
 * @param {boolean} [props.loading=false] - Insere um spinner de carregando durante o loading.
 *  @param {boolean} [props.background='#040404'] - Caso queira um background estilizavel
 *
 * @returns {JSX.Element} O componente de botão.
 */

export const Button = ({
	children,
	variant = 'contained',
	color = 'success',
	width = 0,
	height = 0,
	iconRight,
	iconLeft,
	loading,
	enabled = true,
	fontSize = 14,
	...rest
}: ButtonProps): JSX.Element => {
	return (
		<Container
			as="button"
			type={rest.type || 'button'}
			$variant={variant}
			$color={color}
			$width={width}
			$height={height}
			{...rest}
			$enabled={enabled}
		>
			{iconLeft && iconLeft}
			<Title $variant={variant} $color={color} $fontSize={fontSize}>
				{children}
			</Title>
			{iconRight && iconRight}
			{loading && <Spinner $variant={variant} $color={color} />}
		</Container>
	);
};
