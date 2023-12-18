import { colors } from "@src/global/colors";
import { Input, Textarea } from "@nextui-org/react";
import styled from "styled-components";

export const StyledInput = styled(Input)`
  input {
    width: 91%;
    display: flex;
    flex-direction: column;
    font-family: Poppins;
    font-size: 16px;
    padding: 16px;
    border: 1px solid ${colors.PRIMARY};
    border-radius: 8px;
    background-color: transparent;
    color: whitesmoke;

    &:focus-visible {
      outline: 0;
    }
  }

  label {
    color: whitesmoke;
  }
`;
