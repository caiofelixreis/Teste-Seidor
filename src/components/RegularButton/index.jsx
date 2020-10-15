import React from 'react'
import { FiPlus, FiCheck, FiEdit2 } from 'react-icons/fi'
import './style.module.scss'
import { Link } from 'react-router-dom'

const RegularButton = ({ title, icon, link, ...rest }) => {

    return (
        <Link to={link} style={{textDecoration: 'none'}}>
            <button {...rest} type="submit">
                {
                    icon === 'plus' && <FiPlus />
                }
                {
                    icon === 'check' && <FiCheck />
                }
                {
                    icon === 'edit' && <FiEdit2 />
                }
                {title}
            </button>
        </Link>

    )
}

export default RegularButton
