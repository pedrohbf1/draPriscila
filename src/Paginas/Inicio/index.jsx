import styled from "styled-components";

const Inicio = () => {
    return (
        <DivEstilzada>
            {/* <section></section> */}
        </DivEstilzada>
    );
};

export default Inicio;

const DivEstilzada = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    section {
        background-image: url("https://firebasestorage.googleapis.com/v0/b/devpedro-b54e3.appspot.com/o/Quem%20sou%20eu.jpg?alt=media&token=d516ae41-3d07-4861-b08b-568abd4d55f2");
        height: 100vh; 
        width: 100%; 
        background-size: cover; 
        background-attachment: fixed;
        background-repeat: no-repeat;
    }
`;
