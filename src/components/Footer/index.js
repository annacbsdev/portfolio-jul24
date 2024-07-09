import styled from "styled-components"
import { colors } from "../../globalStyles"

const StyledFooter = styled.footer`
    background-color: ${colors.orange};
    height: 20vh;
`

const Footer = () => {
    return (
        <StyledFooter>
            <p>Anna Claudia - 2024</p>
            <p>Ver repositório do portfólio</p>
        </StyledFooter>
    )
}

export default Footer