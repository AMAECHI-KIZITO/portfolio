import { React, StrictMode }from 'react'
import {createRoot} from 'react-dom/client'
import App from './Application.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)