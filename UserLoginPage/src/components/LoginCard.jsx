import React from 'react'
import { useState } from 'react'
import { Eye,EyeOff } from 'lucide-react'
const LoginCard = () => {

  const [loginData, setLoginData] = useState({
    username:"",
    password:""
  })
  const [showPassword,setShowPassword] = useState(false);

  const handleClick = async (e)=>{
    e.preventDefault();
    try{
      const response = await fetch("urlname",{
      method:'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        username:loginData.username,
        password:loginData.password,
      })
    })
    if(response.ok){
      alert("Form Submitted Successfully",await response.json());
    }
    else{
      alert("Failed to submit Form");
    }
    }
    catch(error){
      console.log("Error happened");
      console.log(error);
    }
  }

  const handleChange =(e)=>{
    const {name,value} = e.target;
    setLoginData({...loginData,[name]:value})
  }
  
  return (
    <div className='w-full flex flex-col justify-center items-center h-[100vh]'>
      <div className='p-4 m-2 flex flex-col rounded shadow-xl w-[320px]'>
        <h1 className='text-2xl font-bold text-center mb-3 '>Login</h1>
        <form className='flex flex-col m-2'>
            <input type="text" name='username' value={loginData.username} onChange={handleChange} className='border border-[#ccc] p-2 rounded m-1 outline-none focus:border-green-500 ' placeholder='username'/>
            <div className='border-[1px] border-[#ccc] flex justify-between rounded outline-none m-1 focus-within:border-green-500'>
            <input type={showPassword ? "text":"password"} name='password' value={loginData.password} onChange={handleChange} className=' p-2 rounded outline-none w-full' placeholder='password'/>
            <button className='text-[#ccc] pr-1.5' type='button' onClick={()=>setShowPassword(!showPassword)}>{showPassword?<Eye size={20}/>: <EyeOff size={20}/>}</button>
            </div>
            <button onClick={handleClick} className='font-bold border p-2 m-1 rounded mt-2 text-green-500 border-green-500 hover:bg-green-500 hover:text-white cursor-pointer '>Submit</button>
            <div className='flex justify-between mx-2'>
              <small className='cursor-pointer hover:font-semibold hover:text-green-500'>forget password</small>
              <small className='cursor-pointer hover:font-semibold hover:text-green-500'>sign up</small>
            </div  >
        </form>
        <small className='text-center mb-2'>Or signin with</small>
        <button className='border mb-2 p-1 rounded cursor-pointer hover:bg-green-500 text-black hover:text-white border-[#ccc] font-semibold' >Google</button>
        <button className='border mb-2 p-1 rounded cursor-pointer hover:bg-green-500 text-blue-800 hover:text-white border-[#ccc] font-semibold'>Facebook</button>
      </div>
    </div>
  )
}

export default LoginCard
