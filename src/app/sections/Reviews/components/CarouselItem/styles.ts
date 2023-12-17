import { Text } from "@/components/base/Text";
import { colors } from "@/global/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 360px;
  gap: 32px;
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
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.PRIMARY};
    border-radius: 50px;
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: start;
  gap: 8px;
`;
