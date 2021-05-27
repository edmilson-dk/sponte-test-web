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
  min-width: 180px;
  padding: 20px;
  border-radius: ${({ theme }) => theme.utility.radius};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 3px 3px 3px rgba(0,0,0,0.060);

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1260px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      margin-bottom: 10px;
    }
  }

  > div {
    width: auto;
    height: auto;
    border-radius: 50%;
    background-color: ${({ bgType }) => colorsSwitch[bgType]};
    z-index: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${animate} .6s ease-in-out;
    animation-direction: initial;
    
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
      background-color: ${({ bgType }) => colorsSwitch[bgType]};
      opacity: 0.6;
    }

    @media screen and (max-width: 760px) { 
      width: 70px;
      height: 70px;

      > span {
        width: 67px;
        height: 67px;
        font-size: 2.1875rem;
      }
    }
  }

  > article {    
    margin-left: 20px;

    > h3 {
      font-size: 1.375rem;
      font-weight: 600;
      text-align: left;
      color: ${({ theme }) => theme.colors.gray500};
      margin-bottom: 5px;
    }

    > span {
      font-size: 1rem;
      font-weight: 500;
      text-align: left;
      color: ${({ theme }) => theme.colors.gray200};
    }

    @media screen and (max-width: 760px) {
      > h3 {
        font-size: 1.125rem;
      }
    }
  }
`;