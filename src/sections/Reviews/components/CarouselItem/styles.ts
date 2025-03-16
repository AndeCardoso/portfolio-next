import styled from "styled-components";
import { Text } from "@components/base/Text";
import { colors } from "@global/colors";

export const Container = styled.div`
  width: auto;
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
  height: 250px;
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
