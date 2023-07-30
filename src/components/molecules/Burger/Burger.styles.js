import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  top: 3%;
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 4.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5em;
  z-index: 2000;
  
  @media (max-height: 732px) {
      top: 2%;
      left: 4%;
    }

  &:focus {
    outline: none;
  }
  
  div {
    width: 3rem;
    height: 0.35rem;
    background: ${({ theme }) => theme.colors.whiteFont};
    border-radius: 10px;
    transition: all 0.4s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;