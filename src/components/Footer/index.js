import styled from "styled-components"
import { colors } from "../../globalStyles"

//estilos
const StyledFooter = styled.footer`
    background-color: ${colors.orange};
    padding: 16px 0;
    text-align: center;

    @media (max-width: 767px) {
        font-size: 14px;
        a {
            display: block;
        }
    }
`

//componente "Rodapé"
const Footer = () => {
    return (
        <StyledFooter>
            <p> &copy; 2024 - Anna Claudia Barros - <a href="https://github.com/annacbsdev/portfolio-jul24" target="blank">Ver repositório desse projeto</a></p>
        </StyledFooter>
    )
}

export default Footer