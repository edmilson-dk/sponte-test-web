import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    padding: 0 10px;
  }

  @media screen and (min-width: 420px) {
    width: calc(100% - 60px);
  }
`;