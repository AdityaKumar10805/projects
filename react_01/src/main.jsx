import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to  visit Google'
)
createRoot(document.getElementById('root')).render(
 <>
 {reactElement}
 <App/>
   
 </>
  
)
