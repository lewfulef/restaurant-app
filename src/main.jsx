// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import Navigation from './routes/navigation/navigation.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './componentes/footer/Footer.jsx'
// import Header from './componentes/Header/Header.jsx'



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Navigation/>
//     <Header/>
//     <App />
//     <Footer /> 
//     </BrowserRouter>
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </React.StrictMode>,
)
