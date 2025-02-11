import { useEffect, useState } from "react";
import { getUserName } from "../services/auth.service";

export const useLogin = () => {
    const [user, setUser] = useState("")
      useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
          setUser(getUserName(token));
        } else {
          window.location.href = "/login";
        }
      }, []);
    
      return user
}