import React from "react";




function Card({ nombre, correo }) {
  return (
    <div>
      <h2>Información ingresada:</h2>
      <p>Nombre: {nombre}</p>
      <p>Correo: {correo}</p>
    </div>
  );
}


export default Card;
