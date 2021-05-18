import React from 'react'

const FancyButton=React.forwardRef((props,ref)=>{
        <button className="FancyButton">
            {props.children}
        </button>
})
export default FancyButton