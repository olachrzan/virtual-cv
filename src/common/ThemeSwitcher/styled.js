import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const SwitcherArea = styled.button`
  position: absolute;
  right: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.mainFont};
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SwitcherText = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: none;
  }
`;

export const Switcher = styled.div`
  margin-left: 12px;
  width: 48px;
  height: 26px;
  background-color: ${({ theme }) => theme.colors.switcherBackground};
  border: 1px solid ${({ theme }) => theme.colors.mainFont};
  border-radius: 13px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 3px;
  background-color: ${({ theme }) => theme.colors.mainFont};
  border-radius: 50%;
  text-align: center;
  transition: transform 0.1s linear;

  ${({ darkMode }) => darkMode && css`
    transform: translate(20px);
  `}
`;

export const Sun = styled(SunIcon)`
  fill: ${({ theme }) => theme.colors.switcherIcon};
`;