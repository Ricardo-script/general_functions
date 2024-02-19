import styled from "styled-components";

export const AreaBreadCrumb = styled.ul`
    display: flex;
    gap: 3px;
    margin-bottom: 10px;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`;

export const Crumb = styled.li`
    font-weight: 400;
    font-size: 12px;
    line-height: 18.75px;
    list-style: none;
    color: #818181;
    user-select: none;
    cursor: pointer;

    &:hover {
        color: #1f2733;
        text-decoration: underline;
    }

    &:active {
        opacity: 0.5;
    }

    &.last-crumb {
        font-weight: 500;
        color: #1f2733;
    }

    @media (max-width: 900px) {
        font-size: 12px;
    }
`;
