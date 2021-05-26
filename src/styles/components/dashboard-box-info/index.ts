import styled, { keyframes } from "styled-components";

import { colorsSwitch } from "src/styles";

type Props = {
  bgType: "deleted" | "created" | "updated";
}

const animate = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
`;

export const DashboardBoxInfoWrapper = styled.div<Props>`
  max-width: 100%;
  padding: 20px;
  border-radius: ${({ theme }) => theme.utility.radius};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 3px 3px 3px rgba(0,0,0,0.060);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  > div {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${({ bgType }) => colorsSwitch[bgType]};
    z-index: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    
    > span {
      width: 77px;
      height: 77px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9;

      font-size: 2.5rem;
      text-align: center;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.white};

      animation: ${animate} .6s ease-in-out;
      animation-direction: initial;
      background-color: ${({ bgType }) => colorsSwitch[bgType]};
      opacity: 0.6;
    }
  }

  > article {    
    margin-left: 20px;

    > h3 {
      font-size: 1.375rem;
      font-weight: 600;
      text-align: left;
      color: ${({ theme }) => theme.colors.gray500};
      margin-bottom: 10px;
    }

    > span {
      font-size: 1rem;
      font-weight: 500;
      text-align: left;
      color: ${({ theme }) => theme.colors.gray200};
    }
  }
`;