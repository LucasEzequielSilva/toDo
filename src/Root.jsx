import React from 'react'
import App from './App'
import Layout from './Layout';
import {
  Route,
  Routes,
} from "react-router-dom";

const Root = () => {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<div>blog</div>} />
        <Route path="/products" element={<div>products</div>} />
        <Route path="/pricing" element={<div>pricing</div>} />
      </Routes>
    </Layout>
    </>
  )
}

export default Root