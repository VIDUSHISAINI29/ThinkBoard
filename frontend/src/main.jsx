import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import toast from 'react-hot-toast'
import {BrowserRouter} from "react-router"
import {Toaster} from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Toaster
  position="top-right"
  reverseOrder={false}/>
    </BrowserRouter>
  </StrictMode>,
)
