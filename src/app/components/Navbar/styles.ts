import { colors } from "@/global/colors";
import styled from "styled-components";
import { Text } from "../base/Text";
import Link from "next/link";
import { Button } from "../base/Button";

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
`;

export const WrapperBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  p {
    width: 150px;
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
`;

export const DownloadButton = styled(Button)`
  border-radius: 50px;
`;
