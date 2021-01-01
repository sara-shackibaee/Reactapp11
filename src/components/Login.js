import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'
class Login extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextName">
                        <Form.Label column sm="2">
                            Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue="HESSAM" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextFamily">
                        <Form.Label column sm="2">
                            Family
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue="ghasemi" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue="email@example.com" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue="123" />
                        </Col>
                    </Form.Group>
                    <Col sm="10">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                    
                   
                </Form>
            </div>
        )
    }
}
export default Login;
