import { colors } from "@src/global/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 32px;
  border: 1px solid ${colors.PRIMARY};
  border-radius: 8px;
  gap: 24px;

  .signature {
    filter: invert();
  }
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
  flex-direction: row;
  list-style: none;
  gap: 16px;
`;
