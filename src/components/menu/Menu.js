import close from '../../assets/img/closebtn.png'
import './Menu.scss';

function Menu({title, items, active, setActive}) {
    return (
            <nav className={active? 'menuActive' : 'menu'} >
                <a className='btnClose' onClick={() => setActive(false)}><img src={close} alt="Close button"/></a>
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
    );
}

export default Menu;