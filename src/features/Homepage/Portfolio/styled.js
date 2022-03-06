import styled from "styled-components";
import { ReactComponent as GithubLogo } from "./github_blue.svg";

export const Wrapper = styled.section`
  margin-bottom: 140px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 48px;
  }
`;

export const Logo = styled(GithubLogo)`
  width: 48px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 32px;
    height: 32px;
  }
`;

export const Title = styled.h2`
  margin: 12px 0 8px;
  color: ${({ theme }) => theme.colors.secondFont};
  font-size: 30px;
  font-weight: 900;
  line-height: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 0;
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.secondFont};
  font-size: 20px;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 17px;
  }
`;