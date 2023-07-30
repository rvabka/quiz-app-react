import styled from "styled-components";
import { theme } from "../../../../assets/theme";

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.mainColor};
`
export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Title = styled.h1`
    position: absolute;
    text-align: center;
    font-size: 3em;
    font-weight: bold;
    letter-spacing: 3px;
    top: 5.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.colors.greenFont};
    @media (max-height: 732px) {
        font-size: 2.5em;
        top: 5%;
    }
`
export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: calc(100% - 6.5rem);
    @media (min-height: 733px) {
        width: calc(100% - 8rem);
    }
`
export const CurrentQuestion = styled.p`
    margin-top: 2em;
    font-size: 1.5em;
    color: ${({ theme }) => theme.colors.greenFont};
    @media (max-height: 732px) {
        font-size: 1.5em;
        margin-top: 2em;
    }
`
export const Question = styled.h1`
    font-size: 2.2em;
    margin-bottom: 1.2em;
    color: ${({ theme }) => theme.colors.whiteFont};
    @media (max-height: 732px) {
        font-size: 1.8em;
        margin-bottom: 0.6em;
    }
`
export const Image = styled.img`
    width: 90%;
    border-radius: 25px;
    margin: auto 0;
    box-shadow: 8px 8px 24px -11px rgba(33, 33, 33, 1);
    @media (max-height: 732px) {
        object-position: center;
        width: 100%;
        height: 30em;
        margin: auto 0;
    }
`
export const Answer = styled.button`
    position: relative;
    width: 100%;
    font-size: 2em;
    padding: 0.7em 0;
    padding-left: 3.5em;
    margin-top: 1em;
    text-align: left;
    border-radius: 20px;
    border: none;
    color: ${({ theme }) => theme.colors.whiteFont};
    background-color: transparent;
    cursor: pointer;
    transition: .4s all;

    &:hover {
        background-color: ${({ }) => theme.colors.greenFont};
        color: ${({ theme }) => theme.colors.mainColor}
    }
    @media (max-height: 732px) {
        margin-top: 0.4em;
        font-size: 1.9em;
    }
`
export const AnswerNumber = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    left: 2%;
    top: 20%;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    letter-spacing: 0;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.whiteFont};
`



