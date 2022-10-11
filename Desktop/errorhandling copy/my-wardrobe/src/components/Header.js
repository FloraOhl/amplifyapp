import { Link } from "react-router-dom"

// Create what we should see: html and js
const Header = () => {
  return (
    <header>
      <h1> Welcome to my online wardrobe!</h1>
      <nav className="navbar navbar-dark bg-primary">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item"> 
        <Link className="navbar-brand" aria-current="page" to="/">Home</Link></li>
        <li> 
        <Link className="nav-link active" to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header