import {createBrowserRouter, RouteObject, RouterProvider} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import {quizes} from "./Quizes.tsx";

function App() {

  const routes:RouteObject[] = quizes.map((quiz) => ({path: `/${quiz.id}`, element: quiz.element}))

  routes.push({
    path: '/',
    element: <HomePage/>
  })

  const router = createBrowserRouter(
      routes
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
