import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { isNationalIDValid } from '../lib/Utils'
class Code extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            code : '' ,
            result:''
            // code: this.props.code
        }
    }
    
    verifycode = ()=>{
         isNationalIDValid(this.state.code)?this.setState({result:"valid"}):this.setState({result:"invalid"})
    }

    nationalIDOnChange =(e)=>{
        if (e.target.value.length===10) {
            this.verifycode()
        }
        if (e.target.value.length===0) {
            this.setState({result:""})
        }
       this.setState({code:e.target.value} 
       
       )
       
                

       
    }
    
    handleSubmit = (e)=> {
        e.preventDefault()
    }
    render() {
        return (
            <div>
                {this.state.code}
                <Form onSubmit={this.handleSubmit}>
                    <Form.Control type='text' value={this.state.code} onChange={this.nationalIDOnChange}  maxLength={10}/> 
                    <Button variant="primary" type="submit" onClick={this.verifycode}>
                        click me!
                    </Button>
                </Form>

                <div>{this.state.result}</div>

            </div>
        )
    }
}







export default  Code;