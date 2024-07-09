import styled from "styled-components"
import { colors } from "../../globalStyles"

const StyledProjectCard = styled.div`
    width: 400px;
    background-color: ${colors.white};
    border: 2px solid black;
    
    img{
        width: 100%;
        height: 280px;
        object-fit: cover;
    }

    h1 {
        font-size: 16px;
        text-align: center;
        border-top: 2px solid black;
        padding: 16px 0;
    }

    ul{
        display: flex;
        gap: 8px;
        justify-content: center;
        padding-bottom: 16px;

        li {
            background-color: ${colors.yellow};
            padding: 4px 8px;
            border-radius: 8px;
        }
    }
`

const ProjectCard = ({image, alt, title, skills}) => {
    return (
        <StyledProjectCard>
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