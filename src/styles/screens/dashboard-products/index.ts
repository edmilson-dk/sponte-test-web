import styled from "styled-components";

export const DashboardProductsWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgSecond};
`;

export const DashboardProductsContent = styled.section`
  width: 100%;
  padding: 30px 0;

  > header#header-search {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media screen and (max-width: 680px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      > div {
        margin-top: 30px;
      }
    }

    @media screen and (min-width: 680px) and (max-width: 910px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      > div {
        margin-top: 30px;
      }
    }

    > h1 {
      margin-bottom: 0;
    }

    > div {
      display: flex;
      width: 100%;
      max-width: 300px;
    }

    > div input {
      width: calc(100% - 50px);
      height: 40px;
      padding: 0 1rem;
      border-radius: 10px 0 0 10px;
      background-color: ${({ theme }) => theme.colors.bgSecond};
      border-top: 1px solid ${({ theme }) => theme.colors.primary};
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
      border-left: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.gray500};
      font-size: 1.125rem;
      font-weight: 400;
    }

    > div button {
      width: 50px;
      height: 40px;
      border-radius: 0 10px 10px 0;
      font-size: 0;
      background-color: ${({ theme }) => theme.colors.primary};

      > span svg {
        width: 30px;
        height: 30px;
        stroke: ${({ theme }) => theme.colors.white};
      }
    }
  }

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