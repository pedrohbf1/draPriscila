import styled from "styled-components"
import Logo from '/public/Simbolo-removebg-preview.png';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterEstilizado>
            <div>
                <aside>
                    <img src={Logo} alt="Logo Priscilla Santos" />
                    <span>
                        Atentimento à consulta presencial de <br />
                        <strong>Psiquiatria em Divinópolis/MG</strong>, ou consultas online <br />
                        para o mundo todo
                    </span>
                </aside>

                <section>
                    <span>
                        <p><strong>Endereço</strong></p>
                        <p>R. João Lopes Cançado, 489 <br /> Chapadão, Pitangui - MG, 35650-000</p>
                        <p ><strong>Entre em contato pelos links abaixo</strong></p>
                        <footer>
                            <FaWhatsapp style={{cursor: "pointer"}}  size={40}/>
                            <FaInstagram style={{cursor: "pointer"}} size={40}/>
                        </footer>
                    </span>
                </section>

            </div>

            <Finalizador>
                Desenvolvido por Pedro Henrique para Dra. Priscilla Santos – 2024
            </Finalizador>
        </FooterEstilizado>
    )
}

export default Footer

const FooterEstilizado = styled.footer`
    width: 100%;
    background-color: #40211E;
    flex-direction: column;
    display: flex;
    box-sizing: border-box;
    gap: 20px;
    div {
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: 50px auto;
        box-sizing: border-box;
        @media (max-width: 750px) {
            flex-direction: column;
            gap: 40px;
            align-items: center;
        }
        aside {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            gap: 10px;
            img {
                width: 100px;
                height: 100px;
            }
            span {
                color: #FFFF;
                font-size: 18px;
                strong {
                    font-family: 'MontserratAlternatesBold';
                }
            }
        }

    section {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: 100%;
        span {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
            gap: 20px;
            box-sizing: border-box;  
            p {
                margin: 0;
                font-size: 18px;
                text-align: end;
                color: #FFF;
                strong {
                    font-family: 'MontserratAlternatesBold';
                }
            }
            footer {
                display: flex;
                align-items: end;
                justify-content: end;
                gap: 20px;
                margin: 0;
                text-align: end;
                box-sizing: border-box;
                align-self: flex-end;
                color: white;
            }
        }
    }
    }
`

const Finalizador = styled.header`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;
    display: flex;
    box-sizing: border-box;
    font-size: 13px;
    color: white;
    font-family: 'MontserratAlternates-MediumItalic';
`