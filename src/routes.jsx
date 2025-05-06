import  Login  from "./Pages/Login";
import  Cadastro  from "./Pages/Cadastro/Cadastro";
import Home from "./Pages/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="cadastro" element={<Cadastro />}/>
       </Route>
    )
  )
    
  export default function Routes(){
      return <RouterProvider router ={router} />
  }
