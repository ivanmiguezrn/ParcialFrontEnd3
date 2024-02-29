import React, { useState } from 'react';
import Input from './input';
import Card from './Card'; // Corregido el nombre del componente y la ruta

function Formulario() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [error, setError] = useState('');

    const handleChangeNombre = (event) => {
        setNombre(event.target.value); // Corregido el nombre del parámetro
    };

    const handleChangeCorreo = (event) => {
        setCorreo(event.target.value); // Corregido el nombre del parámetro
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Corregido el nombre del parámetro
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

export default Formulario;