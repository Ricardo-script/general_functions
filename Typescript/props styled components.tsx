import styled from 'styled-components';

interface ContainerProps {
    backgroundColor: string;
    hoverColor: string;
}

export const Container = styled.button<ContainerProps>`
    background: ${props => props.backgroundColor};
    width: 100%;
    display: flex;
`;