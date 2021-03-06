import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("No se puede utilizar numeros negativos");
    }
  };

  return (
    <div className='Itemcount'>
      <button onClick={incrementar} type='button' className='btn btn-primary btn-lg'>
        {" "}
        +{" "}
      </button>
      <span>{count}</span>
      <button onClick={decrementar} type='button' className='btn btn-primary btn-lg'>
        {" "}
        -{" "}
      </button>
      {count > 0 && (
        <Link to={"/cart"}>
          <button onClick={() => onAdd(count)} type='button' className='btn btn-warning btn-lg'>
            Agregar al carrito
          </button>
        </Link>
      )}

      <Link to={"/"} className='btn btn-success btn-lg'>
        Regresar
      </Link>
    </div>
  );
};

export default ItemCount;
