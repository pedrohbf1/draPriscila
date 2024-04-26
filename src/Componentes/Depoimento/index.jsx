import styled from "styled-components"

const Depoimento = ({ depoimento }) => {
    return (
        <DivEstilaza>
        <p>{depoimento.depoimento}</p>
        <h2>{depoimento.nome}</h2>
        </DivEstilaza>
    )
}

export default Depoimento

const DivEstilaza = styled.footer`
    max-width: 400px;
    height: 100%;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 3px dotted;
    padding: 35px 0;
    p, h2 {
        margin: 0;
    }
    p {
        color: #40211E;
        font-size: 15px;
        font-family: 'MontserratAlternates-MediumItalic';
        @media (max-width: 250px) {
            font-size: 12px;
        }
    }
    h1 {
        color: #40211E;
    }
`