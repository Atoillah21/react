import React from 'react'
import InputForm from '../Elements/Input/InputForm'
import Button from '../Elements/Button/Button'

function FormRegister() {
  return (
    <form>
        <InputForm
            label="Nama"
            name="nama"
            placeholder="Masukkan nama anda"
        />
        <InputForm
            label="Email"
            name="email"
            placeholder="contoh@gmail.com"
        />
        <InputForm
            label="Password"
            name="password"
            placeholder="*******"
        />
        <InputForm
            label="Konfirmasi Password"
            name="password"
            placeholder="*******"
        />
        <Button classname="bg-yellow-400 w-full">Login</Button>
    </form>
  )
}

export default FormRegister