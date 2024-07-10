import styled from "styled-components"
import { Link as ScrollLink } from "react-scroll";
import { colors } from "../../../globalStyles";

//estilos
const StyledNavBar = styled.nav`
  width: 60%;
  border: 2px solid black;
  border-radius: 24px;

  ul {
    display: flex;
    justify-content: space-between;
    padding: 8px 40px;

    li {
      cursor: pointer;

      &:hover,
      &.active {
        font-weight: bold;
      }
    }
  }

  @media (max-width: 767px) {
    position: absolute;
    top: 84px;
    left: 0;

    width: 100%;
    border-radius: 0;
    display: ${props => (props.isMenuOpen ? "block" : "none")};
    background-color: ${colors.white};

    ul {
      padding: 0 16px;
      display: block;

      li {
        border-bottom: 1px solid black;
        padding: 16px 0;

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
`;

//Componente "Barra de navegação"
const NavBar = ({ activeSection, isMenuOpen }) => {
  return (
    <StyledNavBar isMenuOpen={isMenuOpen}>
      <ul>
        <li className={activeSection === "about" ? "active" : ""}>
          <ScrollLink to="about" smooth={true} duration={500}>
            sobre
          </ScrollLink>
        </li>
        <li className={activeSection === "skills" ? "active" : ""}>
          <ScrollLink to="skills" smooth={true} duration={500}>
            habilidades
          </ScrollLink>
        </li>
        <li className={activeSection === "projects" ? "active" : ""}>
          <ScrollLink to="projects" smooth={true} duration={500}>
            projetos
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500}>
            contato
          </ScrollLink>
        </li>
      </ul>
    </StyledNavBar>
  );
};

export default NavBar