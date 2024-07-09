
import styled from 'styled-components';
import { colors } from '../../../globalStyles';

const StyledSkillsCard = styled.div`
    max-width: 400px;
    width: 100%;
    border-radius: 16px;
    border: 2px solid black;
    padding: 8px;

    h1 {
        font-size: 16px;
        border: 2px solid black;
        margin-top: 8px;
        padding: 16px;
        text-align: center;
        border-bottom-right-radius: 16px;
        border-bottom-left-radius: 16px;
    }
`

const StyledUl = styled.ul`
  background-color: ${(props) => props.bgColor};
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;

  li {
    background-color: ${colors.white};
    border: 2px solid black;
    border-radius: 24px;
    padding: 8px 16px;
    font-weight: bold;
    text-transform: lowercase;
  }
`;

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