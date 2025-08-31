import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';


function Produto() {
  const [contador, setContador] = React.useState(0)
  function ModificarContador(operator){
    if(operator === "adicionar"){
      setContador(contador + 1)
    }else if(contador !== 0){
      setContador(contador - 1)
    }else{
      setContador(0)
    }
  }
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="logo192.png"
        title="logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Produto
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Descrição do produto
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 0.5, pb: 1 }}>
        <IconButton onClick={()=>ModificarContador("subtrair")}>
          <RemoveCircleIcon />
        </IconButton>
        <Typography>
          <text>{contador}</text>
        </Typography>
        <IconButton onClick={()=>ModificarContador("adicionar")}>
          <AddCircleIcon />
        </IconButton>
      </Box>
      <CardActions>
        <Button variant="outlined" size="small"> Carrinho</Button>
      </CardActions>
    </Card>
  );
}

export default Produto;