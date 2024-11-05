require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const cors= require('cors');




app.use(cors());
app.use(express.json());




const iniciar = async () => {
  try {
      
      app.listen(port, () => {
          console.log(`Servidor escuchando en http://localhost:${port}`);
      });
  } catch (error) {
      console.error('Error al iniciar el servidor:', error); 
  }
};

  
  iniciar();