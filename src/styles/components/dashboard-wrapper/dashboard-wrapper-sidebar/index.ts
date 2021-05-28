import styled from "styled-components";

export const DashboardWrapperSideBarWrapper = styled.aside`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.bgPrimary};

  > div {
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.bgSecond};

    > img {
      width: 100px;
    }

    @media screen and (max-width: 1020px) {
      > img {
        width: 80px;
      }
    }
  }

  > nav {
    align-self: flex-start;
    width: 100%;

    @media screen and (max-width: 1020px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;
    }

    @media screen and (max-width: 705px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 20px;

      > * {
        width: 100%;
        max-width: 390px;
      }
    }
  }
`;