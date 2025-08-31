import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Checkbox from '@mui/material/Checkbox';

export default function MediaControlCard() {
  return (
    <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h8">
                Nome do produto
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 0.5, pb: 1 }}>
                <Checkbox/>
                <IconButton>
                    <RemoveCircleIcon/>
                </IconButton>
                <IconButton >1</IconButton>
                <IconButton>
                    <AddCircleIcon/>
                </IconButton>
            </Box>
        </Box>
        <CardMedia
            component="img"
            sx={{ width: 90 }}
            image="logo192.png"
            alt="logo"
        />
    </Card>
  );
}