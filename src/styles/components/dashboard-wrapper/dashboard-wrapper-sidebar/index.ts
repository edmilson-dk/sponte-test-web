import styled from "styled-components";

export const DashboardWrapperSideBarWrapper = styled.aside`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.white};

  > div {
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.whiteSecond};

    > img {
      width: 100px;
    }
  }

  > nav {
    align-self: flex-start;
    width: 100%;
  }
`;