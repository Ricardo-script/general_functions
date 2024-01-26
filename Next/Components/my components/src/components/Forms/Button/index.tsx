import { HTMLAttributes } from "react";
import { Container, Title, Spinner } from "./styes";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "contained" | "outlined";
    color?: "neutral" | "success" | "info" | "alert" | "danger";
    width?: number;
    iconRight?: JSX.Element;
    iconLeft?: JSX.Element;
    loading?: boolean;
} & HTMLAttributes<HTMLDivElement>;

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
 *
 * @returns {JSX.Element} O componente de botão.
 */

export const Button = ({
    children,
    variant = "contained",
    color = "success",
    width = 0,
    iconRight,
    iconLeft,
    loading,
    ...rest
}: ButtonProps): JSX.Element => {
    return (
        <Container $variant={variant} $color={color} $width={width} {...rest}>
            {iconLeft && iconLeft}
            <Title $variant={variant} $color={color}>
                {children}
            </Title>
            {iconRight && iconRight}
            {loading && <Spinner $variant={variant} $color={color} />}
        </Container>
    );
};
