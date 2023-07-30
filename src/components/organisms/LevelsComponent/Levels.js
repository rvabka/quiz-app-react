import { GridContainer, Title, GridItems, Level1, Level2, Level3, Level4, Level5, Level6, LevelTitle, LinkStyled, Level2Unlock, Level3Unlock, Level4Unlock, Level5Unlock, Level6Unlock, LockIcon, YellowImg, FlexStar } from "./Levels.styles.js";
import FadeIn from 'react-fade-in';
import { useLocation } from "react-router";
import lockIcon from "./lockIcon.svg"
import grayStar from "./stars/graystar.png"
import fullstar from "./stars/fullstar.png"
import yellowstar from "./stars/yellowstar.png"
import { LevelsConext } from "../../../views/LevelsProvider.js";
import { useContext } from "react";



const Levels = () => {
    const passLevel = useContext(LevelsConext);
    console.log(passLevel[0].level01)

    const location = useLocation();

    const pass = {
        level01: false,
        level02: false,
        level03: false,
        level04: false,
        level05: false,
    }
    const passLevelFirst = location.state?.passLevelFirst;
    const passLevelSecond = location.state?.passLevelSecond;

    if (passLevelFirst) {
        pass.level01 = true
    } else if (passLevelSecond) {
        pass.level01 = true
        pass.level02 = true
    }

    return (
        <>
            <Title>Levels</Title>
            <GridContainer>
                <FadeIn>
                    <GridItems>
                        {/* Level01 */}
                        <LinkStyled to="/levelfirst">
                            <Level1>
                                <LevelTitle>Level <br /> 01</LevelTitle>
                            </Level1>
                        </LinkStyled>
                        {/* Level02 */}
                        {pass.level01 ? <FadeIn><LinkStyled to="/levelsecond">
                            <Level2>
                                <LevelTitle>Level <br /> 02</LevelTitle>
                            </Level2>
                        </LinkStyled></FadeIn> :
                            <Level2Unlock>
                                <LevelTitle>Level <br /> 02</LevelTitle>
                                <LockIcon src={lockIcon}></LockIcon>
                            </Level2Unlock>}
                        {/* Level03 */}
                        {pass.level02 ? <FadeIn><LinkStyled to="/levelthird">
                            <Level3>
                                <LevelTitle>Level <br /> 03</LevelTitle>
                            </Level3>
                        </LinkStyled></FadeIn> :
                            <Level3Unlock>
                                <LevelTitle>Level <br /> 03</LevelTitle>
                                <LockIcon src={lockIcon}></LockIcon>
                            </Level3Unlock>}
                        {/* Level04 */}
                        {pass.level03 ? <FadeIn><LinkStyled to="/levelfourth">
                            <Level4>
                                <LevelTitle>Level <br /> 04</LevelTitle>
                            </Level4>
                        </LinkStyled></FadeIn> :
                            <Level4Unlock>
                                <LevelTitle>Level <br /> 04</LevelTitle>
                                <LockIcon src={lockIcon}></LockIcon>
                            </Level4Unlock>}
                        {/* Level05 */}
                        {pass.level04 ? <FadeIn><LinkStyled to="/levelfourth">
                            <Level5>
                                <LevelTitle>Level <br /> 05</LevelTitle>
                            </Level5>
                        </LinkStyled></FadeIn> :
                            <Level5Unlock>
                                <LevelTitle>Level <br /> 05</LevelTitle>
                                <LockIcon src={lockIcon}></LockIcon>
                            </Level5Unlock>}
                        {/* Level06 */}
                        {pass.level05 ? <FadeIn><LinkStyled to="/levelfourth">
                            <Level6>
                                <LevelTitle>Level <br /> 06</LevelTitle>
                            </Level6>
                        </LinkStyled></FadeIn> :
                            <Level6Unlock>
                                <LevelTitle>Level <br /> 06</LevelTitle>
                                <LockIcon src={lockIcon}></LockIcon>
                            </Level6Unlock>}
                    </GridItems>
                </FadeIn>
            </GridContainer>
        </>
    )
}

export default Levels;