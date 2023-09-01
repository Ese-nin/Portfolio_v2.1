import React from 'react';
import mainPhoto from 'assets/images/mainPhoto.webp'
import {FlexContainer} from "components/FlexContainer";
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMain>
            <FlexContainer align={'center'} justify={'space-around'}>
                <div>
                    <span>Hello!</span>
                    <Name>I’m Baden Baden</Name>
                    <span>I’am freelance</span> <MainTitle>web developer.</MainTitle>
                </div>

                <Photo src={mainPhoto} alt=""/>
            </FlexContainer>
        </StyledMain>
    );
};


const StyledMain = styled.section`
  min-height: 100vh;
`

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`