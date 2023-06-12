import React from "react";
import '../App.css'

export default function Dynamic(props) {

  const renderField = (field) => {
    const { isReadonly, type, items, unit } = field;

    switch (type) {
      case 'date':
        return <input type="date" readOnly={isReadonly} />;
      case 'number':
        return (
          <>
          {unit && <span>(in {unit})</span>}
            <input type="number" readOnly={isReadonly} />
            
          </>
        );
      case 'dropdown':
        return (
          <select className="drop" readOnly={isReadonly}>
            {items.map(item => (
              <option key={item.value} value={item.value} >
                {item.text}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return (
   
   <div className="container">
    <form action="">
      {
        props.schema.fields.sort((a,b)=>a.order-b.order)
        .map((val)=>{
          return(
            <div key={val.key}>
            <label htmlFor="">{val.label} </label>  
          
            {renderField(val)}
          </div>
          )
          
        })
      }
    </form>
   </div>
  );
}
