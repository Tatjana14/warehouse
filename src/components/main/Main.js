import Product from '../product/Product';
import s from'./Main.module.scss';

import peppers from '../../assets/img/pappersss.png';

import Slogan from '../slogan/Slogan';

import materia from '../../assets/img/iconMateria.png'
import home from '../../assets/img/home.png';
import like from '../../assets/img/diamond.png';
import search from '../../assets/img/search.png';
import bottle from '../../assets/img/saltBottle.png';
import design from '../../assets/img/designRoom.png';

import Menu from '../menu/Menu';

import bowls from '../../assets/img/bowls.png';
import cups from  '../../assets/img/cups.png';
import dispensers from '../../assets/img/dispensers.png';
import furniture from  '../../assets/img/furniture.png';
import tableware from  '../../assets/img/tableware.png';
import cutlery from  '../../assets/img/cutlery.png';
import plants from  '../../assets/img/plants.png';

import { useState } from 'react';

import CollectionName from '../collectionName/CollectionName';

import seven from '../../assets/img/sevenPots.png';


function Main() {
    const [menuActive, setMenuActive] = useState(false);
    const items = [
        {id: "1",   
        value: "BOWLS & PANS", 
        href: '/bowls',
        icon: bowls, 
        alt: "BOWLS and PANS"},
        {id: "2",
        value: "CUPS", 
        href: '/cups',
        icon: cups, 
        alt: "Cups"},
        {id: "3",
        value: "DISPENSERS", 
        href: '/dispensers',
        icon: dispensers, 
        alt: "Dispensers"},
        {id: "4",
        value: "FURNITURE", 
        href: '/furniture',
        icon: furniture, 
        alt: "furniture"},
        {id: "5",
        value: "TABLEWARE", 
        href: '/tableware',
        icon: tableware, 
        alt: "tableware"},
        {id: "6",
        value: "CUTLERY", 
        href: '/cutlery',
        icon: cutlery, 
        alt: "cutlery"},
        {id: "7",
        value: "PLANTS & DECO", 
        href: '/plants',
        icon: plants, 
        alt: "plants"},
    ]
    return (
        <div className={s.mainWrapper}>
            <div className={s.header}>
                <div className={s.headerContainer}>
                    <Product
                    style= {{ paddingTop: "217px"}}
                    productName = "Cork Salt &amp; Pepper"
                    productPrice = "45.50 &#36;"
                    styleLike = {{ display: "none"}}
                    />
                    <img className={s.imgHeader}  src={peppers} alt="Cork Salt"/>
                    <Slogan
                        styleWrapperSlogan = {{ maxWidth: "330px", alignItems: "center" , paddingTop: "147px", paddingBottom: "215px"}}
                        imgSrc={materia}
                        imgAlt="BY MATERIA &amp; NENDO"
                        nameProduction="BY MATERIA &amp; NENDO"
                        styleSlogan={{ textAlign: "center"}}
                        sloganOne="Good"
                        sloganTwo="Things come in Paris"
                    />
                    <div className={s.headerNav}>
                        <ul className={s.navigation}>
                            <li className={s.navItem}>
                                <a className={s.navLink} href="#" onClick={() => setMenuActive(!menuActive)}>
                                    <img src={home} alt="Home"/>
                                </a>
                            </li>
                            <li className={s.navItem}>
                                <a className={s.navLink} href="#">
                                    <img src={like} alt="Favored"/>
                                </a>
                            </li>
                            <li className={s.navItem}>
                                <a className={s.navLink} href="#">
                                    <img src={search} alt="Search"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={s.slider}>
                        <img className={s.slide} src={bottle} alt="Salt Bottle"/>
                    </div>
                </div>
            </div>
            <div className={s.menuWrapper}>
                <img src={design} alt="Design Room"/>
                <Menu active={menuActive} setActive={setMenuActive} title = "WAREHOUSE" items = {items}/>
            </div>
            <CollectionName
            style= {{ backgroundColor: "#f5f5f5"}}
            src={seven} 
            alt="Seven Pots"/>
            <div  className={`${s.potsWrapper} ${s.productWrapper} `}>
                <div className={s.potsContainer} >
                <Product
                    productName = "CKettle Thermo Pot"
                    productPrice = "274.50 &#36;"
                    linkActive = {{ display: "none"}}
                    />
                </div>
            </div>
        </div>
        
    );
}

export default Main;