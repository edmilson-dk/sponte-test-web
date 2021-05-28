import styled, { keyframes } from "styled-components";

const arrowAnimate = keyframes`
  0% {
    opacity: 0.4;
  }100% {
    opacity: 1;
  }
`;

export const DashboardHomeWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgSecond};

  span#arrow svg {
    width: 40px;
    height: 40px;
    float: right;
    margin-top: -20px;
    opacity: 0.4;
    transition: all .5s;
    animation: ${arrowAnimate} .8s linear infinite;
    stroke: ${({ theme }) => theme.colors.primary};
    display: none;

    @media screen and (max-width: 680px) {
      display: block;
    }
  }
`;

export const DashboardHomeHeader = styled.header`
  max-width: 100%;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.040);

  @media screen and (max-width: 680px) {
    overflow-x: auto;
  }
`;

export const DashboardHomeContent = styled.section`
  width: 100%;
  padding: 30px 0;

  > section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    
    @media screen and (max-width: 680px) {
      grid-template-columns: minmax(180px, 390px);
      justify-content: center;
    }

    @media screen and (min-width: 680px) and (max-width: 890px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen  and (min-width: 1020px) and (max-width: 1150px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;