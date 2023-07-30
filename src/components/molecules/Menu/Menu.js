import React from "react"
import { FlexContainer, Container, MenuItem, Icon, StyledLink } from "./Menu.styles";
import levels from "./levels.svg"
import play from "./play.svg"
import home from "./home.svg"
import FadeIn from "react-fade-in"

const Menu = ({ open, setOpen }) => {

    return (
        <FlexContainer open={open}>
            <Container>
                <MenuItem>
                    <Icon src={home}></Icon><StyledLink  onClick={() => setOpen(!open)} to="/">Home</StyledLink>
                </MenuItem>
                <MenuItem>
                    <Icon src={levels}></Icon><StyledLink onClick={() => setOpen(!open)} to="/levels">Play</StyledLink>
                </MenuItem>
                {/* <MenuItem>
                    <Icon src={play}></Icon><StyledLink>About us</StyledLink>
                </MenuItem> */}
            </Container>
        </FlexContainer>
    )

}

export default Menu;