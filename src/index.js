import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Tab, Tabs, Tablist, TabPanel } from 'react-tabs'
import './index.css'
import Header from './Header'
import App from './App'
import Order from './Order'
import Inventory from './Inventory/Inventory'
import reportWebVitals from './reportWebVitals'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Routing = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/order" element={<Order />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </Router>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
