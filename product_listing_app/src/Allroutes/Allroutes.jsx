import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../Page/Product'

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/"element={<Product/>} />
    </Routes>
  )
}

export default Allroutes
