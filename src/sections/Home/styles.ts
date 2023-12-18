import { colors } from "@src/global/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  z-index: 10;
  padding-top: 0;
  padding-left: 0;
  padding-bottom: 0;
  overflow: visible;
  position: relative;
  margin-top: 64px;
  gap: 32px;
`;

export const Roles = styled.span`
  color: ${colors.PRIMARY};
`;

export const GroupButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;
