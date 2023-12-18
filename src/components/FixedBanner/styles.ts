import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 45%;
  height: 100%;
  background: -webkit-linear-gradient(-50deg, #00dbff40, #00b6ff90);
`;

export const ImageBanner = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/man.jpg");
  background-position: center center;
  background-size: cover;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  mix-blend-mode: luminosity;
`;
