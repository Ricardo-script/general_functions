export const TitleButton = styled.span`
    position: absolute;
    bottom: 12px;
    font-family: 'Roboto',sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #1e7441;
    width: 100%;
    display: block;
    text-align: center;
    z-index: 2;
    pointer-events: none;
`;

export const Footer = styled.div`
    animation: ${percent} 2s ease-out both;
    height: 45px;
    position: absolute;
    bottom: 0;
    background: #69e49b;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:active{
        bottom: -1px;
    }

    &:active + ${TitleButton} { // irmão adjacente
        bottom: 11px;
    }
`;