import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

function Section({
  title,
  description,
  leftBtnText,
  righttBtnText,
  backgrounImg,
}) {
  return (
    <Wrap bgImage={backgrounImg}>
      <Fade bottom>
        <ItemText>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {righttBtnText && <RightButton>{righttBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/imags/down-arrow.svg" alt="" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("/imags/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertial
  align-items: center; // horizontal
  z-index: 10;
`;
const Title = styled.h1`
  text-transform: capitalize;
`;

const Description = styled.p`
  margin-top: 10px;
  text-transform: capitalize;
`;

const ItemText = styled.div`
  padding: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: Uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  overflow-x: hidden;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
