import Collapse from "../components/Collapse"

const Teste = () => {
    return (
        <div>
          <h1>Exemplo com TypeScript</h1>
          <Collapse title="Mostrar detalhes">
            <p>Este conteúdo está dentro de um Collapse com TypeScript.</p>
          </Collapse>
          <Collapse title="Outro exemplo">
            <ul>
              <li>Item A</li>
              <li>Item B</li>
            </ul>
          </Collapse>
        </div>
      );
};


export default Teste