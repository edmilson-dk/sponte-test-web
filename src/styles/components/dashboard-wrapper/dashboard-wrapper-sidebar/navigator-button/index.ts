import styled from "styled-components";

type NavigatorButtonWrapperProps = {
  isActive: boolean;
}

export const NavigatorButtonWrapper = styled.button<NavigatorButtonWrapperProps>`
  width: 100%;
  height: 50px;
  padding: 10px 1rem;
  border-radius: ${({ theme }) => theme.utility.radius};
  background-color: ${({ isActive, theme }) => isActive ? theme.colors.primary : theme.colors.whiteSecond};
  font-size: 0;
  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.060);
  
  &:hover {
    box-shadow: 0 0 3px 4px rgba(244, 244, 244, 0.9);
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 30px;

  > strong {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${({ isActive, theme }) => isActive ? theme.colors.white : theme.colors.blueDark};
    text-align: left;
    margin-right: 10px;
  }

  > span svg {
    width: 30px;
    height: 30px;
    stroke: ${({ isActive, theme }) => isActive ? theme.colors.white : theme.colors.blueDark};
  }
`;