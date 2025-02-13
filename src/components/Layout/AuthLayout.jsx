import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

function AuthLayout(props) {
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
  console.log(isDarkMode)
  
  return (
    <div className={`flex justify-center items-center min-h-screen ${isDarkMode && 'bg-slate-600'} `}>
      <div className="w-full max-w-xs">
        <button className="absolute right-2 top-2 bg-yellow-400 p-2 text-white rounded" onClick={() => {
          setIsDarkMode(! isDarkMode)
        }}>
          {isDarkMode ? "Light" : "Dark"}
        </button>
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
