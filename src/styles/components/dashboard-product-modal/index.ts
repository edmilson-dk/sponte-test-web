import styled from "styled-components";

type Props = {
  isSuccess: boolean;
}

export const DashboardProductModalWrapper = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;

  z-index: 9999;
  background-color: rgba(244, 244, 244, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DashboardProductModalContent = styled.div<Props>`
  width: 100%;
  max-width: 340px;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.utility.radius};
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 3px 3px rgba(0,0,0,0.040);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > button {
    width: 40px;
    height: 40px;
    font-size: 0;
    background-color: transparent;
    border-radius: 5px;
    position: absolute;
    top: 10px;
    right: 10px;
    
    &:hover,
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.gray200};
    }

    > span {
      width: 100%;
      height: 100%;

      > svg {
        stroke: ${({ theme }) => theme.colors.gray200};
      }
    }
  }

  > span {
    width: 160px;
    height: 160px;

    > svg {
      width: 160px;
      height: 160px;
    }
    margin: 20px 0;
  }

  > h3 {
    font-size: 1.5rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray500};
    margin-bottom: 20px;
  }

  > p {
    font-size: 1.125rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray200};
  }
`;