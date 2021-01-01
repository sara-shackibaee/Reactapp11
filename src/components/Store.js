import React from 'react'
import {flowers} from '../lib/Producte'
function Store() {
    // const reada = flowers.map((item,key=flowers.id)=>item)
    return (
        <div>
            {flowers.map((flower,key=flower.id)=>{
                return (<div key={key}>{flower.name}</div>)
            }
            )}
        </div>
    )
}
export default Store;


