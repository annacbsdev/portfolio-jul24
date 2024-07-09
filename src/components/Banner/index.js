import styled from "styled-components";

import { FiDownload } from "react-icons/fi";
import homeBg from "../../assets/images/homeBG.png"
import profile from "../../assets/images/profile.jpg"
import line from "../../assets/images/line.png"
import { colors } from "../../globalStyles";

const StyledBanner = styled.div`

    background-image: url(${homeBg});
    display: flex;
    align-items: center;
    gap: 40px;
    margin-top: 90px;

    > img {
        height: 90vh;
        border: 3px solid black;
        border-top: none;
    }

    h1{
        font-family: 'Margin', sans-serif;
        font-size: 80px;
        font-weight: normal;
        text-transform: uppercase;
    }

    .line {
        width: 150px;
    }

    .title {
        font-size: 24px;
    }
    
    button {
        background-color: ${colors.orange};
        border: 2px solid black;
        border-radius: 24px;
        padding: 8px 16px;
        margin-top: 80px;
        font-size: 24px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

`

const Banner = () => {
    return (
        <StyledBanner>
            <img src={profile} alt="Uma foto minha, uma mulher branca e loira, com os braços cruzados"/>
            <div>
                <img src={line} alt="" className="line"/>
                <p><b>olá! seja bem-vindo. eu sou a</b></p>
                <h1>Anna Claudia Barros</h1>
                <p className="title">desenvolvedora front-end  | web designer</p>
                <button><FiDownload />currículo</button>
            </div>
        </StyledBanner>
    )
}

export default Banner