import React from "react"
import { Link } from 'react-router-dom'
import logo from '../icons/logo.svg'
import movies from '../icons/movies.png'
import order from '../icons/order.png'
import login from '../icons/login.png'
import Search from './Search'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-white navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="logo" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav  align-items-center">
                    <li className="nav-it em ml-5">
                        <img src={movies} alt="Tous les films" className="align-center" />
                        <Link to="/" className="text-dark">
                            Tous nos films
                    </Link>
                    </li>
                </ul>
                <Search></Search>
                <ul className="ml-auto align-items-center">

                    <img src={login} alt="Login" className="align-center" />
                    <Link to='/login' className='text-dark'>
                        Votre compte
                    </Link>

                    

                    <img src={order} alt="Commande" className="align-center" />
                    <Link to='/Order' className='text-dark'>
                        Votre panier
                    </Link>

                </ul>
            </nav>

        );
    }
}
export default Navbar;