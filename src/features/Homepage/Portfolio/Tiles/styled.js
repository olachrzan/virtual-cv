import styled from "styled-components";

export const TilesWrapper = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
`;

export const Tile = styled.div`
  max-width: 592px;
  padding: 56px;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.white};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;

  &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
  }
`;

export const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.lightModeBlue};
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
`;

export const Description = styled.p`
  margin: 24px 0;
  line-height: 140%;
  letter-spacing: 0.05em;
`;

export const LinkLine = styled.p`
  margin: 8px 0 0;
  line-height: 140%;
  letter-spacing: 0.05em;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.lightModeBlue};
  border-bottom: 1px solid rgb(3, 102, 214, 0.2);

  &:hover {
    border-bottom: 1px solid rgb(3, 102, 214, 0.8);
  }
`;