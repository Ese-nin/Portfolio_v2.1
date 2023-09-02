import React from 'react';
import mainPhoto from 'assets/images/mainPhoto.webp'
import {FlexContainer} from "components/FlexContainer";
import styled from "styled-components";
import {Container} from "components/Container";
import {theme} from "styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexContainer align={'center'} justify={'space-between'}>
                    <div>
                        <span>Hello!</span>
                        <Name>I’m Sergey</Name>
                        <span>I build things for web</span>
                    </div>

                    <PhotoBox>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <MainPhoto src={mainPhoto}/>
                    </PhotoBox>
                </FlexContainer>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;

  color: ${theme.colors.fontMainTitle};
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`

const PhotoBox = styled.div`
  position: relative;
  width: 370px;
  height: 370px;
  border-radius: 50%;
  background-image: linear-gradient(180deg, #13B0F5 -2.06%, #E70FAA 100%);

  &::before {
    content: "";
    position: absolute;
    left: -25px;
    top: -25px;
    display: inline-block;
    height: 444px;
    width: 444px;
    border: 1px solid #fff;
    border-image: linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, 0)) 1;
    transform: rotate(105deg);
  }

  div {
    position: relative;
    
    &:first-child::before {
      content: "";
      position: absolute;
      left: -25px;
      top: -25px;
      display: inline-block;
      height: 444px;
      width: 444px;
      border: 1px solid #fff;
      border-image: linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, 0)) 1;
      transform: rotate(120deg);
    }

    &:nth-child(2)::before {
      content: "";
      position: absolute;
      left: -25px;
      top: -25px;
      display: inline-block;
      height: 444px;
      width: 444px;
      border: 1px solid #fff;
      border-image: linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, 0)) 1;
      transform: rotate(135deg);
    }

    &:nth-child(3)::before {
      content: "";
      position: absolute;
      left: -25px;
      top: -25px;
      display: inline-block;
      height: 444px;
      width: 444px;
      border: 1px solid #fff;
      border-image: linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, 0)) 1;
      transform: rotate(150deg);
    }

    &:nth-child(4)::before {
      content: "";
      position: absolute;
      left: -25px;
      top: -25px;
      display: inline-block;
      height: 444px;
      width: 444px;
      border: 1px solid #fff;
      border-image: linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, 0)) 1;
      transform: rotate(165deg);
    }
  }
`

const MainPhoto = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
`

const Name = styled.h2`
  background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 58px;
  font-weight: 700;
  letter-spacing: -1px;
`