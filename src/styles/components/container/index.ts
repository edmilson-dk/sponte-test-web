import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 720px) {
    max-width: 390px;
  }
  @media screen and (min-width: 720px) {
    width: calc(100% - 60px);
  }
`;