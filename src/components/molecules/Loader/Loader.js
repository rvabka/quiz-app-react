import React from "react";
import styled, { keyframes } from "styled-components";

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    z-index: -1000;
    background-color: ${({ theme }) => theme.colors.mainColor};
`

const ldsHeartAnimation = keyframes`
    0% {
        transform: scale(0.95);
    }
    5% {
        transform: scale(1.1);
    }
    39% {
        transform: scale(0.85);
    }
    45% {
        transform: scale(1);
    }
    60% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(0.9);
    }
`

export const LdsHeart = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    transform: rotate(45deg);
    transform-origin: 40px 40px;
`
export const LdsHeartDiv = styled.div`
    top: 32px;
    left: 32px;
    position: absolute;
    width: 32px;
    height: 32px;
    background-color: #fff;
    animation: ${ldsHeartAnimation} 1.1s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    box-shadow: 8px 8px 24px -11px rgba(33, 33, 33, 1);

    &::after, &::before {
        content: " ";
        position: absolute;
        display: block;
        width: 32px;
        height: 32px;
        background-color: #fff;
    }
    &::before {
        left: -24px;
        border-radius: 50% 0 0 50%;
    }
    &::after {
        top: -24px;
        border-radius: 50% 50% 0 0;
    }
`

const Loader = () => {
    return (
        <FlexWrapper>
            <LdsHeart><LdsHeartDiv></LdsHeartDiv></LdsHeart>
        </FlexWrapper>
    )
}

export default Loader