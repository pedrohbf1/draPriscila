import styled from "styled-components"
import Depoimento from "../../Componentes/Depoimento"

const Depoimentos = () => {

    const depoimentos = [
        {
            nome: "Juliana",
            depoimento: "Entrei em contato com a Doutora Alicia em um momento muito difícil da minha vida e fui atendida com acolhimento, carinho, paciência e afeto. Me senti ouvida, senti que minha dor foi validada e assim consegui me abrir. Ela é uma profissional maravilhosa e só tenho a agradecer por tê-la encontrado."
        },
        {
            nome: "Indiana",
            depoimento: "Iniciar a terapia, foi, definitivamente, muito positiva na minha vida. Dra Alicia esteve presente no meu momento mais doloroso, me acolhendo e dando todo suporte necessário para compreender meus sentimentos e emoções. Apesar da resiliência em falar sobre determinados assuntos, percebo que iniciar este processo tem me ajudado a compreender e conviver com as minhas dificuldades diárias. Agradeço toda a atenção que recebi em casa encontro e a todo trabalho que vem sendo realizado."
        }
    ]

    return (
        <MainEstilizado>
            <div>
                <span>
                    <img src="https://draalicia.com.br/wp-content/uploads/2022/11/Aspas-abertura-300x300.png" alt="Incremento" />
                </span>
                <section>
                    <h1>Depoimentos</h1>
                    <AsideEstilizada>
                        {depoimentos.map((depoimento) => {
                            return <Depoimento depoimento={depoimento} />
                        })}
                    </AsideEstilizada>
                </section>
                <span style={{alignItems: "end", display: "flex", justifyContent: "end"}}>
                    <img src="https://draalicia.com.br/wp-content/uploads/2022/11/Aspas-fecha.png" alt="Incremento" />
                </span>
                <ParagrafoEstilizada>
                    Você pode enviar o seu depoimento pelo e-mail:  <strong>teste@teste.com.br</strong>
                </ParagrafoEstilizada>
            </div>
        </MainEstilizado>
    )
}

export default Depoimentos

const MainEstilizado = styled.main`
    width: 100%;
    background-image: url("https://draalicia.com.br/wp-content/uploads/2022/11/BG-Depoimento3-1.jpg");
    background-size: cover;
    box-sizing: border-box;
    div {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-sizing: border-box;
        padding: 50px 0;
        img {
            width: 150px;
            height: 150px;
            @media (max-width: 950px) {
                display: none;
            }
        }
    }
    section {
        display: flex;
        text-align: center;
        flex-direction: column;
        h1 {
            margin: 0;
            padding: 0;
            color: #40211E;
            font-family: 'MontserratAlternates-MediumItalic';
            font-size: 50px;
            @media (max-width: 400px ) {
                font-size: 40px;
            }
            @media (max-width: 350px ) {
                font-size: 30px;
            }
            @media (max-width: 250px ) {
                font-size: 22px;
            }
            @media (max-width: 180px ) {
                font-size: 18px;
            }
        }
    }
`

const AsideEstilizada = styled.aside`
    width: 100%;
    display: flex;
    gap: 100px;
    justify-content: center;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`

const ParagrafoEstilizada = styled.p`
    color: #D97373;
    font-size: 18px;
    @media (max-width: 650px) {
        font-size: 15px;
    }
    @media (max-width: 250px) {
        font-size: 13px;
    }
    strong {
        color: #28303d;
        font-family: 'MontserratAlternatesBold';
    }
`