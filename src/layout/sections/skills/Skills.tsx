import {Container} from "components/Container";
import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "components/FlexContainer";
import {TitleSection} from "components/TitleSection";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <TitleSection title="My Tech Stack"
                              description=" Technologies I’ve been working with recently"/>
                <FlexContainer wrap="wrap" justify="space-between" gap="125px">
                    <Skill iconId='javascript'/>
                    <Skill iconId='typescript' viewBox='0 0 400 400'/>
                    <Skill iconId='css' viewBox='0 0 115 115'/>
                    <Skill iconId='html'  viewBox='0 0 115 115'/>
                    <Skill iconId='git_skill' viewBox='0 0 90 90'/>
                    <Skill iconId='redux'/>
                    <Skill iconId='redux'/>
                    <Skill iconId='mobX' viewBox="0 0 260 260"/>
                    <Skill iconId='nodeJS' viewBox="0 0 290 290"/>
                    <Skill iconId='web_storm' viewBox="0 0 250 250"/>
                </FlexContainer>
            </Container>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
  min-height: 50vh;
`