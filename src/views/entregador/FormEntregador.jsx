import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon} from 'semantic-ui-react';

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

export default function FormCliente () {

    return (

        <div>

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
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'>
                                    <InputMask                
                                        mask="9999999999"
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
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'>
                                    <InputMask                
                                        mask="(99)9999999999"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Entregas Realizadas'>
                                    <InputMask                
                                        mask="9999"
                                        placeholder="QTD entregas..."
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Frete'>
                                    <InputMask                
                                        placeholder="R$"
                                    /> 
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Rua'
                                    maxLength="100"
                                />

                                <Form.Input
                                    fluid
                                    label='Número'>
                                    <InputMask
                                        required
                                        mask="9999"
                                    /> 
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                />

                                <Form.Input
                                    fluid
                                    label='Cidade'>
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='CEP'>
                                    <InputMask
                                        placeholder="00000-000"
                                    />
                                </Form.Input>

                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Select
                                    fluid
                                    label='UF'
                                    options={options}
                                    placeholder='Selecione o seu estado'
                                />
                            </Form.Group>

                            <Form.Group widths={"equal"}>
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                >
                                </Form.Input>
                            </Form.Group>

                            {/* <Form.Group widths= 'equal'>
                            <Form.Radio
                                label='Large'
                                value='lg'
                                checked={value === 'lg'}
                                onChange={this.handleChange}
                            />
                            </Form.Group> */}
                        
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
