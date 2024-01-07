import { Text } from "@components/base/Text";
import { colors } from "@global/colors";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 380px;

  @media screen and (max-width: 1665px) {
    max-width: 590px;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-right: 32px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
`;

export const DescriptionText = styled(Text)`
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

export const PeriodText = styled(Text)`
  transform: rotate(90deg);
  margin-left: -14px;
`;
