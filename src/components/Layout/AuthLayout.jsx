import React from "react";
import { Link } from "react-router-dom";

function AuthLayout(props) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl text-yellow-400 font-bold mb-2">{props.title}</h1>
        <p className="font-medium text-slate-500">
            Welcome, Silahkan {props.title}
        </p>
        {props.children}
        <p className='text-sm mt-5 text-center'>
            {props.type ==='login' ? "Belum punya akun? " : "Sudah punya akun?  "}
            {props.type === 'login' && (<Link to='/register' className="text-yellow-400 text-bold">Buat Akun</Link>)}
            {props.type === 'register' && (<Link to='/login' className="text-yellow-400 text-bold">Masuk Kembali</Link>)}
        </p>
      </div>
    </div>
  );
}

export default AuthLayout;
