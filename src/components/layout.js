import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div div class="bg-purple-700 min-h-screen p-10">
      <header>
        <div><Link to="/">DG</Link></div>
        <div>
          <ul>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </div>
      </header>
      {children}
      <footer>
        <p class="text-xs">Created with Gatsby</p>
      </footer>
    </div>
  )
}