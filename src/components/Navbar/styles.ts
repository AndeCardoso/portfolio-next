import { colors } from "@global/colors";
import styled from "styled-components";
import { Text } from "../base/Text";
import { Button } from "../base/Button";
import { breakpointScreenEnum } from "@constants/breakpoints";
import Link from "next/link";

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

export const LangContainer = styled.div`
  display: flex;
  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    display: none;
  }
`;

export const WrapperBrand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    background-color: ${colors.HEADER_BACKGROUND_OPACITY};
    padding: 15px;
    border-radius: 50px;
  }
`;

export const BrandName = styled(Text)`
  line-height: 20px;
  margin-left: 16px;
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
