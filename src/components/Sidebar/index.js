import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHandshake, faHome, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
<div className='nav-bar'>
    <Link className='logo' to= '/' >
            <img src = {LogoS} alt = "logo" /> 
            <img  className ="sub-logo" src = {LogoSubtitle} alt = "AndrewP" /> 
    </Link> 
    <nav>
        <NavLink exact = "true" activeclassname ="active" to="/">
            <FontAwesomeIcon icon={faHome} color = "#4d4d4e" /> 
        </NavLink>
        <NavLink exact = "true" activeclassname ="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color = "#4d4d4e" /> 
        </NavLink>
        <NavLink exact = "true" activeclassname ="active" className ="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope}  color= "#4d4d4e"/> 
        </NavLink>
        <NavLink exact = "true" activeclassname ="active" className ="projects-link" to="/project">
            <FontAwesomeIcon icon={faStar}  color= "#4d4d4e" /> 
        </NavLink>
    </nav>
    <ul>
        {/* This is the linkedin icon/link */}
        <li>
            <a 
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/andrew-pronek-7859a4180/'
            >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/> 
            </a>
        </li>
        {/* Github link */}
        <li>
            <a 
            target='_blank'
            rel='noreferrer'
            href='https://github.com/Qwaggi/'
            >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/> 
            </a>
        </li>
       {/* Handshake link*/} 
        <li>
            <a 
            target='_blank'
            rel='noreferrer'
            href='https://app.joinhandshake.com/stu/users/18542885/'
            >
                <FontAwesomeIcon icon={faHandshake} color="#4d4d4e"/> 
            </a>
        </li>
    </ul>



</div>

)

export default Sidebar 
