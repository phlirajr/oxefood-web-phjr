import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export default function FormProduto () {

    const { state } = useLocation();

    const [idProduto, setIdProduto] = useState();
    const [titulo, setTitulo] = useState();
    const [codProduto, setCodProduto] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, setTempoEntregaMinino] = useState();
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/produto/" + state.id).then((response) => {
                    setIdProduto(response.data.id)
                    setTitulo(response.data.nome)
                    setCodProduto(response.data.codigo)
                    setDescricao(response.data.descricao)
                    setTempoEntregaMinino(response.data.tempoEntregaMinimo)
                    setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
            })
        }
    }, [state])


    function salvar() {

		let produtoRequest = {
		     titulo: titulo,
		     codigo: codProduto,
		     descricao: descricao,
		     valorUnitario: valorUnitario,
		     tempoEntregaMinimo: tempoEntregaMinimo,
             tempoEntregaMaximo: tempoEntregaMaximo
		}

        if (idProduto != null) { //Alteração:
            axios.put("http://localhost:8080/api/produto/" + idProduto, produtoRequest)
            .then((response) => { console.log('Produto alterado com sucesso.') })
            .catch((error) => { console.log('Erro ao alterar um produto.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/produto", produtoRequest)
            .then((response) => { console.log('Produto cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o produto.') })
        }
	}


    return (

        <div>
            <MenuSistema/>
            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                { idProduto === undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>}
                { idProduto !== undefined  &&
                    <h2> <span style={{color: 'darkgray'}}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>}

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
