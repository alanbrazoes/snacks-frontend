import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 2px 16px;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

export const FieldSet = styled.fieldset`
  display: inline;

  padding: 2px 16px;

  legend {
    text-align: center;
  }
`;
