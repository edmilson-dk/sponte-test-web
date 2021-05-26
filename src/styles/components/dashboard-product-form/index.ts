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
  position: relative;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.060);

  > button#form-submit-button {
    position: absolute;
    top: -10px;
    right: -10px;
    padding: 10px 1rem;
    border-radius: ${({ theme }) => theme.utility.radius};
    background-color: ${({ theme }) => theme.colors.greenLight};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    font-size: 1.125rem;
  }

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