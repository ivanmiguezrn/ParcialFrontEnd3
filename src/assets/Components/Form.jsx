import React, {useState} from 'react';

import React from 'react';
import Input from './input';;
import Card from 'Card';



function Formulario() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [error, setError] = useState('');

    const handleChangeNombre = (event) => {
        setNombre(e.target.value);
    };

    const handleChangeCorreo = (event) => {
        setCorreo(e.target.value);
    };

    const handleSubmit = (event) => {
        e.preventDefault();
        if (nombre.trim().length < 3 || /^\s/.test(nombre)) {
            setError('Por favor, ingresa un nombre válido.');
            return;
        }
        if (correo.length < 6) {
            setError('Por favor, ingresa un correo válido.');
            return;
        }
        setError('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input label="Nombre:" value={nombre} onChange={handleChangeNombre} />
                <Input label="Correo:" value={correo} onChange={handleChangeCorreo} />
                <button type="submit">Enviar</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Card nombre={nombre} correo={correo} />
        </div>
    );
}
  
  export default Form;
  