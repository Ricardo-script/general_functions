import { Container, AreaValues, Title, Value, AreaIcon, Icon } from "./styles";

type CardProps = {
    title: string;
    value: string | number;
    icon: JSX.Element;
};

/**
 *
 * @param title
 * @returns Título do card
 * @param value
 * @return Valor que será apresentado no card
 * @param icon
 * @return insere um icone com o type JSX.Element
 */
export const Card = ({ title, value, icon }: CardProps): JSX.Element => {
    return (
        <Container>
            <AreaValues>
                <Title>{title}</Title>
                <Value>{value}</Value>
            </AreaValues>
            <AreaIcon>
                <Icon>{icon}</Icon>
            </AreaIcon>
        </Container>
    );
};
