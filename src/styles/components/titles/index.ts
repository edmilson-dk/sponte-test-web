import styled from "styled-components";

export const TitlePrimary = styled.h1`
  font-size: 3.125rem;
  font-weight: 700;
  text-align: left; 
  color: ${({ theme }) => theme.colors.blueDark};
  margin-bottom: 30px;
`;