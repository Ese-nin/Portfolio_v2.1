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

  h2 {
    color: ${theme.colors.font};
  }

  span {
    color: ${theme.colors.fontSecond};
  }

`