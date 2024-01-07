import { colors } from "@global/colors";
import { Input } from "@nextui-org/react";
import styled from "styled-components";
import { poppins } from "@app/fonts";

export const StyledInput = styled(Input)`
  input {
    width: 91%;
    display: flex;
    flex-direction: column;
    font-family: ${poppins.style.fontFamily};
    font-size: 16px;
    padding: 16px;
    border: 1px solid ${colors.PRIMARY};
    border-radius: 8px;
    background-color: transparent;
    color: ${colors.WHITE};

    &:focus-visible {
      outline: 0;
    }
  }

  label {
    color: ${colors.WHITE};
    font-family: ${poppins.style.fontFamily};
  }
`;
