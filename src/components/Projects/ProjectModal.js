import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { colors } from "../../globalStyles";

const StyledProjectModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    .overlay {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .modalContent {
        
        width: 70%;
        height: 50%;
        z-index: 2;
        overflow: auto;
        position: relative;
        padding: 24px;

        display: flex;
        align-items: center;
        gap: 24px;

        background-color: ${colors.white};

        img {
            width: 50%;
            height: 100%;
            object-fit: cover;
            border: 2px solid black;
        }

        .close {
            position: absolute;
            top: 8px;
            right: 8px;
            background: none;
            border: none;
            font-size: 36px;
            cursor: pointer;
        }

        &__text{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 24px 0;
            ul {
                display: flex;
                gap: 8px;
                margin-top: 16px;
                li {
                    padding: 4px 8px;
                    border-radius: 8px;
                    font-size: 14px;
                    background-color: ${colors.yellow};
                }
            }

            .modalButtons {
                display: flex;
                flex-direction: column;
                gap: 8px;

                a {
                    padding: 8px 16px;
                    text-decoration: none;
                    color: black;
                    border: 2px solid black;
                    border-radius: 24px;
                    width: 300px;
                    text-align: center;
                    font-weight: bold;
                  }

                  .green {
                    background-color: ${colors.green};
                  }
            }
        }
    }

    @media (max-width: 1024px) {
      .modalContent {
        width: 80%;
        height: 40%;
        gap: 16px;

        .modalButtons {
          a {
            width: 200px;
          }
        }

        &__text {
          padding: 0;
          h1 {
            font-size: 18px;
            text-align: center;
          }
          p {
            font-size: 14px;
          }
          ul{
            justify-content: center;
            margin-top: 8px;
          }
        }
      }
    }

    @media (max-width: 767px) {
      .modalContent{
        flex-direction: column;
        height: 70vh;
        img {
          width: 100%;
          height: 50%;
          margin-top: 24px;
        }
        &__text {
          align-items: center;
          p {
            width: 80%;
            text-align: center;
          }
        }
        .modalButtons {
          a {
            width: 120px;
            font-size: 14px;
            padding: 4px 0;
          }
        }
      }  
    }

`;


const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
  
    const { image, alt, name, technologies, description, site, repository } = project;
  
    return (
      <StyledProjectModal>
        <div className="overlay"></div>
        <div className="modalContent">
          <img src={image} alt={alt} />
          <div className="modalContent__text">
            <div>
              <h1>{name}</h1>
              <ul>
                {technologies && technologies.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <p>{description}</p>
            <div className="modalButtons">
              <a href={site} target="blank">visitar site</a>
              <a  className="green" href={repository} target="blank">ver repositório</a>
            </div>
          </div>
          <button onClick={onClose} className="close" >
            <IoClose />
          </button>
        </div>
      </StyledProjectModal>
    );
  };
  
  export default ProjectModal;