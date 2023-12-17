import { Text } from "@/components/base/Text";
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

export const Description = styled.div`
  display: flex;
  align-items: start;
  gap: 8px;
`;
