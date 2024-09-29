import React  from 'react'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Shopcontextprovider from './context/Shopcontext.jsx'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Shopcontextprovider>
      <App />
    </Shopcontextprovider>
  </BrowserRouter>,
)
