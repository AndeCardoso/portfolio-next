import styled from "styled-components";
import Image from "next/image";
import { Button } from "@components/base/Button";
import { colors } from "@global/colors";

interface IStyledButtonProps {
  $selected: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const StyledImage = styled(Image)`
  border-radius: 50px;
`;

export const Divider = styled.div`
  height: 24px;
  width: 2px;
  background-color: ${colors.PRIMARY};
`;

export const StyledButton = styled(Button)<IStyledButtonProps>`
  padding: 0;
  border: none;
  justify-content: center;
  align-items: center;
  p {
    color: ${({ $selected }) => ($selected ? colors.PRIMARY : colors.WHITE)};
  }
`;
