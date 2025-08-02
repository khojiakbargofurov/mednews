// rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Main Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./pages/Create";
import Contact from "./pages/Contact";

function App() {  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        { path: "/create",
          element: <Create />,
        },
        {
          path: "/contact",
          element: <Contact />, 
        }
      ],
    }
  ]);
  return <RouterProvider router={routes} />;
}

export default App;