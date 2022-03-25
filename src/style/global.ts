import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  button {
    padding: 4px 8px;
    margin: 4px 0;
    background-color: ${(props) => props.theme.colors.primary};
    size: 2rem; 
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;
  }

  button:hover {
    background-color: #ca2437;
    transition: 0.2s;
  }

  fieldset {
    padding: 8px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: fit-content;
    border-radius: 4px;
    border: 1px solid black;
  }

  form {
    margin: 8px;
    display: flex;
    width: fit-content;
  }

  label {
    color: rgb(48, 48, 48);
    margin: 8px 0 0 0;
  }

  input {
    padding: 2px 4px;
  }

  section {
    border: 1px solid black;
    width: fit-content;
    padding: 4px;
    margin: 2px;
    min-width: 20%;
  }

  header {
    display: flex;
    justify-content: space-between;
  }
`;
