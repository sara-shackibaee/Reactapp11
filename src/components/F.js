import React from 'react'
import {flowers} from '../lib/Producte'
function F() {
    return (
        <div>
           {
               flowers.map((flower,key=flower.id)=>{
                   return(<div>
                       <ul>
                           <li >{flower.name}</li>
                           <li>{flower.color}</li>
                           <li>{flower.price}</li>
                       </ul>
                   </div>)
               })
           }
        </div>
    )
}
export default  F;