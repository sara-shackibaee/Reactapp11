import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
// import randomColor from "randomcolor";
import	Popup	from	'react-popup';
class One extends Component {



    clickhandel = ()=>{

                alert("***welcom to my web,the best react programer***")         
        }

    handlemouse = () =>{
        
        
                alert('hesamiii');							

    }

    render() {
        return (
            <div >
            <br></br>
            <Button variant="primary" type="submit" onClick={this.clickhandel}>
                       click me!
            </Button>
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 

            <p onMouseOver={this.handlemouse}>salam</p>  
            </div>
        )
    }
}
export default  One;



