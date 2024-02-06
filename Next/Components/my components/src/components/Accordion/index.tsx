"use client";

import { Container, Summary, Number, Title, BodyCollapse } from "./styles";

type AccordionProps = {
    children: React.ReactNode;
    number?: string | number;
    title: string;
    isOpen: boolean;
    enable?: boolean;
    onCollapse?: () => void;
};

export const Accordion = ({
    children,
    number = 1,
    title,
    isOpen,
    enable,
    onCollapse,
}: AccordionProps): JSX.Element => {
    return (
        <Container $enable={enable}>
            <Summary onClick={onCollapse} $enable={enable}>
                <Number>{number}</Number>
                <Title>{title}</Title>
            </Summary>
            <BodyCollapse $open={isOpen}>{children}</BodyCollapse>
        </Container>
    );
};
