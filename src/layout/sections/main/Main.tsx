import abstract from "assets/images/Abstract.svg"
import mainPhoto from 'assets/images/mainPhoto.webp'
import {Container} from "components/Container";
import {FlexContainer} from "components/FlexContainer";
import React from 'react';
import styled from "styled-components";
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
                        <MainPhoto src={mainPhoto} alt="main photo"/>
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
  background-image: linear-gradient(to top, #13B0F5 -2.06%, #E70FAA 100%);

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${abstract});
    width: 628px;
    height: 628px;
  }
`

const MainPhoto = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;  
  transform: translate(10px, 10px);
`

const Name = styled.h2`
  background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 58px;
  font-weight: 700;
  letter-spacing: -1px;
`