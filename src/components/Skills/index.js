import styled from "styled-components"
//componentes e json das skills
import SkillsCard from "./SkillsCard"
import skillsData from './skillsData.json'
//ícone e cores
import { FaCertificate } from "react-icons/fa6";
import { colors } from "../../globalStyles"

//estilos
const SkillsContainer = styled.div`
    max-width: 1024px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items:center;
    gap: 40px;
    flex-wrap: wrap;

    margin: 0 auto;


    @media (max-width: 767px) {
        flex-direction: column;
        width: 90%;
    }
`

const StyledSkills = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    border-top: 3px solid black;
    border-bottom: 3px solid black;

    > h1 {
        margin: 40px 0 80px;
        font-size: 48px;
    }

    .icon {
        font-size: 60px;
        color: ${colors.pink};
    }

    @media (max-width: 767px) {
        > h1 {
            font-size: 36px;
        }

        .icon {
            font-size: 40px;
        }
    }
`

//componente "Habilidades"
const Skills = () => { 

    
    const languagesList = skillsData.languages.map((skill) => (
        <li key={skill.id}>{skill.name}</li>
      ));
    
      const frameworksList = skillsData.frameworks.map((skill) => (
        <li key={skill.id}>{skill.name}</li>
      ));
    
      const toolsList = skillsData.tools.map((skill) => (
        <li key={skill.id}>{skill.name}</li>
      ));


    return(
        <StyledSkills>
            <FaCertificate className="icon"/>
            <h1>minhas habilidades</h1>
            <SkillsContainer>
                <SkillsCard 
                    title="linguagens e pré processadores"
                    list={languagesList}
                    background={colors.orange}
                />
                <SkillsCard 
                    title="frameworks e bibliotecas"
                    list={frameworksList}
                    background={colors.green}
                />
                <SkillsCard 
                    title="outras ferramentas"
                    list={toolsList}
                    background={colors.yellow}
                />
            </SkillsContainer>
        </StyledSkills>

    )

}

export default Skills