import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 88px;
  padding-bottom: 12px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.mineShaft};
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
`;

export const Text = styled.p`
  margin: 32px 0;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.mineShaft};
`;
