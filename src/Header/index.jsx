import React from "react";
import './header.css';

function Header (props) {
    const { dark, img, menuList } = props
    return (
        <header className={ `header ${ dark ? 'dark-mode' : '' }` }>
            <img src={ img.url } alt={ img.name } />
            <nav className="nav">
                <ul>
                    {
                        menuList.map(itemList => (
                            <a 
                                href={itemList.link}
                                key={itemList.name}>
                                <li>{itemList.name}</li>
                            </a>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export { Header }