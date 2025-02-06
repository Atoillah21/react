import React, { useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Button";
import { use } from "react";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";

const token = localStorage.getItem("token");

function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState("")

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    setUser(getUsername(token))
  })

  useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    });
  })

  useEffect(() => {
    if (products.length > 0 &&
      cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotal(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }

  function handleAddToCart(id) {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  }

  // useReff
  const cartRef = useRef([
    {
      id: 1,
      qty: 1,
    },
  ]);

  function handleAddToCartRef(id) {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
  }

  const totalRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0){
      totalRef.current.style.display = "table-row";
    } else {
      totalRef.current.style.display = "none";
    }
  })

  return (
    <>
      <div className="flex justify-end h-20 bg-yellow-400 text-white items-center px-10 ">
        {user}
        <Button classname="bg-black ml-5" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      <div className="flex justify-center py-5 flex-wrap">
        <div className="flex w-3/5 flex-wrap ">
          {products.length > 0 &&
          products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                handleAddToCart={handleAddToCart}
                id={product.id}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/5 pl-30">
          <h1 className="text-3xl font-bold text-yellow-400 ml-5 mb-2">Cart</h1>
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
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title.substring(0, 10)}...</td>
                    <td>
                      {product.price.toLocaleString("us-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("us-US", {
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
                  {(total).toLocaleString('us-US', { style: 'currency', currency: 'USD' })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
