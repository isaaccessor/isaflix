import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
{
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);
  
  
    function setValue(chave, valor) {
      // chave: nome, descricao, bla, bli
      setValues({
        ...values,
        [chave]: valor, // nome: 'valor'
      })
    }

    function handleChange(infosDoEvento) {
        setValue(
          infosDoEvento.target.getAttribute('name'),
          infosDoEvento.target.value
        );
    }


    return (
        <PageDefault>
            <div>
                <h1>Cadastro de Categoria: {valoresIniciais.nomeCateg}</h1>

                { /* 
                    Para deixar o background com uma cor alterando dinamicamente
                    <form style={{ background: nomeCategoria}} onSubmit={function handleSubmit(infosDoEvento) {    
                */ }
                <form onSubmit={function handleSubmit(infosDoEvento) {
                    infosDoEvento.preventDefault();
                    setCategorias([
                        ...categorias,
                        values
                    ]);

                    setValues(valoresIniciais)
                }}>
                
                    <FormField
                        label="Nome da Categoria"
                        type="text"
                        name="nome"
                        value={values.nome}
                        onChange={handleChange}
                        />
                    
                { /*
                    <FormField
                    label="Descrição:"
                    type="????"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                    />
                }
                    
                    {/* State */}
                    <div>
                        <label>
                            Nome da Categoria:
                            <input
                                type="text"
                                value={valoresIniciais.nomeCateg}
                                onChange={function funcaoHandler (infosDoEvento) {
                                    /* console.log('[nomeCategoria]', nomeCategoria);
                                    console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
                                    setValoresFormulario(infosDoEvento.target.value); */
                                    setValue('nome', infosDoEvento.target.value)
                                }}
                            />
                        </label>
                    </div>

                    <div>
                    <label>
                            Descrição:
                            <textarea
                                type="text"
                                value={valoresIniciais.descricao}
                                onChange={function funcaoHandler (infosDoEvento) {
                                    /* console.log('[nomeCategoria]', nomeCategoria);
                                    console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
                                    */
                                   //setValoresDoFormulario('desc', infosDoEvento.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div>
                    <label>
                            Cor:
                            <input
                                type="color"
                                value={valoresIniciais.cor}
                                onChange={function funcaoHandler (infosDoEvento) {
                                    /* console.log('[nomeCategoria]', nomeCategoria);
                                    console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);*/
                                    //setValoresDoFormulario('cor', infosDoEvento.target.value);
                                }}
                            />
                        </label>
                    </div>

                        <button>
                           Cadastrar
                        </button>
                </form>

                <ul>
                    {/* Com as chaves, posso exibir a lista de categorias */
                    categorias.map(( categoria, indice ) => {
                        return (
                            <li key={`${categoria}${indice}`}>
                                {categoria}
                            </li>
                        )
                    })}
                </ul>

                <Link to="/">
                    Ir para Home
                </Link>
            </div>
        </PageDefault>
    )
}

export default CadastroCategoria;