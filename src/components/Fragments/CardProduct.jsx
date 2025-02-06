import React from "react";
import Button from "../Elements/Button/Button";

function CardProduct(props) {
  return (
    <div className="w-full max-w-sm mb-4 bg-gray-800 border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
      {props.children}
    </div>
  );
}

const Header = (props) => {
  return (
    <a href="#">
      <img src={props.image} alt="" className="p-8 rounded-t-lg h-60 w-full object-cover" />
    </a>
  );
};

const Body = (props) => {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {props.name.substring(0,20)}
        </h5>
        <p className="text-m text-white">
          {props.children.substring(0, 100)}...
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const {handleAddToCart} = props

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{props.price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}</span>
      <Button classname="bg-yellow-400" onClick={() => handleAddToCart(props.id)}>Beli</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
