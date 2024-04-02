import React from 'react'
import ReactDOM from 'react-dom'
const reactEle1 = <div className='ele1'>{"Element 1"}</div>

const reactEle2 = (<div className='ele2'>
   <h3>Element 2</h3>
   {reactEle1}
    
</div>
)

const ReactComp1 = () => {
    return <div className='comp1'>
        <h2>
            Component1
            
        </h2>
        {reactEle2}
    </div>
}

const ReactComp2 = () => (
    <div className='comp2'>
        <h2>Component2</h2>
        <ReactComp1/>
        {ReactComp1()}
    </div>
)




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ReactComp2 />);
