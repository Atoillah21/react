import React from "react";

function Label(props) {
  return (
    <label
      htmlFor={props.htmlfor}
      className="block text-slate-700 text-sm font-bold mb-2"
    >{props.children}
    </label>
  );
}

export default Label;
