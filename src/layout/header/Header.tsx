import {Container} from "components/Container";
import {FlexContainer} from "components/FlexContainer";
import {MobileMenu} from "components/menu/MobileMenu";
import React from 'react';
import styled from "styled-components";
import {Logo} from "components/logo/Logo";
import {Menu} from "components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer justify='space-between' align='center'>
                    <Logo/>
                    <Menu/>
                    <MobileMenu/>
                </FlexContainer>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  background-color: rgba(25, 25, 25, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`