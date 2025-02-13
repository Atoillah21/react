import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useTotalPriceDispatch()
  const {total} = useTotalPrice()

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product?.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        }
      })
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalRef.current.style.display = "table-row";
    } else {
      totalRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table className="text-left table-auto border-separate border-spacing-x-5">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product?.title.substring(0, 10)}</td>
                <td>
                  {product?.price.toLocaleString("us-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td>{item.qty}</td>
                <td>
                  {(item.qty * product?.price).toLocaleString("us-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}
        <tr ref={totalRef} className="font-bold">
          <td colSpan={3}>Total Price</td>
          <td>
            {total.toLocaleString("us-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
