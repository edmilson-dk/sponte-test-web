import { colorsSwitch } from "src/styles";
import styled from "styled-components";

type Props = {
  bgType: "deleted" | "created" | "updated";
}

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
    border: 5px solid ${({ bgType }) => colorsSwitch[bgType]};
    overflow: hidden;
    
    > span {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 40px;
      text-align: center;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.white};

      background-color: ${({ bgType }) => colorsSwitch[bgType]};
      opacity: 0.6;
    }
  }

  > article {    
    margin-left: 20px;

    > h3 {
      font-size: 22px;
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