import React from 'react';
import styled from "styled-components";
import {font} from "styles/Common";
import {theme} from "styles/Theme";

type Props = {
    title: string
    description: string
}

export const TitleSection: React.FC<Props> = (props) => {
    return (
        <StyledTitle>
            <h2>{props.title}</h2>
            <span>{props.description}</span>
        </StyledTitle>
    );
};


const StyledTitle = styled.div`
  text-align: center;
  margin-bottom: 140px;

  h2 {
    ${font({color: theme.colors.font, weight: 700, Fmax: 48, Fmin: 40})}
  }

  span {
    ${font({color: theme.colors.fontSecond, weight: 400, Fmax: 32, Fmin: 24})}
  }

`