import styled from "styled-components";

export const TilesWrapper = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  justify-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: 1fr;
  }
`;

export const Tile = styled.div`
  max-width: 592px;
  padding: 56px;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.sectionsBackground};
  border: 6px solid ${({ theme }) => theme.colors.tilesBorder};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.tilesBorderHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 24px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.blueElements};
  font-size: 24px;
  line-height: 29px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  margin: 24px 0;
  line-height: 140%;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: 16px;
    font-size: 14px;
  }
`;

export const LinkLine = styled.p`
  margin: 10px 0 0;
  line-height: 140%;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 14px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blueElements};
  border-bottom: 1px solid rgb(3, 102, 214, 0.2);

  &:hover {
    border-bottom: 1px solid rgb(3, 102, 214, 0.8);
  }
`;