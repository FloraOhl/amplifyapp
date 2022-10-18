import { Link } from "react-router-dom"

// Create what we should see: html and js
const Header = () => {
  return (
    <header style = {{
      backgroundColor: 'lightblue',
      color: '#fff'
    }}>
      <h1> Welcome to my online wardrobe!</h1>
      <nav className="d-flex justify-content-center "> 
        <ul className="nav border-bottom border-primary">
        <li className="nav-item"> <Link to="/" className="nav-link">Main page wardrobe</Link></li>
        <li className="nav-item"> <Link to="/about" className="nav-link">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

//another way to style header
{/* <header style = {{
  backgroundColor: 'mediumblue',
  color: '#fff'
}}>
</header> */}
export default Header