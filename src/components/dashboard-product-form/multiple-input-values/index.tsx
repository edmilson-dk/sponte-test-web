import { useRef } from "react";
import { v4 } from "uuid";
import { FiPlusSquare, FiXSquare } from "react-icons/fi";

import { ProductMultipleInputValuesWrapper } from "src/styles/components/dashboard-product-form/multiple-input-values";

import { ProductMultipleInputValuesProps } from "./types";

export function ProductMultipleInputValue({ state, setState, name, label }: ProductMultipleInputValuesProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handlerAddItem(key: string) {
    if (!inputRef.current) return;
    
    const inputValue = inputRef.current.value;
    inputRef.current.value = "";

    setState([...state, {
      key,
      value: inputValue
    }]);
  }

  function handlerDeleteItem(key: string) {
    setState(() => 
      state.filter(oldItem => oldItem.key !== key)
    );
  }

  return (
    <ProductMultipleInputValuesWrapper>
      <label>{label}</label>
      <div>
        <input type="text" name={name} ref={inputRef}/>
        <button type="button" onClick={() => handlerAddItem(v4())}>
          <span>
            <FiPlusSquare size="100%"/>
          </span>
        </button>
      </div>
      <ul>
        {
          state.length > 0 && state.map(item => {
            return (  
              <li key={item.key}>
                <span>{item.value}</span>
                <button type="button" onClick={() => handlerDeleteItem(item.key)}>
                  <span>
                    <FiXSquare size="100%"/>
                  </span>
                </button>
              </li>
            )
          })
        }
      </ul>
    </ProductMultipleInputValuesWrapper>
  )
}