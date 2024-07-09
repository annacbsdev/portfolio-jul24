import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { colors } from "../../globalStyles";
import contactBG from "../../assets/images/contactBG.png"

const StyledContact = styled.div`   
    background-image: url(${contactBG});
    background-size: cover;
    padding: 40px 0 100px 40px;

    h1 {
        font-size: 70px;
        margin: 80px 0 40px;
    }

    div {
        display: flex;
        margin-bottom: 20px;

        p {
            width: 400px;
            background-color: ${colors.white};
            font-size: 24px;
            padding: 16px;
            border: 2px solid black;
            border-bottom-left-radius: 16px;
            border-top-left-radius: 16px;
        }

        a {
            display: flex;
            align-items: center;
            background-color: ${colors.green};
            padding: 0 30px;
            border: 2px solid black;
            border-left: none;
            border-bottom-right-radius: 16px;
            border-top-right-radius: 16px;
            color: black;
            cursor: pointer;

            .icon {
                font-size: 40px;
            }
        }


        
    }
`

const Contact = () => {
    return (
        <StyledContact>
            <h1>entre em contato comigo:</h1>
            <div>
                <p>me chame no whatsapp</p>
                <a href="https://api.whatsapp.com/send?phone=5511978123539" target="blank">
                    <BsArrowRight className="icon"/>
                </a>
            </div>
            <div>
                <p>me mande um e-mail</p>
                <a href="mailto:annacbsilveira2002@gmail.com" target="blank"><BsArrowRight className="icon"/></a>
            </div>
            <div>
                <p>me adicione no linkedin</p>
                <a href="https://www.linkedin.com/in/anna-claudia-barros-silveira/" target="blank"><BsArrowRight className="icon"/></a>
            </div>
        </StyledContact>
    )
}

export default Contact