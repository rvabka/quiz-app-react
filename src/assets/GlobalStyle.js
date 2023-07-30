import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html { 
    box-sizing: border-box;
    font-size: 62.5%;
}

*,
*::after,
*::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    font-family: 'Poppins', sans-serif;
}

body {
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
}

body::-webkit-scrollbar {
    width: 1em;
}
 
::-webkit-scrollbar-track {
    background-color: #404040;
}
 
::-webkit-scrollbar-thumb {
  background-color: #616161;
  outline: 1px solid #616161;
}

::-webkit-scrollbar-button:single-button {
  background-color: #616161;
  display: block;
  border-style: solid;
  height: 15px;
  width: 15px;

}
  ::-webkit-scrollbar-button:single-button:vertical:decrement {
  border-width: 0 10px 10px 8px;
  border-color: transparent transparent #FFFFFF transparent;

}

::-webkit-scrollbar-button:single-button:vertical:increment {
  border-width: 10px 10px 0 8px;
  border-color: #FFFFFF transparent transparent transparent;
}

::-webkit-scrollbar-button:vertical:single-button:increment:hover {
  border-color: #777777 transparent transparent transparent;
}

`