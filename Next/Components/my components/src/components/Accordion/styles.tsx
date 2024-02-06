import styled from "styled-components";

type EnableAccordionProps = {
    $enable?: boolean;
};

type BodyCollapseProps = {
    $open: boolean;
};

export const Container = styled.div<EnableAccordionProps>`
    width: 100%;
    height: auto;
    background: #fff;
    border-radius: 15px;
    box-shadow: 1px 2px 4px 0px rgb(0 0 0 / 8%);
    overflow: hidden;
    pointer-events: ${(props) => (props.$enable ? "auto" : "none")};
    opacity: ${(props) => (props.$enable ? "1" : "0.5")};

    @media (max-width: 786px) {
        width: 95%;
        margin: 0 auto;
    }
`;

export const Summary = styled.div<EnableAccordionProps>`
    width: 100%;
    height: 50px;
    padding: 20px;
    display: flex;
    gap: 7px;
    align-items: center;
    border-bottom: 1px solid #ededed;
    cursor: pointer;
`;

export const Number = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #3f3f3f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 600;
    color: #efecec;
`;

export const Title = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #3f3f3f;
`;

export const BodyCollapse = styled.div<BodyCollapseProps>`
    width: 100%;
    max-height: ${(props) => (props.$open ? "700px" : "0")};
    overflow: hidden;
    transition: 0.7s ease;
`;
