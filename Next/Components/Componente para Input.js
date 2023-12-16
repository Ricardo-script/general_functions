import styled from 'styled-components';

const Input = styled.input`
  height: 32px;
  text-indent: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px #00000013, 0 0 8px #66AFE999;
  }
`;

const App = () => {
    return (
        <Input type="text" placeholder="Digite aqui" />
    );
};

export default App;

