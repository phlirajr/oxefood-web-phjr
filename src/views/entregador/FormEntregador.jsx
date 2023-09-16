import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";


export default function FormEntregador () {

    const options = [
        {key:	"Acre" , text:"AC" , value: "AC"},
        {key:	"Alagoas", text:"AL" , value: "AL"},
        {key:	"Amapá", text:"AP" , value: "AP"},
        {key:	"Amazonas", text:"AM" , value: "AM"},
        {key:	"Bahia", text:"BA" , value: "BA"},
        {key:	"Ceará", text:"CE" , value: "CE"},
        {key:	"Distrito Federal", text:"DF" , value: "DF"},
        {key:	"Espírito Santo", text:"ES" , value: "ES"},
        {key:	"Goiás", text:"GO" , value: "GO"},
        {key:	"Maranhão", text:"MA" , value: "MA"},
        {key:	"Mato Grosso", text:"MT" , value: "MT"},
        {key:	"Mato Grosso do Sul", text:"MS" , value: "MS"},
        {key:	"Minas Gerais", text:"MG" , value: "MG"},
        {key:	"Pará", text:"PA" , value: "PA"},
        {key:	"Paraíba", text:"PB" , value: "PB"},
        {key:	"Paraná", text:"PR" , value: "PR"},
        {key:	"Pernambuco", text:"PE" , value: "PE"},
        {key:	"Piauí", text:"PI" , value: "PI"},
        {key:	"Rio de Janeiro", text:"RJ" , value: "Rj"},
        {key:	"Rio Grande do Norte", text:"RN" , value: "RN"},
        {key:	"Rio Grande do Sul", text:"RS" , value: "RS"},
        {key:	"Rondônia", text:"RO" , value: "RO"},
        {key:	"Roraima", text:"RR" , value: "RR"},
        {key:	"Santa Catarina", text:"SC" , value: "SC"},
        {key:	"São Paulo", text:"SP" , value: "SP"},
        {key:	"Sergipe", text:"SE" , value: "SE"},
        {key:	"Tocantins", text:"TO" , value: "TO"}
    ]

    const { state } = useLocation();

    const [idEntregador, setIdEntregador] = useState();
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [entregas, setEntregas] = useState();
    const [frete, setFrete] = useState();
    const [enderecoRua, setEnderecoRua] = useState();
    const [enderecoNumero, setEnderecoNumero] = useState();
    const [enderecoBairro, setEnderecoBairro] = useState();
    const [enderecoCidade, setEnderecoCidade] = useState();
    const [enderecoCep, setEnderecoCep] = useState();
    const [enderecoUf, setEnderecoUf] = useState();
    const [enderecoComplemento, setEnderecoComplemento] = useState();
    const [ativo, setAtivo] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/entregador/" + state.id).then((response) => {

                    setIdEntregador(response.data.id)
                    setNome(response.data.nome)
                    setCpf(response.data.cpf)
                    setRg(response.data.rg)
                    setDataNascimento(response.data.dataNascimento)
                    setFoneCelular(response.data.foneCelular)
                    setEnderecoRua(response.data.enderecoRua)
                    setEnderecoBairro(response.data.enderecoBairro)
                    setEnderecoCidade(response.data.enderecoCidade)
                    setEnderecoUf(response.data.enderecoUf)
            })
        }
    }, [state])
    
    function salvar() {
    
        let entregadorRequest = {
             nome: nome,
             cpf: cpf,
             rg: rg,
             dataNascimento: dataNascimento,
             foneCelular: foneCelular,
             foneFixo: foneFixo,
             entregas: entregas,
             frete: frete,
             enderecoRua: enderecoRua,
             enderecoNumero: enderecoNumero,
             enderecoBairro: enderecoBairro,
             enderecoCidade: enderecoCidade,
             enderecoCep: enderecoCep,
             enderecoUf: enderecoUf,
             nderecoComplemento: enderecoComplemento,
             ativo: ativo
        }


        if (idEntregador != null) { //Alteração:
            axios.put("http://localhost:8080/api/entregador/" + idEntregador, entregadorRequest)
            .then((response) => { console.log('Entregador alterado com sucesso.') })
            .catch((error) => { console.log('Erro ao alterar um entregador.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/entregador", entregadorRequest)
            .then((response) => { console.log('Entregador cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o entregador.') })
        }
    }
    return(
        <div>

            <MenuSistema/>
            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                { idEntregador === undefined &&
                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>}
                { idEntregador !== undefined  &&
                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>}
                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form> 

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
			                        onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
			                            onChange={e => setCpf(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'>
                                    <InputMask                
                                        mask="9999999999"
                                        value={rg}
			                            onChange={e => setRg(e.target.value)}
                                    /> 
                                </Form.Input>
                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Data Nasc.'
                                    maxLength="10">
                                    <InputMask
                                        mask="99/99/9999"
                                        placeholder="dd/mm/aaaa"
                                        value={dataNascimento}
			                            onChange={e => setDataNascimento(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Celular'>
                                    <InputMask
                                        required
                                        mask="(99)999999999"
                                        placeholder="(xx)xxxxxxxxx"
                                        value={foneCelular}
			                            onChange={e => setFoneCelular(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'>
                                    <InputMask                
                                        mask="(99)9999999999"
                                        value={foneFixo}
			                            onChange={e => setFoneFixo(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Entregas Realizadas'>
                                    <InputMask                
                                        mask="9999"
                                        placeholder="QTD entregas..."
                                        value={entregas}
			                            onChange={e => setEntregas(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Frete'>
                                    <InputMask                
                                        placeholder="R$"
                                        value={frete}
			                            onChange={e => setFrete(e.target.value)}
                                    /> 
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    maxLength="100"
                                    value={enderecoRua}
			                        onChange={e => setEnderecoRua(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Número'>
                                    <InputMask
                                        required
                                        mask="9999"
                                        value={enderecoNumero}
			                            onChange={e => setEnderecoNumero(e.target.value)}
                                    /> 
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                    value={enderecoBairro}
			                        onChange={e => setEnderecoBairro(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    value={enderecoCidade}
			                        onChange={e => setEnderecoCidade(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='CEP'>
                                    <InputMask
                                        mask="99999-999"
                                        placeholder="00000-000"
                                        value={enderecoCep}
			                            onChange={e => setEnderecoCep(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Select
                                    fluid
                                    label='UF'
                                    options={options}
                                    placeholder='Selecione o seu estado'
                                    value={enderecoUf}
			                        onChange={(e, {value}) => setEnderecoUf(value)}
                                />
                            </Form.Group>

                            <Form.Group widths={"equal"}>
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    value={enderecoComplemento}
			                        onChange={e => setEnderecoComplemento(e.target.value)}
                                >
                                </Form.Input>
                            </Form.Group>

                            <Form.Group inline>
                                <label>Ativo:</label>
                                <Form.Field
                                    control='input'
                                    label='Sim'
                                    type="radio"
                                    name='ativo'
                                    value={ativo}
			                        onChange={e => setAtivo(e.target.value)}
                                />
                                <Form.Field
                                    control="input"
                                    label='Não'
                                    type="radio"
                                    name='ativo'
                                    value={ativo}
			                        onChange={e => setAtivo(e.target.value)}
                                />
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
                                <Link to={'/list-entregador'}>Voltar</Link>
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
                      
    )
}