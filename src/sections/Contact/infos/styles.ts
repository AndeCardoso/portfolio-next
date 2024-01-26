import { Text } from "@components/base/Text";
import { colors } from "@global/colors";
import styled from "styled-components";

export const Container = styled.div`
  min-width: 40%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 32px;
  border: 1px solid ${colors.PRIMARY};
  border-radius: 8px;
  gap: 24px;
`;

export const Header = styled.div``;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  gap: 12px;
`;

export const Row = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const Key = styled(Text)``;

export const Value = styled(Text)`
  word-break: break-word;
`;
