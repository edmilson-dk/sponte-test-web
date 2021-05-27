import styled from "styled-components";

export const TitlePrimary = styled.h1`
  font-size: 3.125rem;
  line-height: 1;
  font-weight: 700;
  text-align: left; 
  color: ${({ theme }) => theme.colors.blueDark};
  margin-bottom: 30px;

  @media screen and (max-width: 680px) {
    text-align: center;
  }
`;