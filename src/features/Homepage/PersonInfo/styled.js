import styled from "styled-components";
import { ButtonLink } from "../ButtonLink/styled";
import { ReactComponent as Message } from "./message.svg";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  align-items: center;

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const Image = styled.img`
  max-width: 384px;
  width: 50vw;
  border-radius: 50%;

  @media (max-width: 481px) {
    grid-template-columns: 1fr;
  }
`;

export const ThisIs = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 130%;
`;

export const Name = styled.h1`
  margin: 12px 0;
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.colors.mineShaft};

  @media (max-width: 481px) {
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const Paragraph = styled.p`
  margin: 32px 0;
  font-size: 20px;
  line-height: 140%;

  @media (max-width: 481px) {
    font-size: 17px;
    margin: 16px 0 24px;
  }
`;

export const Button = styled(ButtonLink)`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Message)`
  margin-right: 16px;

  @media (max-width: 481px) {
    margin-right: 12px;
  }
`;