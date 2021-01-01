import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
class Firstpage extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        
                        <Col>
                        <Button type='submit'>login</Button>
                        <Button type='submit'>rejister</Button>
                        <Button type='submit'>about we</Button>
                        </Col>
                        
                    </Row>
                </Container>
                
            </div>
        )
    }
}
export default  Firstpage ;