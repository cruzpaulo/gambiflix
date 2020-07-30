import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const iniValues = {
        name: '',
        description: '',
        color: '#000000',
    };

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(iniValues);
    
    function setValue(key, value) {
        setValues({...values, [key]: value})
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setValue(name, value);
        // setValue(e.target.getAttribute('name'), e.target.value);
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.name}</h1>
            <form onSubmit={function handleSubmit(e) {
                e.preventDefault();
                setCategorias([...categorias, values]);
                setValues(iniValues);
            }}>
                <FormField 
                    label="Nome da Categoria: "
                    type="text"
                    name="name"
                    value={values.name} 
                    onChange={handleChange} />
                
                <div>
                    <label>Descrição: 
                        <textarea
                            type="text"
                            name="description"
                            value={values.description} 
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <FormField 
                    label="Cor da Categoria: "
                    type="color"
                    name="color"
                    value={values.color} 
                    onChange={handleChange} />
                    
                <button>Cadastrar</button>
            </form>
            <ul>
                { categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria.name}${indice}`}>{categoria.name}</li>
                    )
                }) }
            </ul>
            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;