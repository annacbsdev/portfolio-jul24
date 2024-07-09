import styled from "styled-components"
import { colors } from "../../globalStyles"

//estilos
const StyledProjectCard = styled.div`
    width: 360px;
    border: 2px solid black;
    background-color: ${colors.white};
    cursor: pointer;

    &:hover{
        transform: scale(1.10);
    }
    
    img{
        width: 100%;
        height: 280px;
        object-fit: cover;
        border-bottom: 2px solid black;
    }

    h1 {
        padding: 8px 0 16px;
        text-align: center;
        font-size: 16px;
    }

    ul{
        display: flex;
        justify-content: center;
        gap: 8px;
        padding-bottom: 16px;

        li {
            padding: 4px 8px;
            border-radius: 8px;
            font-size: 14px;
            background-color: ${colors.yellow};
        }
    }
`

//componente "Card de Projeto"
const ProjectCard = ({image, alt, title, skills, onClick}) => {
    return (
        <StyledProjectCard onClick={onClick}>
            <img src={image} alt={alt}/>
            <h1>{title}</h1>
            <ul>
                {skills.map(
                    (skill) => (
                        <li key={skill}>{skill}</li>
                    )
                )}
            </ul>
        </StyledProjectCard>
    )
}

export default ProjectCard