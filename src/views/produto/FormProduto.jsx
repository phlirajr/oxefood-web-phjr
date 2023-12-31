import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { mensagemErro, notifyError, notifySuccess } from "../util/Util";

export default function FormProduto () {

    const { state } = useLocation();

    const [idProduto, setIdProduto] = useState();
    const [titulo, setTitulo] = useState();
    const [codProduto, setCodProduto] = useState();
    const [listaCategoria, setListaCategoria] = useState([]);
    const [idCategoria, setIdCategoria] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, setTempoEntregaMinino] = useState();
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/produto/" + state.id).then((response) => {
                    setIdProduto(response.data.id)
                    setTitulo(response.data.titulo)
                    setCodProduto(response.data.codigo)
                    setDescricao(response.data.descricao)
                    setTempoEntregaMinino(response.data.tempoEntregaMinimo)
                    setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
                    setIdCategoria(response.data.categoria.id)
            })
        }
        axios.get("http://localhost:8080/api/categoria")
        .then((response) => {
            const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
            setListaCategoria(dropDownCategorias);
        })
 
    }, [state])
 


    function salvar() {

		let produtoRequest = {
            idCategoria: idCategoria,
		    titulo: titulo,
		    codigo: codProduto,
		    descricao: descricao,
		    valorUnitario: valorUnitario,
		    tempoEntregaMinimo: tempoEntregaMinimo,
            tempoEntregaMaximo: tempoEntregaMaximo
		}

        if (idProduto != null) { //Alteração:
            axios.put("http://localhost:8080/api/produto/" + idProduto, produtoRequest)
            .then((_response) => {notifySuccess('Produto atualizado com sucesso.') })
            .catch((error) => {if (error.response) {
                notifyError(error.response.data.errors[0].defaultMessage)
                } else {
                notifyError(mensagemErro)
                }})
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/produto", produtoRequest)
            .then((response) => {notifySuccess('Produto cadastrado com sucesso.')})
            .catch((error) => {if (error.response) {
                notifyError(error.response.data.errors[0].defaultMessage)
                } else {
                notifyError(mensagemErro)
                }})
        }
	}


    return (

        <div>
            <MenuSistema/>
            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                { idProduto === undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>}
                { idProduto !== undefined  &&
                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>}

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                    value={titulo}
			                        onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'                                                                  
                                    value={codProduto}
			                        onChange={e => setCodProduto(e.target.value)}                                     
                                />

                            </Form.Group>

                            <Form.Group widths="equal">
                            <Form.Select 
                                required
                                fluid
                                tabIndex='3'
                                placeholder='Selecione'
                                label='Categoria'
                                options={listaCategoria}
                                value={idCategoria}
                                onChange={(e,{value}) => {
                                    setIdCategoria(value)
                                }}
                            />

                            </Form.Group>
                            
                            <Form.Group widths= 'equal'>
                            <Form.Field
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                label='Descrição'
                                placeholder='...'
                                value={descricao}
			                    onChange={e => setDescricao(e.target.value)}

                            />
                            </Form.Group>

                            <Form.Group widths={"equal"}>
                                <Form.Input
                                    fluid
                                    required
                                    label='Valor Unitário'
                                    width={6}>
                                    <InputMask 
                                        placeholder="R$"
                                        value={valorUnitario}
			                            onChange={e => setValorUnitario(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo'
                                    width={6}>
                                    <InputMask 
                                        placeholder="Informe em minutos"
                                        value={tempoEntregaMinimo}
			                            onChange={e => setTempoEntregaMinino(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo'
                                    width={6}
                                >
                                    <InputMask 
                                        maskChar={null}
                                        placeholder="Informe em minutos"
                                        value={tempoEntregaMaximo}
			                            onChange={e => setTempoEntregaMaximo(e.target.value)}
                                    /> 
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-produto'}>Voltar</Link>
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
