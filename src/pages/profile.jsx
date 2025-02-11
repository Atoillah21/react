import React from 'react'
import { useLogin } from '../hooks/useLogin'

const ProfilePage = () => {
    const user = useLogin()
  return (
    <div>
        <h1>Halo {user}</h1>
    </div>
  )
}

export default ProfilePage