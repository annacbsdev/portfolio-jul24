import sino from '../../../assets/images/sino.png'
import styled from 'styled-components'
import { colors } from '../../../globalStyles'

//estilos
const StyledNotificationBar = styled.div`
    background-color: ${colors.green};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 0;

    img {
        width: 24px;
    }

    p {
        font-size: 14px;
    }
`

//componente barra de notificação
const NotificationBar = () => {
    return (
        <StyledNotificationBar>
            <img src={sino} alt='Sino de alerta'/>
            <p>#OpenToWork - Vamos trabalhar juntos!</p>
        </StyledNotificationBar>
    )

}

export default NotificationBar