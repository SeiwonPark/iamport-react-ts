import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PaymentWindow from "./components/PaymentWindow"
import RedirectedPage from "./components/RedirectedPage"

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PaymentWindow />} />
          <Route path="/redirect" element={<RedirectedPage />} />
        </Routes>
      </Router>
    </div>
  )
}
