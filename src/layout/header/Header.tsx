import {Container} from "components/Container";
import {FlexContainer} from "components/FlexContainer";
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
                </FlexContainer>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  background-color: bisque;
`