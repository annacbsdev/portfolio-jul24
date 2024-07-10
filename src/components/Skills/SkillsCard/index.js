import styled from 'styled-components';
import { colors } from '../../../globalStyles';

//estilos
const StyledSkillsCard = styled.div`
    max-width: 400px;
    width: 100%;

    padding: 8px;
    border-radius: 16px;
    border: 2px solid black;

    &:hover {
        transform: scale(1.20);
    }

    h1 {
        margin-top: 8px;
        padding: 16px;
        border: 2px solid black;
        border-bottom-right-radius: 16px;
        border-bottom-left-radius: 16px;

        font-size: 16px;
        text-align: center;
    }
`

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;

  padding: 16px;
  border: 2px solid black;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  
  background-color: ${(props) => props.bgColor};

  li {
      padding: 8px 12px;
      border: 2px solid black;
      border-radius: 24px;

      font-weight: bold;
      text-transform: lowercase;
      
      background-color: ${colors.white};
  }
`;

//componente "Card de habilidades"
const SkillsCard = ({list, title, background}) => {

    return (
            <StyledSkillsCard>
                <StyledUl bgColor={background}>
                    {list}
                </StyledUl>
                <h1>{title}</h1>
            </StyledSkillsCard>
        
    )
}

export default SkillsCard