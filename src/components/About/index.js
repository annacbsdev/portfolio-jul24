import styled from "styled-components"
//imagem de fundo e cores
import aboutBG from "../../assets/images/aboutBG.png"
import { colors } from "../../globalStyles"

//estilos
const StyledAbout = styled.div`
    height: 70vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    background-image: url(${aboutBG});
    background-size: cover;

    h1 {
        margin-left: 80px;
        padding-top: 300px;
        
        font-family: 'Margin', sans-serif;
        font-size: 100px;
        font-weight: normal;
        text-transform: uppercase;
        text-shadow: -2px -2px 0 ${colors.pink}, 
                    2px -2px 0 ${colors.pink}, 
                    -2px 2px 0 ${colors.pink},  
                    2px 2px 0 ${colors.pink};
    }

    p {
        width: 35vw;
        font-size: 18px;
        line-height: 24px;
    }
`

//componente "Sobre"
const About = () => {
    return (
        <StyledAbout>
            <h1>sobre mim</h1>
            <p>
                Engenheira Front-End formada pela EBAC – Escola Britânica de Artes Criativas e Tecnologia, com graduação em Tecnologia de Jogos Digitais. 
                <br /> <br />
                Sou uma profissional criativa com excelente raciocínio lógico e uma capacidade de aprendizagem rápida. Tenho experiência em gerenciamento de redes sociais e criação de designs digitais.
                <br /> <br />
                <b>Objetivo profissional: Desenvolvedora Front-End</b>
                <br /> <br />
                - Apaixonada por design e tecnologia <br />
                - Programando desde 2022 <br />
                - Estudando e me aprimorando constantemente <br />
                - Buscando meu primeiro emprego como desenvolvedora
            </p>
        </StyledAbout>
    )
}

export default About