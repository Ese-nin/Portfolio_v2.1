import React from 'react';
import styled from "styled-components";
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
    color: ${theme.colors.font};
    font-size: 48px;
    font-weight: 700;
  }

  span {
    color: ${theme.colors.fontSecond};
    font-size: 32px;
    font-weight: 400;
  }

`