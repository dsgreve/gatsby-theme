import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
  return <div class="bg-purple-800 p-20">
    <Link to="/">Home</Link>
    <Header headerText="Get In Touch" />
    <p class="text-2xl text-white">I'd like to hear from you.</p>
  </div>
  )
}