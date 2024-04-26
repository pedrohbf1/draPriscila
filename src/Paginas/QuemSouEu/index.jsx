import styled from "styled-components";

const QuemSouEu = () => {
    return (
        <MainEstilizada>
            <Section>
                <div>
                    <aside>
                        <ImageSpan>
                            <img src="https://firebasestorage.googleapis.com/v0/b/devpedro-b54e3.appspot.com/o/Quem%20sou%20eu.jpg?alt=media&token=d516ae41-3d07-4861-b08b-568abd4d55f2" alt="" />
                        </ImageSpan>
                        <h1>Quem sou eu ?</h1>
                        <p>
                            Nasci em Divinópolis - MG, terra querida, onde tenho ainda minha “grande família” e bons
                            amigos.
                            Meus pais, Libério e Ivone (eternamente viva em mim) foram desbravadores e, mesmo não
                            tendo eles oportunidade de estudo, fizeram o possível (e impossível) para que eu pudesse
                            estudar. E só posso agradecer por isto (e por tanto)!
                            Aos 19 anos eu me mudei para Belo Horizonte para estudar na universidade dos meus sonhos,
                            UFMG, onde cresci, amadureci e me tornei uma pessoa melhor.
                            Esta universidade me permitiu conhecer outro tanto de bons amigos e os melhores mestres
                            que eu poderia ter. Ensinaram-me sobre medicina, cuidado e vida. Aprendi também sobre a
                            dor, sobre o sofrimento humano, sobre dúvidas, escolhas e caminho; sobre o poder da
                            transformação, das mudanças, da fé.
                            Todos estes aprendizados e vivências me conduziram à escolha da psiquiatria como área de
                            atuação, o que não diminui meu interesse por toda vastidão da medicina - esta ciência que
                            tanto me encanta.
                            Encontrei também no exercício da docência uma forma de retribuir todos os ensinamentos
                            que recebo todos os dias, além de partilhar e aprender cada dia mais. Hoje atuo como
                            professora na graduação médica, pós-graduação em psiquiatria e como palestrante a convite
                            de instituições.
                            Belo Horizonte se tornou minha nova morada. Aqui conheci meu esposo Hugo, parceiro e
                            cúmplice de vida, com quem hoje tenho dois filhos – Júlia e Gabriel – que são meu amor e
                            loucura diária.
                            Não há como saber qual teria sido o meu “melhor caminho” (existiria isto?)... Mas o que me
                            trouxe até aqui me fez assim como sou e me desafia a ser cada dia melhor como profissional,
                            mãe, filha, esposa, amiga, professora, mulher e tantos outros papéis que posso e devo
                            desempenhar!
                            Seja bem-vindo a este espaço, que tem a minha cara mas será construído por todos que por
                            aqui passarem! Vamos “com-partilhar” sobre saúde, psiquiatria, vida e amor.
                        </p>
                    </aside>
                </div>
            </Section>
        </MainEstilizada>
    );
};

export default QuemSouEu;

const MainEstilizada = styled.main`
    width: 100%;
    background-image: url("https://draalicia.com.br/wp-content/uploads/2022/11/BG-Papel.jpg");
    background-size: cover;
    background-attachment: fixed;
    box-sizing: border-box;
`;

const Section = styled.section`
    background-color: rgba(255, 255, 255, 0.6); 
    width: 100%;
    padding: 20px 0;
    box-sizing: border-box;
    div {
        width: 70%;
        margin: 30px auto;
        box-sizing: border-box;
        display: flex;
        gap: 30px;
        flex-direction: column;
        align-items: center;
        aside {
            
            display: flex;
            flex-direction: column;
            gap: 15px;
            h1 {
                margin: 0;
                @media (max-width: 750px) {
                    font-size: 22px;
                }
            }
            p {
                margin: 0;
                color: #D97373;
                line-height: 40px;
                font-size: 16px;
                @media (max-width: 750px) {
                    font-size: 15px;
                }
                @media (max-width: 570px) {
                    line-height: 30px;
                }
            }
        }
        img {
            width: 400px;
            height: 550px;
            border-radius: 25px;
            box-shadow: 15px 15px 20px 0px rgba(0, 0, 0, 0.2);
            @media (max-width: 1000px) {
                width: 380px;
                height: 520px;
                margin-top: 30px;
            }
            @media (max-width: 690px) {
                width: 350px;
                height: 450px;
            }
            @media (max-width: 500px) {
                width: 250px;
                height: 350px;
            }
            @media (max-width: 320px) {
                width: 200px;
                height: 300px;
            }
            @media (max-width: 260px) {
                width: 130px;
                height: 230px;
            }
        }
    }
`;

const ImageSpan = styled.span`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
`