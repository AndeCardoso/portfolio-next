import { colors } from "@/global/colors";
import styled from "styled-components";
import { Text } from "../Text";
import Link from "next/link";

type TStyledButtonProps = {
  onlyIcon?: boolean;
};

export const StyledText = styled(Text)`
  transition: ease-in-out all 0.2s;
`;

export const StyledLink = styled(Link)<TStyledButtonProps>`
  display: flex;
  width: fit-content;
  padding: ${({ onlyIcon }) => (onlyIcon ? "16px" : "16px 32px")};
  cursor: pointer;
  border-radius: 8px;
  background-color: transparent;
  border: 0.2px solid ${colors.PRIMARY};
  text-decoration: none;

  svg {
    fill: whitesmoke;
  }

  &:hover ${StyledText} {
    color: ${colors.PRIMARY};
  }

  &:hover svg {
    fill: ${colors.PRIMARY};
  }

  &:active {
    filter: opacity(60%);
  }
`;

export const StyledButton = styled.button<TStyledButtonProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: ${({ onlyIcon }) => (onlyIcon ? "16px" : "16px 32px")};
  cursor: pointer;
  border-radius: 8px;
  background-color: transparent;
  border: 0.2px solid ${colors.PRIMARY};

  svg {
    fill: whitesmoke;
  }

  &:hover ${StyledText} {
    color: ${colors.PRIMARY};
  }

  &:hover svg {
    fill: ${colors.PRIMARY};
  }

  &:active {
    filter: opacity(60%);
  }
`;
