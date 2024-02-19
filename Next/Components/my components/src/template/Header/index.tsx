import { Container, Title } from "./styles";

type HeaderProps = {
    title: string;
};

export const Header = ({ title }: HeaderProps): JSX.Element => {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    );
};
