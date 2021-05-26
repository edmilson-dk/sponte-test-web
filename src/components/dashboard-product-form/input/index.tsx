import { ProductInputWrapper } from "src/styles/components/dashboard-product-form/input";
import { ProductInputProps } from "./types";

export function ProductInput({ isTextArea, label, id,  name, value, onChange, onBlur, type }: ProductInputProps) {
  return (
    <ProductInputWrapper>
      <label>{ label }</label>
      {
        isTextArea ? (
          <textarea 
            id={id}
            name={name} 
            value={value} 
            onChange={onChange}
            onBlur={onBlur}
          />
        ) : (
          <input 
            id={id}
            name={name} 
            value={value} 
            onChange={onChange}
            onBlur={onBlur}
            type={type}
          />
        )
      }
    </ProductInputWrapper>
  )
}