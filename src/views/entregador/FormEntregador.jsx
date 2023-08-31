import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';

const options = [
    {key:	"Acre" , text:"" , value: ""},
    {key:	"Alagoas"},
    {key:	"Amapá"},
    {key:	"Amazonas"},
    {key:	"Bahia"},
    {key:	"Ceará"},
    {key:	"Espírito Santo"},
    {key:	"Goiás"},
    {key:	"Maranhão"},
    {key:	"Mato Grosso"},
    {key:	"Mato Grosso do Sul"},
    {key:	"Minas Gerais"},
    {key:	"Pará"},
    {key:	"Paraíba"},
    {key:	"Paraná"},
    {key:	"Pernambuco"},
    {key:	"Piauí"},
    {key:	"Rio de Janeiro"},
    {key:	"Rio Grande do Norte"},
    {key:	"Rio Grande do Sul"},
    {key:	"Rondônia"},
    {key:	"Roraima"},
    {key:	"Santa Catarina"},
    {key:	"São Paulo"},
    {key:	"Sergipe"},
    {key:	"Tocantins"}
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
                                <Form.Input fluid label='First name' placeholder='First name' />
                                <Form.Input fluid label='Last name' placeholder='Last name' />
                                <Form.Select
                                    fluid
                                    label='Gender'
                                    options={options}
                                    placeholder='Gender'
                                />
                            </Form.Group>
                            
                            
                            <Form.Group widths= 'equal'>
                            <Form.Field
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                label='Descrição'
                                placeholder='...'

                            />
                            </Form.Group>

                            <Form.Group widths={"equal"}>
                                <Form.Input
                                    fluid
                                    required
                                    label='Valor Unitário'
                                    width={6}>
                                    <InputMask 
                                        mask="999.999.999,99"
                                        placeholder="R$"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo'
                                    width={6}>
                                    <InputMask 
                                        mask="99999"
                                        placeholder="Informe em minutos"
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="9999" 
                                        maskChar={null}
                                        placeholder="Informe em minutos"
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
