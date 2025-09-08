import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolderOpen, faEnvelope, faScrewdriverWrench, faGears } from '@fortawesome/free-solid-svg-icons';



const Nav = () => {
    return (
        <nav>
            <h1>My Portfolio</h1>
            <ul>
            <li><FontAwesomeIcon icon={faHome} /> Home</li>
            <li><FontAwesomeIcon icon={faFolderOpen} /> Projects</li>
            <li><FontAwesomeIcon icon={faEnvelope} /> Experience</li>
            <li><FontAwesomeIcon icon={faScrewdriverWrench} /> Tools</li>
            {/* <li><FontAwesomeIcon icon={faThoughtBubble} /> Thoughts</li> */}
            <li><FontAwesomeIcon icon={faGears} /> Settings</li>

            </ul>
        </nav>
    )
}

export default Nav;