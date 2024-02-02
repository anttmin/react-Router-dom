import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/product"}>Products</NavLink>
        </nav>
    </div>
  )
}

export default Navbar