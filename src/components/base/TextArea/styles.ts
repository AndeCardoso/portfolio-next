import { colors } from "@global/colors";
import { Textarea } from "@nextui-org/react";
import styled from "styled-components";
import { poppins } from "@app/fonts";

export const StyledTextarea = styled(Textarea)`
  textarea {
    width: 91%;
    display: flex;
    flex-direction: column;
    font-family: ${poppins.style.fontFamily};
    font-size: 16px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid ${colors.PRIMARY};
    background-color: transparent;
    color: ${colors.WHITE};
    resize: none;

    &:focus-visible {
      outline: 0;
    }

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
  }

  label {
    color: ${colors.WHITE};
    font-family: ${poppins.style.fontFamily};
  }
`;
