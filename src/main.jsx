import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from 'react-router-dom'
import Home from './Page/Home.jsx'
import About from './Page/About.jsx'
import NewProduct from './Page/NewProduct.jsx'
import Signup from './Page/Signup.jsx'
import Menu from './Page/Menu.jsx'
import Contact from './Page/Contact.jsx'
import Login from './Page/Login.jsx'
import { store } from './redux/index.js';
import { Provider } from 'react-redux'


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='menu' element={<Menu/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='newproduct' element={<NewProduct/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
  </Provider>
)
