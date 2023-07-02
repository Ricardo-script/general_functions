<TextInput multiline style={{
  width: "100%",
  height: 90,
  color: "#FFF",
  textAlignVertical: "top",
  borderWidth: 1
}}/>


// com styled-components:

export const Input = styled.TextInput.attrs({
   textAlignVertical: 'top',
   multiline: true
})`
   border: 1px solid red;
   width: 100%;
   height:90px;
`;

<Input  />