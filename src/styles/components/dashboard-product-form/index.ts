import styled from "styled-components";

export const DashboardProductFormWrapper = styled.form`
  width: 100%;
  max-width: 740px;
  border-radius: ${({ theme }) => theme.utility.radius};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  > section {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 20px;
  }

  > section article {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  p {
    //margin-top: 10px;
    color: ${({ theme }) => theme.colors.danger};
  }
`;