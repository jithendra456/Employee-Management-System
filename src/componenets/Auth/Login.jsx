import React from 'react'
import {useState} from 'react'

const Login = ({handleLogin}) => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  function handleEmail(e){
    setEmail(e.target.value);
  }
  function handlePassword(e){
    setPassword(e.target.value)
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail("");
    setPassword("");
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-2xl'>
        <form onSubmit={(e)=>submitHandler(e)} action="" className='flex flex-col items-center justify-center'>
          <input required className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400' type="email" placeholder='Enter your email' value={email} onChange={(e)=>handleEmail(e)} />
          <input required className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400 mt-4' type="password" placeholder='Enter Password' value={password} onChange={(e)=>handlePassword(e)}/>
          <button className='text-white outline-none border-none bg-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-white mt-4'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
