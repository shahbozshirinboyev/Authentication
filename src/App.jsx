import { useState } from "react";
// react-router-dom version v6.12
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import RootLayoutStaff from "./layouts/RootLayoutStaff";
import RootLayoutMaster from "./layouts/RootLayoutMaster";

// pages
import Login from "./pages/Auth/Login";
import ErrorPage from "./pages/Error/ErrorPage"

function App() {

  const [token, setToken] = useState(window.localStorage.getItem("token"));

  const routes = createBrowserRouter(
    [
      token ? (
        {
          path: '/',
          element: <RootLayoutStaff />,
          errorElement: <ErrorPage />
        }
      ) : (
        {
          path: '/',
          element: <Login setToken={setToken} />,
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