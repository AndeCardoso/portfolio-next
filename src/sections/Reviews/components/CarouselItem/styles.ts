import { Text } from "@components/base/Text";
import { colors } from "@src/global/colors";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 360px;

  @media screen and (max-width: 1665px) {
    max-width: 520px;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-right: 32px;
`;

export const Author = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
`;

export const Quotation = styled(Text)`
  margin-top: -10px;
`;

export const QuoteText = styled(Text)`
  height: 150px;
  overflow-y: scroll;
  padding-right: 16px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.PRIMARY};
    border-radius: 50px;
  }
`;

export const QuoteContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 8px;
`;
