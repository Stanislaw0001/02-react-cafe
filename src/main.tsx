import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/App/App.module.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
