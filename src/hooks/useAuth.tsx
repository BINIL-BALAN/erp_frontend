import { useContext } from "react"
import { AuthContext } from "../context"

export const useAuth = ()=>{
  const context = useContext(AuthContext)
  if(!context){
    console.error("useAuth must be use inside AuthProvider")
  }
  return context
}