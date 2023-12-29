import React, { useState } from "react";

const SelectData = ({catElem, valuetype, setValuetype}) => {
  const [show, setShow] = useState(false);
  const ShowHide = () => {
    if(valuetype !== '' && valuetype === catElem.type){
      setValuetype('');  
    } else {
      setValuetype(catElem.type);
    }
  };
  const [selected, setSelected] = useState(catElem.type);
  const SelectText = (e)=> {
    setSelected(e.target.textContent);
    setShow(!show);
    setValuetype('');
  }

  return (
    <div className={`select-box ${valuetype === catElem.type ? 'active' : ''}`} >
      <div className="value" onClick={ShowHide}>
        {selected}
      </div>
      <ul style={{ display: valuetype === catElem.type  ? 'block' : 'none' }}>
        {catElem.Allsolution.map((items, i) => (
          <li onClick={SelectText} key={i}>
            {items.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SelectData;
