import styled from "styled-components";
import { Text } from "@src/components/base/Text";
import { breakpointScreenEnum } from "@src/constants/breakpoints";

export const Table = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    flex-direction: column;
  }
`;

export const Row = styled.li`
  display: flex;
  width: 50%;
  margin: 4px 0;

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Key = styled(Text)`
  width: 90px;
`;

export const Value = styled(Text)`
  width: fit-content;

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    width: 100%;
    word-wrap: break-word;
  }
`;
