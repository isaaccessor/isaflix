import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroCategoria() 
{
    const [categorias, setCategorias] = useState(['Teste']);
    const [nomeCategoria, setNomeCategoria] = useState('Valor Inicial');

    return (
        <PageDefault>
            <div>
                <h1>Cadastro de Categoria: {nomeCategoria}</h1>

                { /* 
                    Para deixar o background com uma cor alterando dinamicamente
                    <form style={{ background: nomeCategoria}} onSubmit={function handleSubmit(infosDoEvento) {    
                */ }
                <form style={{ background: nomeCategoria}} onSubmit={function handleSubmit(infosDoEvento) {
                    infosDoEvento.preventDefault();
                    /* console.log('Você tentou enviar o form') */

                    setCategorias([
                        /* os três pontinhos servem para dizer que você pode pegar todo o conteúdo que já existe */ 
                        ...categorias,
                        nomeCategoria
                    ]);
                }}>
                    {/* State */}
                    <div>
                        <label>
                            Nome da Categoria:
                            <input
                                type="text"
                                value={nomeCategoria}
                                onChange={function funcaoHandler (infosDoEvento) {
                                    console.log('[nomeCategoria]', nomeCategoria);
                                    console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
                                    setNomeCategoria(infosDoEvento.target.value);
                                }}
                            />
                        </label>
                    </div>

                    <div>
                    <label>
                            Descrição:
                            <textarea
                                type="text"
                                value={nomeCategoria}
                                onChange={function funcaoHandler (infosDoEvento) {
                                    console.log('[nomeCategoria]', nomeCategoria);
                                    console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
                                    setNomeCategoria(infosDoEvento.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div>
                    <label>
                            Cor:
                            <input
                                type="color"
                                value={nomeCategoria}
                                onChange={function funcaoHandler (infosDoEvento) {
                                    console.log('[nomeCategoria]', nomeCategoria);
                                    console.log('[infosDoEvento.target.value]', infosDoEvento.target.value);
                                    setNomeCategoria(infosDoEvento.target.value);
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