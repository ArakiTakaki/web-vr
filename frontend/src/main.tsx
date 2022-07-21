import React from 'react'
import ReactDOM from 'react-dom/client'
import { Babylon } from './babylon';

import './injections/WebXR';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Babylon />
  </React.StrictMode>
)

