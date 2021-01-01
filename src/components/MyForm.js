
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
class MyForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
            name:'',
            family:'',
            email:''

        
            
             
        }
    }

    handelimputename = (e)=>{
        this.setState({
            
                name:e.target.value,
                
            
            

        }) 

    }
    handelimputefamily = (e) =>{
        this.setState({
            family:e.target.value
        })
    }



    handelsubmit = (e) =>{
        e.preventDefault()

    }
    handelimputeemail = (e) =>{
        this.setState({
            email:e.target.value
        })
    }
    handelclick = () =>{
        
        alert(this.state.name)
        alert(this.state.family)
        alert(this.state.email)
    }
    
    render() {
        return (
            <div>
                <Form  onSubmit={this.handelsubmit}>
                    Name:<Form.Control type='text'  onChange={this.handelimputename}/> 
                    Family:<Form.Control type='text'  onChange={this.handelimputefamily}/> 
                    Email:<Form.Control type='text'  onChange={this.handelimputeemail} /><br></br> 
                    <Button variant="primary" type="submit" onClick={this.handelclick} >
                        click me!
                    </Button>
                </Form>
                {/* <p>{this.state.name}</p><br></br>
                <p>{this.state.family}</p>
                <p>{this.state.email}</p> */}
                
            </div>
        )
    }
}
export default  MyForm;