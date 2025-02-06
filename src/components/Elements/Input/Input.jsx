import React, { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  return (
    <input name={props.name} type={props.type} className="text-sm border rounded w-full py-2 px-3 text-slate-700" placeholder={props.placeholder} ref={ref}/>
  )
})

export default Input