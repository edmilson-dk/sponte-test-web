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

  > input,
  > textarea {
    width: 100%;
    border-radius: ${({ theme }) => theme.utility.radius};
    background-color: ${({ theme }) => theme.colors.whiteSecond};
    border: 1px solid ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.gray500};
    font-size: 18px;
    font-weight: 400;
    box-shadow: 3px 3px 3px rgba(0,0,0,0.060);

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      border-width: 2px;
    }
  }

  > input {
    height: 50px;
    padding: 0 1rem;
  }

  > textarea {
    height: 100px;
    max-height: 300px;
    resize: vertical;
    padding: 1rem;
  }
`;