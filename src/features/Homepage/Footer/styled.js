import styled from "styled-components";

export const LetsTalk = styled.p`
  margin-bottom: 24px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 12px;
  }
`;

export const Paragraph = styled.p`
  max-width: 600px;
  margin: 24px 0 48px;
  color: ${({ theme }) => theme.colors.secondFont};
  font-size: 18px;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 14px;
    margin: 12px 0 40px;
  }
`;

export const IconList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-right: 14px;
    }
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.secondFont};
  transition: color 0.2s linear;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.blueElements};
  }
`;

export const Email = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 18px;
  }
`;

export const styleLogo = Logo => styled(Logo)`
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 32px;
  }
`;