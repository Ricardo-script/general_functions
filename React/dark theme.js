import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Definindo os temas
const lightTheme = {
  body: '#ffffff',
  text: '#333333',
  background: '#f0f0f0',
};

const darkTheme = {
  body: '#333333',
  text: '#ffffff',
  background: '#222222',
};

// Componentes estilizados
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;

