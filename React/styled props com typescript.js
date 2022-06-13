interface Props {
  onPress: any;
  src: any;
  width: string;
  height: string;
}

const Icon = styled.Image<Props>`
  width: ${p => p.width};
  height: ${p => p.height};
`;