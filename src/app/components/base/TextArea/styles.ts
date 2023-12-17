import { colors } from "@/global/colors";
import { Textarea } from "@nextui-org/react";
import styled from "styled-components";

export const StyledTextarea = styled(Textarea)`
  textarea {
    width: 91%;
    display: flex;
    flex-direction: column;
    font-family: Poppins;
    font-size: 16px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid ${colors.PRIMARY};
    background-color: transparent;
    color: whitesmoke;
    resize: none;

    &:focus-visible {
      outline: 0;
    }
  }

  label {
    color: whitesmoke;
  }
`;
