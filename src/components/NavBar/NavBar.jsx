import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  const imgAfa = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Argentine_Football_Association_logo.svg/800px-Argentine_Football_Association_logo.svg.png";
  return (
    <header>
        <Link to={"/"}>
          <img className="imgAfa" src={imgAfa} alt="" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to={"/categoria/2"}> Camisetas </NavLink>
                </li>

                <li>
                  <NavLink to={"/categoria/3"}> Camperas </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar