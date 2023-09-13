import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon} from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";
import axios from "axios";


export default function FormEntregador () {

    const options = [
        {key:	"Acre" , text:"AC" , value: "ac"},
        {key:	"Alagoas", text:"AL" , value: "al"},
        {key:	"Amapá", text:"AP" , value: "ap"},
        {key:	"Amazonas", text:"AM" , value: "am"},
        {key:	"Bahia", text:"BA" , value: "ba"},
        {key:	"Ceará", text:"CE" , value: "ce"},
        {key:	"Distrito Federal", text:"DF" , value: "df"},
        {key:	"Espírito Santo", text:"ES" , value: "es"},
        {key:	"Goiás", text:"GO" , value: "go"},
        {key:	"Maranhão", text:"MA" , value: "ma"},
        {key:	"Mato Grosso", text:"MT" , value: "mt"},
        {key:	"Mato Grosso do Sul", text:"MS" , value: "ms"},
        {key:	"Minas Gerais", text:"MG" , value: "mg"},
        {key:	"Pará", text:"PA" , value: "pa"},
        {key:	"Paraíba", text:"PB" , value: "pb"},
        {key:	"Paraná", text:"PR" , value: "pr"},
        {key:	"Pernambuco", text:"PE" , value: "pe"},
        {key:	"Piauí", text:"PI" , value: "pi"},
        {key:	"Rio de Janeiro", text:"RJ" , value: "rj"},
        {key:	"Rio Grande do Norte", text:"RN" , value: "rn"},
        {key:	"Rio Grande do Sul", text:"RS" , value: "rs"},
        {key:	"Rondônia", text:"RO" , value: "ro"},
        {key:	"Roraima", text:"RR" , value: "rr"},
        {key:	"Santa Catarina", text:"SC" , value: "sc"},
        {key:	"São Paulo", text:"SP" , value: "sp"},
        {key:	"Sergipe", text:"SE" , value: "se"},
        {key:	"Tocantins", text:"TO" , value: "to"}
    ]
    
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [entregas, setEntregas] = useState();
    const [frete, setFrete] = useState();
    const [rua, setRua] = useState();
    const [numero, setNumero] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [cep, setCep] = useState();
    const [estado, setEstado] = useState();
    const [complemento, setComplemento] = useState();
    const [ativo, setAtivo] = useState();
    
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
             rua: rua,
             numero: numero,
             bairro: bairro,
             cidade: cidade,
             cep: cep,
             estado: estado,
             complemento: complemento,
             ativo: ativo
        }
        console.log(entregadorRequest)
        axios.post("http://localhost:8080/api/entregador", entregadorRequest)
        .then((response) => {
             console.log('Entregador cadastrado com sucesso.')
        })
        .catch((error) => {
             console.log('Erro ao incluir um entregador.')
        })
    }
    return(
        <div>

            <MenuSistema/>
            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>
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
                                        mask="31/12/9999"
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
                                    value={rua}
			                        onChange={e => setRua(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Número'>
                                    <InputMask
                                        required
                                        mask="9999"
                                        value={numero}
			                            onChange={e => setNumero(e.target.value)}
                                    /> 
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                    value={bairro}
			                        onChange={e => setBairro(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    value={cidade}
			                        onChange={e => setCidade(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label='CEP'>
                                    <InputMask
                                        placeholder="00000-000"
                                        value={cep}
			                            onChange={e => setCep(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Select
                                    fluid
                                    label='UF'
                                    options={options}
                                    placeholder='Selecione o seu estado'
                                    value={estado}
			                        onChange={e => setEstado(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group widths={"equal"}>
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    value={complemento}
			                        onChange={e => setComplemento(e.target.value)}
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
                                Voltar
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