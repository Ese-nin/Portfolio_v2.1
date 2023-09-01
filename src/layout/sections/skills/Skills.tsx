import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "components/FlexContainer";
import {TitleSection} from "components/TitleSection";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <TitleSection title="My Tech Stack" description=" Technologies I’ve been working with recently"/>
            <FlexContainer wrap="wrap">
                <Skill iconId='javascript'/>
                <Skill iconId='css'/>
                <Skill iconId='html'/>
                <Skill iconId='git_skill' viewBox='0 0 90 90'/>
                <Skill iconId='redux'/>
                <Skill iconId='web_storm' viewBox="0 0 250 250"/>
                <Skill iconId='typescript' viewBox='0 0 400 400'/>
            </FlexContainer>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
  min-height: 50vh;
`