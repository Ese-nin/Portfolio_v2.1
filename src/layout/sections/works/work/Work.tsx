import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme";
import {ProjectLink} from "./ProjectLink";

type Props = {
    workTitle: string
    description: string
    imgSRC: string
    previewLinkSRC: string
    codeLinkSRC: string
    technologies: string
}

export const Work: React.FC<Props> = (props) => {
    return (
        <StyledWork>
            <Image src={props.imgSRC} alt=""/>
            <Title>{props.workTitle}</Title>
            <Description>{props.description}</Description>
            <Techs>Tech stack : {props.technologies}</Techs>
            <Links>
                <ProjectLink iconId="link" title="Live Preview" linkSRC={props.previewLinkSRC}/>
                <ProjectLink iconId="git_skill" title="View Code" linkSRC={props.codeLinkSRC}/>
            </Links>
        </StyledWork>
    );
};


const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 40%;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
`

const Description = styled.p`

`

const Title = styled.h3`

`

const Techs = styled.span`

`

const Links = styled.div`
  display: flex;
  justify-content: space-around;
`