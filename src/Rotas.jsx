import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/client/FormCliente';
import Home from './views/home/Home';
import ListCliente from './views/client/ListCliente';
import ListEntregador from './views/entregador/ListEntregador';
import ListProduto from './views/produto/ListProduto';
import FormProduto from './views/produto/FormProduto';
import FormEntregador from './views/entregador/FormEntregador';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-entregador" element={ <ListEntregador/> }/>
                <Route path="form-entregador" element={ <FormEntregador/> }/>
            </Routes>
        </>
    )
}

export default Rotas
