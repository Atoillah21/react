import React from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import FormLogin from '../components/Fragments/FormLogin'
import FormRegister from '../components/Fragments/FormRegister'

function RegisterPage() {
  return (
    <AuthLayout title="Register" type='register'>
      <FormRegister/>
    </AuthLayout>
  )
}

export default RegisterPage