import styled from "styled-components"
import Doencas from "../../Componentes/Doencas";

const Tratamentos = () => {

    const doencas = [
        {
          nome: "Transtorno do Pânico",
          descricao: "É uma regulação anormal do sistema nervoso central (noradrenérgicos) com aumento de três principais neurotransmissores: noradrenalina, serotonina e GABA. O início dos sintomas costumam estar associados a fatores ambientais ou psicológicos e requer tratamento profissionalizado.\n\nOs ataques de pânico são períodos súbitos de intenso medo ou apreensão que pode durar de minutos a horas (20-30 min e raramente mais de 1 hora), no qual ocorrem 4 ou mais dos seguintes sintomas: taquicardia, sudorese, tremores, sensação de falta de ar, sensação de asfixia, dor ou desconforto torácico, náusea ou desconforto abdominal, sensação de tontura, parestesias, medo de perder o controle ou enlouquecer e medo de morrer. Os sintomas podem desaparecer de forma rápida ou gradual.\n\nPara ser considerado um Transtorno de Pânico pelo menos um dos ataques deve ser seguido de um mês ou mais de uma ou de ambas características: apreensão ou preocupação persistente acerca de ataques de pânicos adicionais ou sobre suas consequências; uma mudança ruim significativa no comportamento relacionada aos ataques, como evitação.\n\nO tratamento é feito com medicações adequadas para cada estágio dos sintomas e suas intensidade e psicoterapia (Terapia Cognitivo Comportamental).\n\nCaso precise de ajuda, agende sua avaliação comigo por teleatendimento ou, presencialmente, na região metropolitana de Belo Horizonte, na cidade de Betim."
        },
        {
          nome: "Transtorno de Ansiedade Generalizada (TAG)",
          descricao: "A ansiedade e preocupação são contínuas e excessivas, acompanhadas por tensão ou inquietação motora. A ansiedade é excessiva e interfere em mais de um aspecto da vida da pessoa. Esse padrão deve ocorrer na maioria dos dias por pelo menos 6 meses, a tensão motora manifesta-se mais comumente como tremor, inquietação e cefaleias e está associada a 3 ou mais dos seguintes sintomas: inquietação ou sensação de estar com os nervos à flor da pele, fatigabilidade, dificuldade em concentrar-se ou sensações de “brancos” na mente, irritabilidade, tensão muscular, perturbação do sono.\n\nO tratamento requer avaliação médica, com medicações de acordo com o tempo e intensidade dos sintomas e psicoterapia.\n\nCaso precise de ajuda, agende sua avaliação comigo por teleatendimento ou, presencialmente, na região metropolitana de Belo Horizonte, na cidade de Betim."
        },
        {
          nome: "Transtorno Bipolar",
          descricao: "No nosso cérebro existe uma regulação interna de humor em resposta a ambientes externos, tendo como base duas formas principais de regulação: reativa e não-reativa.\n\nNo Transtorno Bipolar podemos ver sintomas desses dois polos, são os que chamamos de: Mania ou Hipomania e Depressão Bipolar. A mania é quando o sistema de reatividade está majoritariamente ativado, com alteração tanto no comportamento quanto na cognição, podendo ter: euforia, aumento de autoestima em excesso, taquipsiquismo (pensamento acelerado), alteração do sono (insônia, redução do sono ou ativação para dormir), aumento de impulsos, entre outros sintomas, inclusive sintomas psicóticos podem estar presentes em estado de mania.\n\nNa hipomania, os sintomas também são ativadores, mas menos intensos que a mania e não há psicose. Durante a depressão bipolar, observamos majoritariamente os sintomas de não-reatividade, como: falta de prazer em fazer as coisas, falta de vontade em fazer as coisas, humor triste a maior parte do tempo, lentificação do pensamento e do movimento do corpo, sentimento de desesperança, pensamentos de morte e até mesmo ideação suicida.\n\nO diagnóstico deve ser feito por um médico com experiência no assunto e o tratamento requer medicação psiquiátrica específica para cada fase e intensidade de sintoma e acompanhamento psicoterápico.\n\nCaso precise de ajuda, agende sua avaliação comigo por teleatendimento ou, presencialmente, na região metropolitana de Belo Horizonte, na cidade de Betim."
        },
        {
          nome: "Depressão Unipolar",
          descricao: "Depressão é um termo que abrange muitos transtornos que tem sintomas depressivos (como transtorno bipolar, disfórico pré-menstrual ou depressão mista).\n\nA Depressão unipolar é caracterizada pela presença de humor deprimido, redução da energia, sentimento de peso no corpo e de inutilidade, redução no prazer em fazer as coisas, pensamento mais lentificado e confuso, se isola mais das pessoas, falta a motivação e pode ter pensamentos de morte ou ideação suicida. Esses sintomas precisam estar pelo menos 2 semanas a maior parte do tempo. Toda essa alteração ocorre por diversos motivos, ou seja, é multifatorial a origem da depressão. Tanto o meio ambiente, quanto a biologia e as vivências que o paciente teve até agora influenciam na origem e no despertar desses sintomas.\n\nO tratamento da depressão é muito bem estudado e atualmente temos diversos meios de tratar esse transtorno e melhorar o sofrimento da pessoa, retornando a qualidade de vida. Ele é realizado com medicação dependendo da intensidade e frequência dos sintomas e com psicoterapia.\n\nCaso precise de ajuda, agende sua avaliação comigo por teleatendimento ou, presencialmente, na região metropolitana de Belo Horizonte, na cidade de Betim."
        }
    ];

    return (
        <MainEstilizado>
            <section>
                <div>
                    <span>
                        <Title>Se é isso que você procura para tratar depressão, ansiedade, transtorno bipolar, TDAH e outros sofrimentos afetivos, pode contar comigo!</Title>
                        <p>Atendo por teleatendimento em todo o mundo, além de consultas presenciais e domiciliares na região metropolitana de Divinópolis.</p>
                    </span>

                    <SectionDoencas>
                        <h1>Entenda um pouco mais...</h1>
                        {doencas.map((doenca, index) => {
                            return <Doencas key={index} doenca={doenca} />
                        })}
                        <button>Clique aqui e agende sua consulta!</button>
                    </SectionDoencas>
                </div>
            </section>
        </MainEstilizado>
    )
}

