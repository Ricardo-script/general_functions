import { HTMLAttributes } from "react";
import { Container, Title } from "./styes";

type ButtonProps = {
    children: React.ReactNode
    variant?: 'contained' | 'outlined'
    color?: 'neutral' | 'success' | 'info' | 'alert' | 'danger'
    width?: number
} & HTMLAttributes<HTMLDivElement>

export const Button = ({
    children,
    variant = 'contained',
    color = 'success',
    width = 0,
    ...rest
}: ButtonProps): JSX.Element => {
    return (
        <Container $variant={variant} $color={color} $width={width} {...rest}>
            <Title $variant={variant} $color={color}>{children}</Title>
        </Container>
    );
}