import Button from "@mui/material/Button";
import ProdutoCarrinho from "../Components/ProdutoCarrinho";
import { alignItems, display, flexDirection, gap, gridTemplateColumns, height, positions } from "@mui/system";

function Carrinho() {
  return (
    <div style={Style.carrinho}>
        <div style={Style.boxTitulo}>
            <h3 style={Style.titulo}>Carrinho</h3>
        </div>
        <div style={Style.boxProdutos}>
            <ProdutoCarrinho/>
            <ProdutoCarrinho/>
        </div>
        <div style={Style.boxComprar}>
            <Button variant="contained" size="small"> Comprar </Button>
        </div>
    </div>
  );
}
const Style = {
    carrinho:{
        display:"flex",
        flexDirection:"column",
        height:"100%"
    },
    titulo: {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "15px",
        borderBottom: "2px solid #ccc",
        paddingBottom: "5px",
    },
    boxTitulo:{
        heigth:"10%"
    },
    boxProdutos:{
        heigth:"70vh",
        display:"grid",
        gridTemplateColumns:"1fr",
        gap:"10px"
    },
    boxComprar:{
        display:"flex",
        alignItems:"end"
    },
}
export default Carrinho;