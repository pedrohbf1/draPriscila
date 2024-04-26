import styled from "styled-components"
import { FaCaretRight, FaCaretUp } from "react-icons/fa";
import { useState } from "react";

const Doencas = ({ doenca }) => {

    const [abrirDoenca, setAbrirDoenca] = useState("desligado")
    
    function toggleAbreDoenca() {
        setAbrirDoenca(prevState => prevState === "desligado" ? "ligado" : "desligado");
    }

    return (
        <DoencaSection onClick={() => toggleAbreDoenca()} >
            <SectionTitle ligado={abrirDoenca}>
                {abrirDoenca == "desligado" ? <FaCaretRight size={25} /> : <FaCaretUp size={25} /> }
                <h2>{doenca.nome}</h2>
            </SectionTitle>
            <aside>
                {abrirDoenca == "ligado" &&
                    <p>
                        {doenca.descricao}
                    </p>
                }
            </aside>
        </DoencaSection>
    )
}

export default Doencas

const DoencaSection = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 3px dotted;
    cursor: pointer;
    margin-bottom: 15px;
    p {
        line-height: 30px;
        font-size: 16px;
        @media (max-width: 200px) {
            font-size: 14px;
        }
    }
`

const SectionTitle = styled.aside`
    align-items: center;
    display: flex;
    gap: 5px;
    color: ${props => props.ligado == "ligado" ? "#D97373" : "black"};
    h2 {
        @media (max-width: 670px) {
            font-size: 20px;
        }
        @media (max-width: 450px) {
            font-size: 18px;
        }
        @media (max-width: 300px) {
            font-size: 16px;
        }
    }
`