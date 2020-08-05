import React from 'react'

import photo from '../assets/images/0.jpeg'

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={photo} alt="" /></span>
        <h1>Hello, I'm Simon!</h1>
        <p>Full Stack Software Engineer <br />
        San Francisco, CA</p>
        <section>
            <ul className="icons">
                <li>
                    <a
                        href="https://github.com/simonwu-git"
                        className="icon fa-github alt"
                    >
                        <span className="label">GitHub</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/simon-wu-8437a2a8/"
                        className="icon fa-linkedin alt"
                    >
                        <span className="label">LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:simon.wu052@gmail.com"
                        className="icon fa-envelope-o alt"
                    >
                        <span className="label">Email</span>
                    </a>
                </li>
            </ul>
        </section>
    </header>
)

export default Header
