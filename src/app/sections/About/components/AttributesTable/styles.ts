import styled from "styled-components";
import { Text } from "@/components/base/Text";

export const Table = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

export const Row = styled.li`
  display: flex;
  width: 50%;
  margin: 4px 0;
`;

export const Key = styled(Text)`
  width: 90px;
`;

export const Value = styled(Text)`
  width: fit-content;
`;
