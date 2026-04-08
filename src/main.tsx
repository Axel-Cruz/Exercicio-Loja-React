import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'

import CriarConta from './pages/CriarConta/CriarConta.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CriarConta />
  </StrictMode>,
)
