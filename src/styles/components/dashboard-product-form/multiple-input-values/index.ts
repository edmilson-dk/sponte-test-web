import styled from "styled-components";

export const ProductMultipleInputValuesWrapper = styled.div`
  width: 100%;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  > label {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray800};
    text-align: left;
  }

  > div input {
    width: calc(100% - 90px);
    height: 50px;
    padding: 0 1rem;
    border-radius: ${({ theme }) => theme.utility.radius};
    background-color: ${({ theme }) => theme.colors.whiteSecond};
    border: 1px solid ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.gray500};
    font-size: 1.125rem;
    font-weight: 400;
    box-shadow: 3px 3px 3px rgba(0,0,0,0.060);
  }

  > div button {
    width: 80px;
    height: 50px;
    font-size: 0;
    border-radius: ${({ theme }) => theme.utility.radius};
    background-color: ${({ theme }) => theme.colors.primary};

    > span svg {
      width: 30px;
      height: 30px;
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  > ul {
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 20px;
    padding: 1rem;

    border-radius: ${({ theme }) => theme.utility.radius};
    background-color: ${({ theme }) => theme.colors.whiteSecond};
  }

  > ul li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > ul li span {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray500};
    text-align: left;
  }

  > ul li button {
    background-color: transparent;
    
    &,
    > span svg {
      width: 24px;
      height: 24px;
      margin-left: 2px;
    }

    > span svg {
      stroke: ${({ theme }) => theme.colors.danger};
    }
  }
`;