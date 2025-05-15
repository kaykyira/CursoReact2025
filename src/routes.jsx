import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Home from "./Pages/Home";
import AppLayout from "./layouts/Applayout/AppLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='cadastro' element={<Cadastro />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
