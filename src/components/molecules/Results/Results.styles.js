import styled from "styled-components"

export const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.mainColor};
    overflow: hidden;
    @media (max-height: 732px) {
     overflow-y: hidden;
    }
`
export const ResultContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: calc(100% - 8rem);
    margin: 9em 0 0 3.7em;
    `
export const SubTitle = styled.p`
    font-size: 2.2em;
    margin-top: 1em;
    color: ${({ theme }) => theme.colors.whiteFont};
    @media (max-height: 732px) {
        margin-top: 0em;
    }
`
export const Points = styled.p`
    font-size: 2.2em;
    margin-top: 0.5em;
    color: ${({ theme }) => theme.colors.greenFont};
`
export const PercContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`
export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: calc(100% - 12rem);
    min-height: 500px;
    border-radius: 20px;
    margin: 5em 0;
    background: rgb(105,73,253);
    background: linear-gradient(354deg, rgba(105,73,253,1) 50%, rgba(154,53,236,1) 100%);
    color: ${({ theme }) => theme.colors.whiteFont};
    @media (max-height: 732px) {
        min-height: 360px;
        margin: 3em 0
    }
`
export const BoxTitle = styled.div`
    font-size: 4em;
    font-weight: bold;
    letter-spacing: 1px;
    @media (max-height: 732px) {
        font-size: 3.3em;
    }
`
export const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 30em;
    height: 30em;
    border-radius: 50%;
    background-color: #fcbe2c;
    margin-top: 1em;
    box-shadow: 0px 2px 28px -3px rgba(66, 68, 90, 1);
    @media (max-height: 732px) {
        width: 25em;
        height: 25em;
    }
`
export const CircleScore = styled.h1`
    font-size: 10em;
    @media (max-height: 732px) {
        font-size: 8em;
    }
`

