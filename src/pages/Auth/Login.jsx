

function Login() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="border p-9">
          
          <form className="max-w-sm mx-auto w-[360px]">

            <div className="text-center font-bold text-[24px]">
              <h2>Sign In</h2>
            </div>

            <div className="mb-5">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
            </div>

            <div className="mb-5">
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Your Password</label>
              <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[360px] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default Login