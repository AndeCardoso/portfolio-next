import { colors } from "@src/global/colors";
import styled from "styled-components";
import { Text } from "../base/Text";
import { Button } from "../base/Button";
import { breakpointScreenEnum } from "@src/constants/breakpoints";

export const Container = styled.div`
  width: 92%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.HEADER_BACKGROUND};
  border-radius: 50px;
  padding: 10px 15px;
  z-index: 99;
  top: 45px;

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    background-color: transparent;
    width: 95%;
    padding: 0;
  }
`;

export const WrapperBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  p {
    width: 150px;
    line-break: auto;
  }

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    background-color: ${colors.HEADER_BACKGROUND_OPACITY};
    padding: 15px;
    border-radius: 50px;
  }
  p {
    width: 110px;
    line-break: auto;
  }
`;

export const BrandName = styled(Text)`
  line-height: 20px;
`;

export const HeaderButton = styled(Button)`
  border: none;
  padding: 0;
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 44px;
  align-items: center;

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    display: none;
  }
`;

export const DownloadButton = styled(Button)`
  border-radius: 50px;
`;
