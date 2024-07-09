import styled from "styled-components";
//componentes
import NavBar from "./NavBar"
import NotificationBar from "./NotificationBar"
//ícones e cores
import { FaCertificate } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { colors } from "../../globalStyles";

//estilos
const HeaderContainer = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 8px;
    border-bottom: 2px solid black;
    background-color: ${colors.white};

    img {
        width: 30px;
    }

    .icon {
        margin-right: 16px;
        font-size: 30px;
        color: black;
    }

`

//componente "Cabeçalho"
const Header = ({ activeSection }) => {
    return (
      <HeaderContainer>
        <NotificationBar />
        <StyledHeader>
          <FaCertificate className="icon" />
          <NavBar activeSection={activeSection} />
          <div>
            <a href="https://github.com/annacbsdev" target="blank"><FaGithub className="icon" /></a>
            <a href="https://www.linkedin.com/in/anna-claudia-barros-silveira/" target="blank"><FaLinkedin className="icon" /></a>
          </div>
        </StyledHeader>
      </HeaderContainer>
    );
  };

export default Header