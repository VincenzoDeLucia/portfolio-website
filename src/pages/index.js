import React from "react"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Layout from "../components/layout/layout"

export default function Home() {
  return (
    <div className="main-page">
      <Navbar />
      <Layout />
      <Footer />
    </div>
  )
}
