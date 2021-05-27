import styled from "styled-components";

export const DashboardProductsWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.whiteSecond};
`;

export const DashboardProductsContent = styled.section`
  width: 100%;
  padding: 30px 0;

  > section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
`;