import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;

  h1 {
    font-size: 2em;
  }

  button {
    font-size: 1.1em;
  }
`;
