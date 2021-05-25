import styled from "styled-components";

export const DashboardHomeWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.whiteSecond};
`;

export const DashboardHomeHeader = styled.header`
  max-width: 100%;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.040);
`;