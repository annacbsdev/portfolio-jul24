import styled from "styled-components"
import { useState } from "react"
//componente e json dos projetos
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import projectsData from "./projectsData.json"

//imagens e cores
import projectsBG from "../../assets/images/projectsBG.png"
import lupa from "../../assets/images/lupa.png"
import { TbMoodAnnoyed } from "react-icons/tb";
import { colors } from "../../globalStyles"

//estilos
const StyledProjects = styled.div`
    
    margin-bottom: 40px;
    background-image: url(${projectsBG});

    .projectsHeader{
        display: flex;
        align-items: center;
        gap: 80px;
        
        padding: 40px 0;
        margin-left: 40px;

        h1 {
            font-family: 'Margin', sans-serif;
            font-size: 100px;
            font-weight: normal;
            text-transform: uppercase;
        }

        input {
            max-width: 500px;
            width: 100%;

            padding: 8px 16px;
            border: 2px solid black;
            border-radius: 24px;

            font-weight: bold;
            font-size: 20px;

            background-color: ${colors.orange};
            background-image: url(${lupa});
            background-size: 30px;
            background-position: right 10px center;
            background-repeat: no-repeat;

            &::placeholder {
                opacity: .6;
                color: black;
                font-weight: bold;
            }
        }
       
    }

    .projectsList {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        
        padding-top: 80px;
        background-color: ${colors.pink};
        
        .projectsListContainer {
            width: 80vw;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            gap: 40px;
            flex-wrap: wrap;
            margin-bottom: 40px;
        }

        button {
            margin-bottom: 40px;
            padding: 8px 16px;
            border: 2px solid black;
            border-radius: 24px;

            font-size: 18px;
            font-weight: bold;
            cursor: pointer;

            background-color: ${colors.orange};
        }
    }

    .noResultsFound {
        font-size: 24px;
        text-align: center;

        .icon {
            font-size: 60px;
            margin-bottom: 24px;
        }
    }

    @media (max-width: 1024px ){
        .projectsHeader {
            flex-direction: column;
            gap: 0;
            margin-left: 0;
            h1{
                font-size: 64px;
                margin-bottom: 24px;
            }
            input {
                font-size: 16px;
                width: 90%;
            }
        }

        .noResultsFound {
            font-size: 18px;
            .icon {
                font-size: 40px;
            }
        }
    }

 `

//componente "Projetos"
const Projects = () => {
    const [projectsToShow, setProjectsToShow] = useState(3); 

    //filtragem de habilidades
    const [skillSearch, setSkillSearch] = useState("");
    const filteredProjects = projectsData.filter((project) => {
        if (!skillSearch) {
            return true;
        }
        return project.technologies.some((tech) =>
            tech.toLowerCase().includes(skillSearch.toLowerCase())
        );
    });

    //ver mais ou ver menos
    const handleLoadMore = () => {
        setProjectsToShow(projectsToShow + 3);
    };

    const handleLoadLess = () => {
        setProjectsToShow(Math.max(3, projectsToShow - 3));
    };

    const handleSearchChange = (e) => {
        setSkillSearch(e.target.value);
        setProjectsToShow(3);
    };

    //modal
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const openModal = (projectId) => {
        setSelectedProjectId(projectId);
      };
    
      const closeModal = () => {
        setSelectedProjectId(null);
      };

    return (
        <>
        <StyledProjects>
            <div className="projectsHeader">
                <h1>projetos</h1>
                <input
                    type="text"
                    placeholder="busque por uma habilidade"
                    value={skillSearch}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="projectsList">
                <div className="projectsListContainer">
                {
                    filteredProjects.length > 0 ? (
                        filteredProjects.slice(0, projectsToShow).map((project) => (
                            <ProjectCard
                            key={project.id}
                            image={project.image}
                            alt={project.name}
                            title={project.name}
                            skills={project.technologies}
                            onClick={() => openModal(project.id)}
                            />
                        ))
                    ) : (
                        <div className="noResultsFound">
                        <TbMoodAnnoyed className="icon"/>
                        <p>Nenhum resultado encontrado. Tente outra busca.</p>
                        </div>
                    )
                }
                </div>
                {filteredProjects.length > projectsToShow && (
                    <button onClick={handleLoadMore}>ver mais</button>
                )}

                {projectsToShow > 3 && (
                    <button onClick={handleLoadLess}>ver menos</button>
                )}
            </div>
            {selectedProjectId !== null && (
                <ProjectModal
                project={projectsData.find((project) => project.id === selectedProjectId)} // Encontra o projeto pelo ID selecionado
                onClose={closeModal}
                />
            )}
        </StyledProjects>
        </>
    );
}; 

export default Projects