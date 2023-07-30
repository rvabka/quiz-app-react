import React, { useState, useEffect } from "react"
import axios from "axios";
import { FlexWrapper, Title, Container, CurrentQuestion, Question, Image, Answer, AnswerNumber, Flex } from "./LevelNumber.styles";
import Loader from "../../../molecules/Loader/Loader"
import FadeIn from "react-fade-in"
import { answers } from "../../../../assets/dataFirst"
import { query } from "../cms";
import { headers } from "../cms"
import Results from "../../../molecules/Results/Results";

const LevelFirst = () => {
    const [question, setQuestion] = useState([]);
    const [error, setError] = useState('')
    const [loader, setLoader] = useState(false)
    const [questionNumber, setQuestionNumber] = useState(0);
    const [count, setCount] = useState(1);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const PassLevelFirst = "passLevelFirst";
    const ScoreLevelFirst = "scoreLevelFirst"

    useEffect(() => {
        setTimeout(() => {
            axios.post('https://graphql.datocms.com/',
                query,
                headers
            )
                .then(({ data: { data } }) => {
                    setQuestion(data.allQuestions);
                    setLoader(true)
                })
                .catch(() => {
                    setError("Sorry, we couldn't load questions for you. &#128549");
                })
        }, 1000);
    }, [])

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        setCount(count + 1)
        const nextQuestion = questionNumber + 1;
        if (nextQuestion < question.length) {
            setQuestionNumber(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <>
            {showScore ? (
                <Results score={score} scoreLevel={ScoreLevelFirst} question={question.length} LevelNumber={PassLevelFirst}></Results>
            ) : (
                <>
                    {loader ?
                        <FlexWrapper>
                            <Title>Level 1</Title>
                            <Container>
                                <FadeIn>
                                    <CurrentQuestion>0{count}/0{question.length}</CurrentQuestion>
                                        {question.length > 0 ? <Question>{question[questionNumber].question}</Question> : <h1>{error}</h1>}
                                        {question.length > 0 ? <Image src={question[questionNumber].image.url}></Image> : <h1>{error}</h1>}
                                </FadeIn>
                            </Container>
                            <Container>
                                <FadeIn transitionDuration={400} delay={200}>
                                    {answers.length > 0 ? answers[questionNumber].options.map(({ answerText, isCorrect, number }) => {
                                        return (
                                            <Answer onClick={() => handleAnswerOptionClick(isCorrect)}><AnswerNumber>{number}</AnswerNumber>{answerText}</Answer>
                                        )
                                    }) : <Loader />}
                                </FadeIn>
                            </Container>
                        </FlexWrapper > : <Loader />
                    }
                </>
            )
            }
        </>
    )
}

export default LevelFirst


