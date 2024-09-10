import { useState } from "react";
// react-router-dom version v6.12
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import RootLayoutStaff from "./layouts/RootLayoutStaff";
import RootLayoutMaster from "./layouts/RootLayoutMaster";

// pages
import Login from "./pages/Auth/Login";
import ErrorPage from "./pages/Error/ErrorPage"

function App({ response }) {


  const [access, setAccess] = useState(window.localStorage.getItem("access"));
  const [refresh, setRefresh] = useState(window.localStorage.getItem("refresh"))
  // const [userType, setUserType] = useState(window.localStorage.getItem("userType"));
  const [userType, setUserType] = useState('123');


  const routes = createBrowserRouter(
    [
      access && refresh ? (
        userType === '123' ?
        {
          path: '/',
          element: <RootLayoutMaster />, // userType = master bo'lsa RootLayoutMaster ochiladi
          errorElement: <ErrorPage />
        }
        :
        {
          path: '/',
          element: <RootLayoutStaff />, // userType = staff bo'lsa RootLayoutStaff ochiladi
          errorElement: <ErrorPage />
        }
      ) : (
        {
          path: '/',
          element: <Login setAccess={setAccess} setRefresh={setRefresh} setUserType={setUserType}  />,
          errorElement: <ErrorPage />
        }
      )
      
    ]
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;