import styled from "styled-components";

export const DashboardWrapperSideBarWrapper = styled.aside`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 20px;

  background-color: ${({ theme }) => theme.colors.white};

  > nav {
    align-self: flex-start;
    width: 100%;
  }
`;