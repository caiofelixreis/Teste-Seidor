import React from 'react'
import logo from '../../assets/logo.png'
import { FiHeart } from 'react-icons/fi'
import style from './style.module.scss'
import { Link } from 'react-router-dom'


//componente padrão para todas as paginas

const Layout = ({ children }) => {
    return (
        <>
            <nav className={style.nav}>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </nav>

            {children}

            <footer className={style.footer}> Feito com <FiHeart /> por <strong> Caio Félix </strong> </footer>
        </>
    )
}

export default Layout
