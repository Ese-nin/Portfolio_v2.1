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
            <TextBlock>
                <Title>{props.workTitle}</Title>
                <Description>{props.description}</Description>
                <Techs>Tech stack : {props.technologies}</Techs>
                <Links>
                    <ProjectLink iconId="link" title="Live Preview" linkSRC={props.previewLinkSRC}/>
                    <ProjectLink iconId="git_skill" title="View Code" linkSRC={props.codeLinkSRC}/>
                </Links>
            </TextBlock>
        </StyledWork>
    );
};


const StyledWork = styled.div`
  width: 375px;
  background-color: ${theme.colors.secondaryBg};
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 20px 20px 0 0;
`

const TextBlock = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`

const Description = styled.p`
  
`

const Title = styled.h3`
  
`

const Techs = styled.span`

`

const Links = styled.div`
  display: flex;
  justify-content: space-between;
`