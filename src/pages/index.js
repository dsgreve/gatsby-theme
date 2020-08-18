import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return <div class="bg-purple-800 p-20">
    <Link to="/contact/">Contact Me</Link>
    <Header headerText="Hello! I'm Dale, a front‑end developer located in Michigan." />
    <p class="text-2xl text-white"> I specialize in creating websites that fit the unique style & message to best reach your audience.</p>
    <p class="text-2xl text-white">This site is where I showcase my work as well as experiment with new technology, techniques and styles.</p></div>

}
