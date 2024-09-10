import { useRef, useState } from "react"
// React Hot Toast
import toast, { Toaster } from "react-hot-toast";

import http from "../../services/http";

function Login({setAccess, setRefresh, setUserType}) {
  const loginInput = useRef(null);
  const passInput = useRef(null);

  const onLogin = (e) => {
    e.preventDefault();
    http.post('/token/', {
      // weayaa_id: loginInput.current.value,
      // password: passInput.current.value
      weayaa_id: 'staff_user',
      password: 'staff_user2024'
    })
    .then((res) => {
      setAccess(res.data.access);
      setRefresh(res.data.refresh);
      // setUserType(res.request.status);
      window.localStorage.setItem('access', res.data.access);
      window.localStorage.setItem('refresh', res.data.refresh);
      toast.success('You have successfully sign in!');
      console.log(res)
    })
    .catch(() => {
      toast.error('ID or Password went wrong!');
    })
  }

  return (
    <>
      <Toaster />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="border p-9">
          
          <form className="max-w-sm mx-auto w-[360px]" onSubmit={onLogin}>

            <div className="text-center font-bold text-[32px] pb-5">
              <h2>Log in</h2>
            </div>

            <div className="mb-5">
              <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">Your ID</label>
              <input ref={loginInput} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ShahbozShirinboyev" required />
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your Password</label>
              <input ref={passInput} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="************" required />
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[360px] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default Login