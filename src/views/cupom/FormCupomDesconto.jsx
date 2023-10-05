import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export default function FormCupomDesconto () {

    const { state } = useLocation();


    const [idCupom, setIdCupom] = useState();
    const [codigoDesconto, setCodigoDesconto] = useState();
    const [percentualDesconto, setPercentualDesconto] = useState();
    const [valorDesconto, setValorDesconto] = useState();
    const [valorMinimoPedidoPermitido, setValorMinimoPermitido] = useState();
    const [quantidadeMaximaUso, setQuantidadeMaximaUso] = useState();
    const [inicioVigencia, setInicioVigencia] = useState();
    const [fimVigencia, setFimVigencia] = useState();
    
    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/cupom/" + state.id).then((response) => {
                    setIdCupom(response.data.id)
                    setCodigoDesconto(response.data.codigoDesconto)
                    setPercentualDesconto(response.data.percentualDesconto)
                    setValorDesconto(response.data.valorDesconto)
                    setValorMinimoPermitido(response.data.valorMinimoPedidoPermitido)
                    setQuantidadeMaximaUso(response.data.quantidadeMaximaUso)
                    setInicioVigencia(formatarData(response.data.inicioVigencia))
                    setFimVigencia(formatarData(response.data.fimVigencia))
            })
        }
    }, [state])


    function salvar() {

		let cupomDescontoRequest = {
		     codigoDesconto: codigoDesconto,
		     percentualDesconto: percentualDesconto,
		     valorDesconto: valorDesconto,
		     valorMinimoPedidoPermitido: valorMinimoPedidoPermitido,
		     quantidadeMaximaUso: quantidadeMaximaUso,
		     inicioVigencia: inicioVigencia,
		     fimVigencia: fimVigencia,
		}
        if (idCupom != null) { //Alteração:
            axios.put("http://localhost:8080/api/cupom/" + idCupom, cupomDescontoRequest)
            .then((response) => { console.log('Cupom alterado com sucesso.') })
            .catch((error) => { console.log('Erro ao alter um cupom.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/cupom", cupomDescontoRequest)
            .then((response) => { console.log('Cupom cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o cupom.') })
        }
 
	}

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
             return ''
        }
    
        let dia = dataParam[2];    
        let mes = dataParam[1];
        let ano = dataParam[0];
        let dataFormatada = dia + '/' + mes + '/' + ano;
    
        return dataFormatada
    
    }

    return (

        <div>
            <MenuSistema/>
            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                { idCupom === undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Cupom &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>}
                { idCupom !== undefined  &&
                    <h2> <span style={{color: 'darkgray'}}> Cupom &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>}

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Código'
                                    maxLength="100"
                                    value={codigoDesconto}
			                        onChange={e => setCodigoDesconto(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Percentual Desconto'
                                    value={percentualDesconto}
				                    onChange={e => setPercentualDesconto(e.target.value)}
                                /> 

                                <Form.Input
                                    fluid
                                    label='Valor Desconto'
                                    value={valorDesconto}
				                    onChange={e => setValorDesconto(e.target.value)}
                                /> 


                            </Form.Group>
                            
                            <Form.Group widths= "equal">

                                <Form.Input
                                    fluid
                                    label='Valor Minimo do Pedido'>
                                    <InputMask
                                    placeholder = "R$"
                                    value={valorMinimoPedidoPermitido}
				                    onChange={e => setValorMinimoPermitido(e.target.value)}
                                    />
                                 </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Quantidade Máxima de uso por Cliente'                                   
                                    value={quantidadeMaximaUso}
				                    onChange={e => setQuantidadeMaximaUso(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Início da Vigência'
                                    width={4}>
                                    <InputMask 
                                        mask="99/99/9999"
                                        value={inicioVigencia}
				                        onChange={e => setInicioVigencia(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fim da Vigência'
                                    width={4}>
                                    <InputMask 
                                        mask="99/99/9999"
                                        value={fimVigencia}
				                        onChange={e => setFimVigencia(e.target.value)}
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
                                <Link to={'/list-cupom'}>Voltar</Link>
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
