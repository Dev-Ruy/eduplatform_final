pages/login.js
import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Login(){
  const [email,setEmail]=useState('')
  const login = async ()=>{
    await supabase.auth.signInWithOtp({ email })
    alert('Verifique o email')
  }
  return (
    <div style={{padding:20}}>
      <input onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
      <button onClick={login}>Entrar</button>
    </div>
  )
}
