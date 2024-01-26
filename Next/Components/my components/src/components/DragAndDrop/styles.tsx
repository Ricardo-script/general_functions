import styled from "styled-components";

type AreaIconProps = {
    $dragging: boolean;
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const AreaUpload = styled.div`
    width: 100%;
    height: 126px;
    border: 1px solid #ece4e6;
    background: #fff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: grab;
`;

export const InputFile = styled.input`
    display: none;
`;

export const AreaIcon = styled.div<AreaIconProps>`
    scale: ${(props) => (props.$dragging ? "1.5" : "1")};
    transition: 0.3s;
`;

export const AreaDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Line = styled.div``;

export const Bold = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #6941c6;
`;

export const Span = styled.span`
    font-size: 14px;
    color: #475467;
`;

export const SmallText = styled(Span)`
    font-size: 13px;
`;

export const ScrollView = styled.div`
    height: auto;
    max-height: 270px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;

        &-track-piece {
            background-color: #eee;
        }

        &-thumb:vertical,
        &-thumb:horizontal {
            background-color: #717171;
            border-radius: 5px;
        }

        &-thumb:vertical:hover,
        &-thumb:horizontal:hover {
            background-color: #717171;
        }
    }
`;

export const UploadList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
