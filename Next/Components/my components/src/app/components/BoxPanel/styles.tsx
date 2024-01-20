'use client'

import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: auto;
    background: #FFF;
    border-radius: 15px;
    padding: 17px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Title = styled.span`
    font-family: 'Inter', sans-serif;
    color: #2D3748;
    font-size: 15px;
    font-weight: 600;
`;

export const ScrollView = styled.div`
    overflow: auto;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;

        &-track-piece {
            background-color: #EEE;
        }

        &-thumb:vertical,
        &-thumb:horizontal {
            background-color: #717171;
            border-radius:5px;
        }

        &-thumb:vertical:hover,
        &-thumb:horizontal:hover {
            background-color: #717171;
        }
    }
`;