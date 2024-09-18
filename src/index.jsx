import './styles/Global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import {router} from './router/index';
const moduleglob = import.meta.glob('./global/*.js');

//Variable de entorno
const env = import.meta.env.VITE_NAME
console.log("variable index", env)

for (const path in moduleglob) {

  console.log(path); //Mostrará las rutas
  moduleglob[path]().then(mod => mod.load());//devuelve una promesa. Obtiene la función load de cada. módulo

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
