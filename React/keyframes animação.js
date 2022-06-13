import styled, { keyframes } from "styled-components"

const animationName = keyframes`
  0% { color: transparent; }
  100% { color: radboats; }
`

const Div = styled.div`
  animation: ${animationName} 0.3s 0s both;
`