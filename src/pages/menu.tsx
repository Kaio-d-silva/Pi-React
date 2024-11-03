import React from 'react';
import '../css/menu.css'
import '../img/fundoBotoes.png'

const Menu = () => {
  return (
    <>
      <div style={{backgroundColor: "#71cd97"}}>
        <header>
          <a style={{ marginLeft: "15px", }}><b>Tel. (67) 3322 - 9911</b></a>
          <a style={{ marginRight: "15px" }}>
            <b>Suporte</b>
          </a>
        </header>
        <main>
          <div className="InformacoesDoUsuario">
            <p style={{ marginLeft: "40px" }}><strong>Olá</strong></p>
            <p style={{ marginRight: "40px", marginLeft: "auto" }}>Carlos Almeida</p>
          </div>


          <div className="CampoBotoes">

            <div style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              height: "40%",
              marginTop: "80px",
            }}>

              <button type="button">Agenda</button>
              <button type="button">Exames</button>
            </div>

            <div style={{ display: "flex", width: "58%", justifyContent: "space-around", height: "50%" }}>
              <button type="button">Dialise</button>
            </div>

          </div>
        </main>
      </div>
      <footer></footer>
    </>
  );
};
export default Menu