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

    @media screen and (max-width: 680px) {
      grid-template-columns: minmax(300px, 390px);
      justify-content: center;
    }

    @media screen and (min-width: 680px) and (max-width: 890px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1020px) and (max-width: 1150px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;