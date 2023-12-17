import { colors } from "@/global/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 90px;
  height: 100vh;
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  border-left: 0.2px solid ${colors.PRIMARY};
  background-color: ${colors.BACKGROUND_COLOR};
`;

export const Wrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 36px;
  padding-inline: 16px;
  gap: 16px;
`;
