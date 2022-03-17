import styled from 'styled-components';

export const Card = styled.section`
  display: flex;
  border: 1px solid #ced4da;
  transition: 0.4s;
  border-radius: 5px;
  height: 20vh;
  width: 90%;
  padding: 16px 16px 4px 16px;

  cursor: pointer;

  p {
    color: #4b5259;
  }

  h3 {
    display: inline;
    color: green;
  }

  button {
    font-size: 1.2em;
  }

  &:hover {
    border: 1px solid gray;
    transition: 0.4s;
  }
`;
