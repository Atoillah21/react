import React, { forwardRef } from "react";
import Label from "./Label";
import Input from "./Input";

  
const InputForm = forwardRef((props, ref) => {
  return (
  <div className="mb-6">
    <Label htmlfor={props.name}>{props.label}</Label>
    <Input name={props.name} type={props.type}  placeholder={props.placeholder} ref={ref}/>
  </div>
);
})

export default InputForm;
