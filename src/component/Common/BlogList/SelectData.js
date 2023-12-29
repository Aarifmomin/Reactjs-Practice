import React, { useState } from "react"


const SelectData = ({data, activekey, setActivekey}) => {

    const [defaultdata, setDefaultdata] = useState(data.type)
    const updateText =(e)=> {
        setDefaultdata(e.target.textContent);
        setActivekey('');
    }
    const stateChange = ()=> {
        if(activekey !== '' && activekey === data.type) {
            setActivekey('')
        } else {
            setActivekey(data.type);
        }
    }

    return(
        <>
            {
                <div className={`select-box ${activekey === data.type ? 'active' : ''}`} data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">
                    <div onClick={stateChange} className={`value ${activekey === data.type ? 'open' : ''}`}>{defaultdata}</div>
                    <ul style={{display: activekey === data.type ? 'block' : 'none'}}>
                        {
                            data.Allsolution.map((datavalue, i)=>
                                <li onClick={updateText} key={i}>{datavalue.name}</li>
                            )
                        }
                    </ul>
                </div>
            }							
        </>
    )
}
export default SelectData;