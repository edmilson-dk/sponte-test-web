import styled from "styled-components";

export const DashboardProductInfosWrapper = styled.article`
  width: 100%;
  max-width: 720px;
  border-radius: ${({ theme }) => theme.utility.radius};
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  box-shadow: 3px 3px 3px rgba(0,0,0,0.060);
  padding: 20px;
  margin: 40px auto;

  > header {
    width: 100%;
    margin-bottom: 30px;

    > img {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.utility.radius};
    }
  }

  > article {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  > article p#view-product-category {
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
`;