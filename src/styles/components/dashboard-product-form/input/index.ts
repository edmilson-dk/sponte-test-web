import styled from "styled-components";

export const ProductInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  > label {
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray800};
    text-align: left;
    margin-bottom: 10px;
  }

  > input {
    height: 50px;
    padding: 0 1rem;
    width: 100%;

    border-radius: ${({ theme }) => theme.utility.radius};
    background-color: ${({ theme }) => theme.colors.whiteSecond};

    color: ${({ theme }) => theme.colors.gray500};
    font-size: 18px;
    font-weight: 400;
    box-shadow: 3px 3px 3px rgba(0,0,0,0.060);
  }

  > textarea {
    height: 100px;
    width: 100%;
    max-height: 300px;
    resize: vertical;
    padding: 1rem;

    border: none;
    border-radius: ${({ theme }) => theme.utility.radius};
    background-color: ${({ theme }) => theme.colors.whiteSecond};

    color: ${({ theme }) => theme.colors.gray500};
    font-size: 18px;
    font-weight: 500;
    box-shadow: 3px 3px 3px rgba(0,0,0,0.060);
  }
`;