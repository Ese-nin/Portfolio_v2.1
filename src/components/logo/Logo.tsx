import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Logo = () => {
    return (
        <StyledDiv>
            <Link href="#">
                <Icon iconId='logo' viewBox="0 0 70 70"/>
            </Link>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
  color: #fff;
  display: inline-block;
  height: 100px;
  width: 100px;
  background-color: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
  -webkit-background-clip: text;
`

const Link = styled.a`

`