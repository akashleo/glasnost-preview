import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@glasnost-ui/react/dist/style.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
