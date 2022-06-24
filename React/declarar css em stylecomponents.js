import styled, { css } from "styled-components"

const StyledGlide = styled(Glide)`
    ${ifProp(
        "isOpen",
        css`
            animation: 0.8s ${slideInRightAnimation};
        `,
        css`
            animation: 0.9s ${fadeOutLeftAnimation} forwards;
        `
    )}