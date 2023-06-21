import { Dimensions } from "react-native";
import { styled } from "styled-components/native";

const { width } = Dimensions.get("window");

export const OptionIcon = styled.View`
    height: ${width * 0.18};
    width: ${width * 0.18};
    background-color: #E6E6E6;
    border-radius: 99px;
    align-items: center;
    justify-content: center;
`;