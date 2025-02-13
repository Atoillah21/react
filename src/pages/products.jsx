import React, { useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Button";
import { getProducts } from "../services/product.service";
import { getUserName } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";

function ProductsPage() {
  // const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const user = useLogin();

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }



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
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/5 pl-30">
          <h1 className="text-3xl font-bold text-yellow-400 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
