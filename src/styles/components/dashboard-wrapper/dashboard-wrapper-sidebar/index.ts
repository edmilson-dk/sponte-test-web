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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > img {
      width: 100px;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 1020px) {
      flex-direction: row;
      justify-content: space-between;

      > img {
        width: 80px;
      }
    }
  }

  > div div {
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > span svg {
      width: 30px;
      height: 30px;
      stroke: ${({ theme }) => theme.colors.gray500};
    }

    > span.active svg {
      stroke: ${({ theme }) => theme.colors.greenLight};
    }

    > button {
      width: 60px;
      margin: 0 20px;
      height: 25px;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.colors.bgSecond};
      position: relative;
      transition: all .5s linear;
    }

    > button.dark {
      background-color: ${({ theme }) => theme.colors.gray800};
    }

    > button.light::before {
      left: -10px;
    }

    > button.dark::before {
      right: -10px;
    }

    > button::before {
      content: "";
      position: absolute;
      transition: position .5s linear;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.colors.blueDark};
      top: -2.5px;
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