
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Start_framework from './Component/start_framework/start_framework'
import About from './Component/about/about'
import Portfolio from './Component/portfolio/portfolio'
import Contact from './Component/contact/contact'
import Layout from './Component/layout/layout'
function App() {
  let router=createBrowserRouter(
    [{path:"/",element:<Layout></Layout>,children:[
      {path:"start_framework" , element:<Start_framework></Start_framework>},
      {path:"/" , element:<Start_framework></Start_framework>},
      {path:"about",element:<About></About>},
      {path:"portfolio",element:<Portfolio></Portfolio>},
      {path:"contact",element:<Contact></Contact>}
    ]}]
  )
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
