import React, {useState} from 'react'

const Auth = () => {
  const [form, setForm] = useState("login")
  return (
   <div className='w-screen h-screen flex bg-gray-100 justify-center items-center'>
        <div className='w-[250px] bg-red-200 h-auto  rounded-md'>
            <form className='w-full bg-red-100'>
              <input  className='bg-green-100 w-1/1 h-10 indent-5 outline-none border-2 border-gray-200 rounded-md block' placeholder='Enter Name' />
            </form>
        </div>
   </div>
  )
}

export default Auth