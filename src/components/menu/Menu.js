import close from '../../assets/img/closebtn.png'
import './Menu.scss';
import { useState } from 'react';
import home from '../../assets/img/home.png';
import like from '../../assets/img/diamond.png';
import search from '../../assets/img/search.png';

function Menu({title, items}) {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <div className="menuWrapper">
            <nav className={menuActive? 'menuActive' : 'menu'} >
                <a className='btnClose' onClick={() => setMenuActive(false)}><img src={close} alt="Close button"/></a>
                <p className='title'>{title}</p>
                <ul className='menuList'>
                    {items.map(item =>
                        <li key={item.id} className='menuItem'>
                            <img src={item.icon} alt={item.alt}/>
                            <a  className='menuLink' href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </nav>
            <div className={menuActive? 'navWrapperActive' : 'navWrapper'} >
                <ul className="navigation">
                    <li className="navItem">
                        <a className="navLink" href="#" onClick={() => setMenuActive(!menuActive)} >
                            <img src={home} alt="Home"/>
                        </a>
                    </li>
                    <li className="navItem">
                        <a className="navLink" href="#">
                            <img src={like} alt="Favored"/>
                        </a>
                    </li>
                    <li className="navItem">
                        <a className="navLink" href="#">
                            <img src={search} alt="Search"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;