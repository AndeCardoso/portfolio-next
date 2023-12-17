import { Text } from "@/components/base/Text";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
`;

export const PeriodText = styled(Text)`
  transform: rotate(90deg);
  margin-left: -14px;
`;
