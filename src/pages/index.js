import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
export default function Home() {
  return (
    <div class="bg-purple-700 min-h-screen">
      <Header />
      <svg width="600" height="300">
        <path d="M100,200 C100,100  400,100  400,200"
          fill="none" stroke="#FFF" stroke-width="2px" />
      </svg>
      <h1 class="text-4xl text-yellow-200">Dale Greve</h1>
      <h2>A web developer located in Michigan.</h2>
      <p class="text-white text-2xl">Specializing in creating Wordpress sites that fit the unique style & message to best reach your audience.</p>
    </div>
  )
}
