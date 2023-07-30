import React from "react";
import { Title } from "../../organisms/LevelsComponent/Levels.styles";
import { PlayBtn } from "../../organisms/HomeComponent/Home.styles"
import { FlexWrapper, Points, ResultContainer, SubTitle, PercContainer, Box, BoxTitle, Circle, CircleScore } from "./Results.styles";
import reload from "./reload.svg"
import Confetti from "react-confetti";

const Results = ({ score, question, LevelNumber, scoreLevel }) => {
    console.log(LevelNumber)
    console.log(score)
    return (
        <FlexWrapper>
            <Confetti />
            <Title>Results</Title>
            <ResultContainer>
                <SubTitle>Total correct answers</SubTitle>
                <Points>{score} out of {question} Questions</Points>
            </ResultContainer>
            <PercContainer>
                <Box>
                    <BoxTitle>Your final score is</BoxTitle>
                    <Circle>
                        <CircleScore>{score / question * 100}%</CircleScore>
                    </Circle>
                </Box>
                {score >= 3 ? <PlayBtn to="/levels" state={{ [LevelNumber]: true, [scoreLevel]: score }}><img src={reload} alt={reload}></img> Try Again</PlayBtn>
                    : <PlayBtn to="/levels" state={{ [LevelNumber]: true, [scoreLevel]: score }}><img src={reload} alt={reload}></img> Try Again</PlayBtn>}
            </PercContainer>
        </FlexWrapper>
    )
}

export default Results