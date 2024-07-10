import styled from "styled-components"
//imagem de fundo e cores
import aboutBG from "../../assets/images/aboutBG.png"
import { colors } from "../../globalStyles"
import { IoMdFlower } from "react-icons/io";

//estilos
const StyledAbout = styled.div`
    display: flex;
    justify-content: center;
    padding: 40px;

    background-image: url(${aboutBG});
    background-repeat: no-repeat;
    background-size: cover;
    
    .aboutContainer {
        max-width: 1024px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        padding: 24px 0;

        border: 3px solid black;
        border-radius: 24px;
        background-color: ${colors.white};

        h1 {
            font-family: 'Margin', sans-serif;
            font-size: 80px;
            font-weight: normal;
            text-align: center;
            text-transform: uppercase;
            text-shadow: -2px -2px 0 ${colors.orange}, 
                        2px -2px 0 ${colors.orange}, 
                        -2px 2px 0 ${colors.orange},  
                        2px 2px 0 ${colors.orange};
        }
    
        .icon {
            font-size: 60px;
            color: ${colors.pink}
        }

        p {
            width: 90%;
            font-size: 18px;
            text-align: justify;
            line-height: 24px;
        }
        

    }

    @media (max-width: 767px ) {

        .aboutContainer {

            h1 {
                font-size: 56px;
            }

            .icon {
                font-size: 40px;
            }

            p {
                font-size: 14px;
            }
        }
    }

`

//componente "Sobre"
const About = () => {
    return (
        <StyledAbout>
            <div className="aboutContainer">
                <h1>sobre mim</h1>
                <IoMdFlower className="icon"/>
                <p>
                    Engenheira Front-End formada pela EBAC – Escola Britânica de Artes Criativas e Tecnologia, com graduação em Tecnologia de Jogos Digitais. 
                    Sou uma profissional criativa com um bom raciocínio lógico e aprendizagem rápida. Estudo programação desde 2022 e sou apaixonada por design e tecnologia!
                    Minhas áreas de atuação incluem desenvolvimento web (front e back-end integrados a APIs) e design de interfaces.
                </p>
            </div>
        </StyledAbout>
    )
}

export default About