export default Tratamentos

const MainEstilizado = styled.main`
    background-image: url("https://draalicia.com.br/wp-content/uploads/2022/10/BG-Icones.jpg");
    width: 100%;
    box-sizing: border-box;
    background-size: cover;
    background-attachment: fixed;
    box-sizing: border-box;
    @media (max-width: 880px) {
        background-position: -150px 0;
    }
    @media (max-width: 700px) {
        background-position: -300px 0;
    }
    @media (max-width: 550px) {
        background-position: -400px 0;
    }
    section {
        box-sizing: border-box;
        background-color: #FFF;
        width: 100%;
        opacity: 0.75;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        div {
            height: 100%;
            box-sizing: border-box;
            width: 70%;
            margin: 50px auto ;
            span {
                display: flex;
                flex-direction: column;
                gap: 15px;
                p {
                    font-size: 18px;
                    color: #808080;
                    margin: 0;
                    @media (max-width: 800px) {
                        font-size: 15px;
                    }
                    @media (max-width: 500px) {
                        font-size: 13px;
                    }
                }
            }
        }
    }
`

const Title = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 22px;
    color: black;
    box-sizing: border-box;
    @media (max-width: 900px) {
        font-size: 20px;
    }
    @media (max-width: 800px) {
        font-size: 18px;
    }
    @media (max-width: 500px) {
        font-size: 15px;
    }
`

const SectionDoencas = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    h1 {
        color: #D97373;
        font-size: 42px;
        margin: 0;
        @media (max-width: 810px) {
            font-size: 35px;
        }
        @media (max-width: 670px) {
            font-size:28px;
        }
        @media (max-width: 480px) {
            font-size:25px;
        }
        @media (max-width: 240px) {
            font-size:20px;
        }
    }
    button {
        width: 40%;
        padding: 15px;
        border-radius: 10px;
        border: none;
        background-color: #D97373;
        color: white;
        box-sizing: border-box;
        opacity: 1;
        cursor: pointer;
        @media (max-width: 475px) {
            width: 100%;
        }
    }
`