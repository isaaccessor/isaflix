import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroCategoria() 
{
    return (
        <PageDefault>
            <div>
                <h1>Cadastro de Categoria</h1>

                <Link to="/">
                    Ir para Home
                </Link>
            </div>
        </PageDefault>
    )
}

export default CadastroCategoria;