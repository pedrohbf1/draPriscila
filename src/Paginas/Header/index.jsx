import React, { useState } from "react";
import styled from "styled-components";
import Logo from '/public/LOGO_Priscilla_Santos.png';
import { IoReorderThree, IoExit  } from "react-icons/io5";

const Header = () => {
    const [selecionarItem, setSelecionarItem] = useState(null);

    const marcaItem = (index) => {
        setSelecionarItem(index);
    };

    const [mobileIcon, setMobileIcon] = useState(false)

    function exibeMobileIcon () {
        setMobileIcon(!mobileIcon)
    }

    return (
        <HeaderEstilizada>
            <img src={Logo} alt="Logo Priscilla Santos" />
            <ListaEstilizada>
                <li onClick={() => marcaItem(0)}className={selecionarItem === 0 ? "selected" : ""}>Início</li>
                <li onClick={() => marcaItem(1)}className={selecionarItem === 1 ? "selected" : ""}>Tratamentos</li>
                <li onClick={() => marcaItem(2)} className={selecionarItem === 2 ? "selected" : ""}>A Psiquiatria</li>
                <li onClick={() => marcaItem(3)}className={selecionarItem === 3 ? "selected" : ""}>Quem sou eu</li>
                <li onClick={() => marcaItem(4)} className={selecionarItem === 4 ? "selected" : ""}>Depoimentos</li>
                <li onClick={() => marcaItem(5)} className={selecionarItem === 5 ? "selected" : ""}>Contato</li>
            </ListaEstilizada>
            <Mobile>
                {!mobileIcon ? <IoReorderThree style={{cursor: "pointer", color: "#F2B694"}}  size={40} onClick={() => exibeMobileIcon()} /> : <IoExit size={40} style={{cursor: "pointer", color: "#F2B694"}} onClick={() => exibeMobileIcon()} /> }
                {mobileIcon &&
                    <ul>
                        <li onClick={() => marcaItem(0)}className={selecionarItem === 0 ? "selected" : ""}>Início</li>
                        <li onClick={() => marcaItem(1)}className={selecionarItem === 1 ? "selected" : ""}>Tratamentos</li>
                        <li onClick={() => marcaItem(2)} className={selecionarItem === 2 ? "selected" : ""}>A Psiquiatria</li>
                        <li onClick={() => marcaItem(3)}className={selecionarItem === 3 ? "selected" : ""}>Quem sou eu</li>
                        <li onClick={() => marcaItem(4)} className={selecionarItem === 4 ? "selected" : ""}>Depoimentos</li>
                        <li onClick={() => marcaItem(5)} className={selecionarItem === 5 ? "selected" : ""}>Contato</li>
                    </ul>
                }
            </Mobile>
            <button>
                Agendamento
            </button>
        </HeaderEstilizada>
    );
};

export default Header;

const HeaderEstilizada = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    img {
        max-width: 193px;
        height: 100px;
    }
    button {
        padding: 5px 15px;
        background-color: #F2B694;
        border: none;
        color: white;
        cursor: pointer;
        border-radius: 5px;
        @media (max-width: 350px) {
            margin-top: 10px;
        }
    }
    @media (max-width: 350px) {
        flex-direction: column;
    }
`;

const ListaEstilizada = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 20px;
    li {
        color: #CF9077;
        cursor: pointer;
        &:hover {
            color: #F2B694;
        }
    }
    .selected {
        color: #F2B694;
    }
    @media (max-width: 960px) {
        display: none;
    }
`;

const Mobile = styled.section`
    display: none;
    @media (max-width: 960px) {
        display: block;
        position: relative;
    }
    ul {
        background-color: white;
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 40px;
        gap: 15px;
        border-radius: 10px;
        list-style-type: none;
        li {
            color: #CF9077;
            cursor: pointer;
            &:hover {
                color: #F2B694;
            }
        }
        .selected {
            color: #F2B694;
        }
        @media (max-width: 300px) {
            left: -50px;
        }
        @media (max-width: 180px) {
            left: -60px;
        }
    }
`