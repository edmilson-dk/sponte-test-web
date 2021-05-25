import styled from "styled-components";

export const DashboarWrapperContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0;
`;

export const DashboarWrapperNavigator = styled.aside`
  width: 100%;
  max-width: 280px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const DashboarWrapperContent = styled.article`
  width: calc(100% - 280px);
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.whiteSecond};
`;