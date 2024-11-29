import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import View from './View'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <View />
  </StrictMode>,
)
