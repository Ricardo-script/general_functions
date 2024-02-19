"use client";

import styled from "styled-components";

export const Content = styled.main`
    width: 100%;
    background: #eeeded;
    display: flex;
    position: absolute;
    overflow: hidden;
`;

export const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const ScreenContent = styled.section`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    padding: 15px;
    background: #efefef;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;

        &-track-piece {
            background-color: #eee;
        }

        &-thumb:vertical,
        &-thumb:horizontal {
            background-color: #7a7878;
            border-radius: 5px;
        }

        &-thumb:vertical:hover,
        &-thumb:horizontal:hover {
            background-color: #717171;
        }
    }
`;

export const Screen = styled.div``;
