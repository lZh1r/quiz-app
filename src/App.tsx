import {createBrowserRouter, RouterProvider} from "react-router";
import HomePage from "./pages/HomePage.tsx";

function App() {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
