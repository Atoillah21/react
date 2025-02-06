import React from "react";

function Button(props) {
  const {
    onClick,
    type="button",
  } = props;

  return (
    <button className={`px-6 h-10 font-semibold rounded-md text-white ${props.classname}`} onClick={() => onClick()} type={type}>
      {props.children}
    </button>
  );
}

export default Button;
