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
    gap: 40px;

    margin: 0 auto;
`

const StyledSkills = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h1 {
        margin: 40px 0 80px;
        font-size: 48px;
    }

    .icon {
        font-size: 60px;
        color: ${colors.pink};
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