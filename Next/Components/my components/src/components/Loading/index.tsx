import { LottieCarrying, LottieDispatching } from "@/assets/lotties";

import { Container, Message } from "./styles";
import { DotsAnimate } from "./DotsAnimate";

type LoadingProps = {
    open: boolean;
    message?: string;
    Lottie?: JSX.Element;
};

export const Loading = ({
    open,
    message = "Aguarde Carregando",
}: LoadingProps): JSX.Element | null => {
    if (!open) {
        return null;
    }

    return (
        <Container>
            <LottieDispatching width={250} height={250} />
            <Message>
                {message}
                <DotsAnimate />
            </Message>
        </Container>
    );
};
