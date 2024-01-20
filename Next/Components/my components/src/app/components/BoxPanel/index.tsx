import { Container, Title, ScrollView } from "./styles";

type BoxPanelProps = {
    title: string
    children: React.ReactNode
}

export const BoxPanel = ({ title, children }: BoxPanelProps): JSX.Element => {
    return (
        <Container>
            <Title>{title}</Title>
            <ScrollView>
                {children}
            </ScrollView>
        </Container>
    );
}