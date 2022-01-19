import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin: 72px 0;
  padding: 32px;
  background: ${({ theme }) => theme.colors.sectionsBackground};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 50px auto;
    padding: 16px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.secondFont};
  line-height: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 18px;
  }
`;

export const Icon = styled.img`
  height: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 16px;
  }
`;

export const Line = styled.hr`
  margin-bottom: 32px;
  background: rgba(209, 213, 218, 0.3);
  height: 1px;
  border: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 12px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 20px;
  list-style: none;
  line-height: 140%;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(2, 1fr);
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
    font-size: 14px;
  };

  ${({ longList }) => longList && css`
    max-height: 230px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
      max-height: 500px;
    };
  `};
`;

export const Item = styled.li`
  margin: 2px 0px;

  &:before {
    content: "•";
    font-size: 24px;
    padding-right: 16px;
    color: ${({ theme }) => theme.colors.blue};

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-size: 20px;
      padding-right: 8px;
    }
  }
`;