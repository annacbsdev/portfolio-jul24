import styled from "styled-components";
//ícones e imagens
import { FiDownload } from "react-icons/fi";
import homeBg from "../../assets/images/homeBG.png"
import profile from "../../assets/images/profile.jpg"
import line from "../../assets/images/line.png"
//pdf e cores
import pdfFile from "../../assets/curriculo.pdf"
import { colors } from "../../globalStyles";

//estilos
const StyledBanner = styled.div`

    display: flex;
    align-items: center;
    gap: 40px;

    margin-top: 90px;

    background-image: url(${homeBg});
    
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
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 24%;

        padding: 8px 0;
        margin-top: 80px;
        border: 2px solid black;
        border-radius: 24px;

        font-size: 24px;
        color: black;
        text-decoration: none;

        background-color: ${colors.orange};
    }

`

//componente Banner
const Banner = () => {
    return (
        <StyledBanner>
            <img src={profile} alt="Uma foto minha, uma mulher branca e loira, com os braços cruzados"/>
            <div>
                <img src={line} alt="" className="line"/>
                <p><b>olá! seja bem-vindo. eu sou a</b></p>
                <h1>Anna Claudia Barros</h1>
                <p className="title">desenvolvedora front-end  | web designer</p>
                <a 
                    href={pdfFile}
                    download="curriculo_anna.pdf"
                    className="download-button"
                >
                    <FiDownload />currículo
                </a>
            </div>
        </StyledBanner>
    )
}

export default Banner