import { Container } from "./styles";

export const DotsAnimate = (): JSX.Element => {
    return (
        <Container>
            <div className="balls-loader">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>
    );
};
