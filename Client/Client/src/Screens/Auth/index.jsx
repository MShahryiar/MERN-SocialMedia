import React, {useState} from 'react'
import SocialImage from "../../../public/assets/social.jpg"

const Auth = () => {
  const [form, setForm] = useState("Login")
  return (
   <div className='w-screen h-screen flex bg-gray-100 justify-center items-center'>
          <div className='w-2/3 h-auto rounded-md flex justify-evenly bg-red-100'>
              {/* FOrm */}
              <div className='w-1/2 h-auto p-5'>
                {form === "Login" && (
                  <>
                  <h1 className='font-bold text-xl text-gray-900' >Login</h1>
                <p className='font-light text-gray-700'>Don't have an account yet? Sign Up <span className='underline cursor-pointer' onClick={()=>setForm("Register")}>here.</span></p>
                <form  className='my-10 w-1/1'>
                    <div>
                      <label htmlFor="Email" className='block text-gray-500'>Email</label>
                      <input type='text' placeholder='name@email.com' className='block w-full indent-5 rounded mt-1 h-10 '/>
                    </div>
                    <div className='mt-5'>
                      <label htmlFor="Email" className='block text-gray-500'>Password</label>
                      <input type='text' placeholder='*****' className='block w-full indent-5 rounded mt-1 h-10 '/>
                    </div>
                    <div>
                      <button className='bg-red-500 w-full rounded mt-5 py-2 text-white'>Login</button>
                    </div>
                </form>
                  </>
                )}
                 {form === "Register" && (
                  <>
                  <h1 className='font-bold text-xl text-gray-900' >Register</h1>
                <p className='font-light text-gray-700'>Already have an account yet? Log In <span className='underline cursor-pointer' onClick={()=>setForm("Login")}>here.</span></p>
                <form  className='my-10 w-1/1'>
                    <div>
                      <label htmlFor="Email" className='block text-gray-500'>Email</label>
                      <input type='text' placeholder='name@email.com' className='block w-full indent-5 rounded mt-1 h-10 '/>
                    </div>
                    <div className='mt-5'>
                      <label htmlFor="Email" className='block text-gray-500'>Password</label>
                      <input type='text' placeholder='*****' className='block w-full indent-5 rounded mt-1 h-10 '/>
                    </div>
                    <div>
                      <button className='bg-red-500 w-full rounded mt-5 py-2 text-white'>Register</button>
                    </div>
                </form>
                  </>
                )}
              </div>
              {/* image */}
              <div className='w-96 h-96  p-5'>
              <img src={SocialImage} alt="" className=' rounded-md w-full h-full object-cover' />
              </div>
          </div>
   </div>
  )
}

export default Auth