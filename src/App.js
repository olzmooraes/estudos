
import './App.css';
import Produtos from './Pages/Produtos';
import Carrinho from './Pages/Carrinho';

function App() {
  return (
    <div style={Style.app}>
      <div style={Style.selecaoTela}>
        <h3 style={Style.titulo}>Selecionar telas</h3>
        <p style={Style.itemMenu}>Produtos</p>
      </div>

      <div style={Style.tela}>
        <Produtos/>
      </div>
      <div style={Style.carrinho}>
        <Carrinho/>
      </div>
    </div>
  );
}

const Style = {
  app: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  selecaoTela: {
    width: "20vw",
    backgroundColor: "#f2f2f2",
    padding: "20px",
    borderRight: "1px solid #ddd",
  },
  tela: {
    width: "60vw",
    backgroundColor: "#fafafa",
    padding: "30px",
  },
  carrinho: {
    width: "20vw",
    backgroundColor: "#e6e6e6",
    padding: "20px",
    borderLeft: "1px solid #ccc",
  },
  titulo: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
    borderBottom: "2px solid #ccc",
    paddingBottom: "5px",
  },
  itemMenu: {
    padding: "8px 0",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default App;
