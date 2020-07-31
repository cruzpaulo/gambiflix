import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const iniValues = {
    name: '',
    description: '',
    color: '#000000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(iniValues);

  function setValue(key, value) {
    setValues({ ...values, [key]: value });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValue(name, value);
    // setValue(e.target.getAttribute('name'), e.target.value);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://gambiflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategorias([
          ...response,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>
      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategorias([...categorias, values]);
        setValues(iniValues);
      }}
      >
        <FormField
          label="Nome da Categoria: "
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.name}`}>{categoria.name}</li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
