import styled from "styled-components";
import Image from "next/image";
import { Button } from "@components/base/Button";

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

export const StyledButton = styled(Button)<IStyledButtonProps>`
  padding: 0;
  border: none;
  justify-content: center;
  align-items: center;
  margin: none;
  filter: grayscale(${({ $selected }) => ($selected ? 0 : "")});

  p {
    height: 20px;
  }
`;
