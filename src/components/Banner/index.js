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
    background-repeat: no-repeat;
    background-size: cover;
    
    > img {
        height: 100%;
        width: 30%;
        object-fit: cover;
        border: 3px solid black;
        border-top: none;
    }

    .bannerContent {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    h1{
        font-family: 'Margin', sans-serif;
        font-size: 64px;
        font-weight: normal;
        text-transform: uppercase;
    }

    .line {
        width: 80px;
        margin-bottom: 40px;
    }

    .title {
        font-size: 18px;
    }
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        padding: 8px 16px;
        margin-top: 40px;
        border: 2px solid black;
        border-radius: 24px;

        font-size: 16px;
        color: black;
        font-weight: bold;
        text-decoration: none;

        background-color: ${colors.orange};
    }

    @media (max-width: 1024px) {

        h1 {
            font-size: 48px;
        }
        .title {
            font-size: 16px;
        }
        .line {
            width: 60px;
            margin-bottom: 0;
        }
    }

    @media (max-width: 767px) {
        
        margin-top: 84px;
        display: block;
        background: none;

        > img {
            width: 100%;
            height: 50vh;
            object-position: top;
            border: none;
        }

        .bannerContent {
            align-items: center;
            background-repeat: no-repeat;
            background-size: cover;
            padding: 20px 0 40px;
        }
        h1 {
            font-size: 36px;
        }
        .title {
            font-size: 16px;
        }
        .line {
            width: 60px;
            margin-bottom: 0;
        }
    }

`

//componente Banner
const Banner = () => {
    return (
        <StyledBanner>
            <img src={profile} alt="Uma foto minha, uma mulher branca e loira, com os braços cruzados"/>
            <div className="bannerContent">
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