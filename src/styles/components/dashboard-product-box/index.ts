import styled from "styled-components";

export const DashboardProductBoxWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: ${({ theme }) => theme.utility.radius};
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  box-shadow: 3px 3px 3px rgba(0,0,0,0.060);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > div {
    margin-bottom: 15px;
  }

  > div img {
    width: 100%;
    max-height: 180px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.utility.radius};
  }

  > article {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  > article p#product-category {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;

    > span {
      padding: 5px;
      border-radius: ${({ theme }) => theme.utility.radius};
      background-color: ${({ theme }) => theme.colors.gray200};
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  > article p {
    > strong {
      font-size: 18px;
      font-weight: 500;
      text-align: left;
      color: ${({ theme }) => theme.colors.gray800};
    }

    > span {
      margin-left: 10px;
      font-size: 1rem;
      font-weight: 400;
      text-align: left;
      color: ${({ theme }) => theme.colors.gray500};
    }
  }

  article p + p {
    margin-top: 10px;
  }

  > footer {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin-top: 30px;

    > button {
      border-radius: ${({ theme }) => theme.utility.radius};
      height: 50px;
      opacity: 0.8;
      font-size: 0;

      &:hover {
        opacity: 1;
      }
    }

    > button span svg {
      width: 30px;
      height: 30px;
      stroke: ${({ theme }) => theme.colors.white};
    }

    button#view-product {
      background-color: ${({ theme }) => theme.colors.primary};
    }

    button#update-product {
      background-color: ${({ theme }) => theme.colors.greenDark};
    }

    button#delete-product {
      background-color: ${({ theme }) => theme.colors.danger};
    }
  }
`;