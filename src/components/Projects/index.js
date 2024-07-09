import styled from "styled-components"
import { colors } from "../../globalStyles"
//componente
import ProjectCard from "./ProjectCard"
//imagens
import projectsBG from "../../assets/images/projectsBG.png"
import memorygame from "../../assets/images/projects/memorygame.png"
import lupa from "../../assets/images/lupa.png"

const StyledProjects = styled.div`
    
    background-image: url(${projectsBG});
    margin-bottom: 40px;

    .projectsHeader{
        display: flex;
        align-items: center;
        gap: 80px;
        padding: 40px 0;

        h1 {
            margin-left: 40px;
            font-family: 'Margin', sans-serif;
            font-size: 100px;
            font-weight: normal;
            text-transform: uppercase;
        }

        input {
            max-width: 500px;
            width: 100%;
            background-color: ${colors.orange};
            background-image: url(${lupa});
            background-size: 30px;
            background-position: right 10px center;
            background-repeat: no-repeat;
            padding: 8px 16px;
            border: 2px solid black;
            border-radius: 24px;
            font-weight: bold;
            font-size: 20px;

            &::placeholder {
                color: black;
                font-weight: bold;
                opacity: .6;
            }
        }
       
    }

    .projectsList {
        background-color: ${colors.pink};
        height: 100%;
        padding-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .projectsListContainer {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            gap: 40px;
        }

        button {
            background-color: ${colors.orange};
            border: 2px solid black;
            border-radius: 24px;
            margin: 40px 0;
            padding: 8px 16px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
        }
    }

 `

const Projects = () => {
    return (
        <StyledProjects>
            <div className="projectsHeader">
                <h1>projetos</h1>
                <input type="text" placeholder="busque por uma habilidade"/>
            </div>
            <div className="projectsList">
                <div className="projectsListContainer">
                    <ProjectCard image={memorygame} alt="Imagem do site do jogo de memória" title="jogo da memória" skills={["html", "css", "javascript"]}/>
                    <ProjectCard image={memorygame} alt="Imagem do site do jogo de memória" title="jogo da memória" skills={["html", "css", "javascript"]}/>
                    <ProjectCard image={memorygame} alt="Imagem do site do jogo de memória" title="jogo da memória" skills={["html", "css", "javascript"]}/>
                </div>
                <button>carregar mais</button>
            </div>
        </StyledProjects>
    )
}

export default Projects