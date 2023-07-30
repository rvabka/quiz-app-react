import styled from "styled-components"
import { Link } from "react-router-dom";

export const FlexContainer = styled.div`
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='750' height='1080' preserveAspectRatio='none' viewBox='0 0 750 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3crect width='750' height='1080' x='0' y='0' fill='rgba(31%2c 17%2c 71%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c328.349C79.478%2c323.762%2c159.614%2c394.283%2c231.756%2c360.619C303.817%2c326.992%2c329.225%2c237.419%2c355.616%2c162.405C380.213%2c92.492%2c386.022%2c19.339%2c377.734%2c-54.31C369.234%2c-129.838%2c359.524%2c-211.052%2c307.366%2c-266.335C255.832%2c-320.957%2c173.482%2c-324.322%2c101.817%2c-346.758C28.68%2c-369.655%2c-43.766%2c-421.077%2c-117.235%2c-399.266C-190.683%2c-377.461%2c-225.542%2c-296.621%2c-272.079%2c-235.758C-315.703%2c-178.704%2c-363.119%2c-124.375%2c-380.67%2c-54.732C-399.451%2c19.792%2c-396.405%2c97.38%2c-374.609%2c171.078C-350.418%2c252.873%2c-328.259%2c355.386%2c-249.612%2c388.404C-169.075%2c422.216%2c-87.202%2c333.382%2c0%2c328.349' fill='%231a0e3b'%3e%3c/path%3e%3cpath d='M750 1578.704C842.093 1581.799 889.828 1467.43 962.962 1411.375 1028.556 1361.099 1115.064 1336.9850000000001 1157.72 1266.199 1202.497 1191.892 1226.309 1098.26 1201.79 1015.042 1178.034 934.413 1086.824 899.355 1031.094 836.4300000000001 976.179 774.4259999999999 955.681 673.413 876.814 648.1120000000001 797.958 622.8140000000001 722.73 693.9200000000001 641.812 711.544 552.5509999999999 730.986 448.297 699.615 377.166 756.938 304.136 815.79 267.657 917.2570000000001 270.2 1011.015 272.62 1100.244 338.513 1171.586 390.381 1244.232 433.549 1304.693 491.645 1346.767 546.044 1397.362 614.034 1460.598 657.2 1575.585 750 1578.704' fill='%23241453'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='750' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`

export const Logo = styled.img`
    width: 50%;
    margin: auto;
    @media (max-height: 732px) {
        width: 40%;
    }
`
export const Title = styled.h1`
    letter-spacing: 3px;
    font-size: 7em;
    color: ${({ theme }) => theme.colors.greenFont};
    margin-top: 0.1em;
    font-weight: bold;
    @media (max-height: 732px) {
        font-size: 6em;
    }
`
export const SubTitle = styled.h2`
    font-size: 4em;
    color: ${({ theme }) => theme.colors.whiteFont};
    letter-spacing: 2px;
    margin-top: 1em;
    @media (max-height: 732px) {
        font-size: 3.6em;
    }
`
export const Paragraph = styled.p`
    font-size: 3em;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.whiteFont};
`
export const BtnContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
`
export const PlayBtn = styled(Link)`
    width: 80%;
    padding: 0.5em;
    font-size: 4em;
    color: ${({ theme }) => theme.colors.whiteFont};
    background-color: ${({ theme }) => theme.colors.button};
    text-decoration: none;
    text-align: center;
    border-radius: 30px;
    cursor: pointer;
    margin-bottom: 1em;
    transition: .5s all;

    &:hover {
        background-color: ${({ theme }) => theme.colors.buttonHover};
        transform: scale(1.08);
    }
`
export const AboutBtn = styled(Link)`
    width: 80%;
    padding: 0.3em;
    font-size: 4.5em;
    color: ${({ theme }) => theme.colors.button};
    border: 2px solid ${({ theme }) => theme.colors.button};
    text-decoration: none;
    text-align: center;
    background-color: transparent;
    cursor: pointer;
    border-radius: 30px;
    transition: .4s all;

    &:hover {
        border: 2px solid ${({ theme }) => theme.colors.buttonHover};
        color: ${({ theme }) => theme.colors.buttonHover};
        transform: scale(1.08);
    }
`



