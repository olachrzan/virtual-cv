import styled from "styled-components";
import { ReactComponent as Github } from "./logos/githubBlack.svg";
import { ReactComponent as LinkedIn } from "./logos/linkedInBlack.svg";
import { ReactComponent as Facebook } from "./logos/facebookBlack.svg";

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

export const Icons = styled.div`
  display: flex;
`;

export const Link = styled.a`
  margin-right: 24px;
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

export const GithubLogo = styled(Github)`
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 32px;
    height: 32px;
  }
`;

export const LinkedInLogo = styled(LinkedIn)`
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 32px;
    height: 32px;
  }
`;

export const FacebookLogo = styled(Facebook)`
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 32px;
    height: 32px;
  }
`;