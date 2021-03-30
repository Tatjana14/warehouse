import Product from '../product/Product';
import s from'./Main.module.scss';

import peppers from '../../assets/img/pappersss.png';

import Slogan from '../slogan/Slogan';

import materia from '../../assets/img/iconMateria.png'

import bottle from '../../assets/img/saltBottle.png';

import Menu from '../menu/Menu';

import bowls from '../../assets/img/bowls.png';
import cups from  '../../assets/img/cups.png';
import dispensers from '../../assets/img/dispensers.png';
import furniture from  '../../assets/img/furniture.png';
import tableware from  '../../assets/img/tableware.png';
import cutlery from  '../../assets/img/cutlery.png';
import plants from  '../../assets/img/plants.png';

import CollectionName from '../collectionName/CollectionName';

import seven from '../../assets/img/sevenPots.png';
import jahaan from '../../assets/img/iconJahaan.png';

import sofa from '../../assets/img/sofa.png';
import rooms from '../../assets/img/rooms.png';

import amisha from '../../assets/img/iconAmisha.png';
import shakers from '../../assets/img/shakers.png';
import authentics from '../../assets/img/autentics.png';

import karina from '../../assets/img/iconKarina.png';

import potFooter from '../../assets/img/potFooter.png';
import shakerFooter from '../../assets/img/shakerFooter.png';
import plateFooter from '../../assets/img/plateFooter.png';
import logo from '../../assets/img/squareFooter.png'

function Main() {

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
                    
                    <div className={s.slider}>
                        <img className={s.slide} src={bottle} alt="Salt Bottle"/>
                    </div>
                </div>
            </div>
            <div className={s.menuWrapper}>
                <Menu title = "WAREHOUSE" items = {items}/>
            </div>
            <div className={s.sevenPots}>
                <CollectionName
                style= {{ backgroundColor: "#f5f5f5"}}
                src={seven} 
                alt="Seven Pots"/>
            </div>
            <div className={s.potsWrapper}>
                <div className={`${s.container} ${s.potsContainer}`} >
                    <Product
                        productName = "Kettle Thermo Pot"
                        productPrice = "274.50 &#36;"                        
                        />
                    <Slogan
                        styleWrapperSlogan = {{ maxWidth: "185px", paddingTop: "80px", paddingBottom: "60px"}}
                        imgSrc={jahaan}
                        imgAlt="NOOR JAHAAN"
                        nameProduction="BY NOOR JAHAAN"
                        sloganOne="Tea"
                        sloganTwo="O’Clock"
                    />
                </div>
            </div>
            <div className={s.roomsWrapper} >
                <img className={s.sofaImg} src={sofa} alt="Sofa"/>
                <img className={s.roomsImg} src={rooms} alt="Rooms"/>
            </div>
            <div className={s.grindlerWrapper}>
                <div className={`${s.container} ${s.grindlerContainer}`}>
                    <Product
                        productName = "Salt &amp; Pepper  Grinder"
                        productPrice = "75.50 &#36;"
                        />
                    <Slogan
                        styleWrapperSlogan = {{ maxWidth: "210px", paddingTop: "70px", paddingBottom: "55px"}}
                        imgSrc={amisha}
                        imgAlt="BY AMISHA PATEL"
                        nameProduction="BY AMISHA PATEL"
                        sloganOne="Ebony &amp;"
                        sloganTwo="Ivory"
                    />
                </div>
            </div>
            <div className={s.shakersWrapper}>
                <CollectionName
                style= {{ backgroundColor: "#f5f5f5"}}
                src={shakers} 
                alt="Shakers"/>
            </div>
            <div className={s.authenticsWrapper}>
                <CollectionName
                src={authentics} 
                alt="Authentics"/>
            </div>
            <div className={s.bowlWrapper}>
                <div className={`${s.container} ${s.bowlContainer}`}>
                    <Product
                        productName = "Generic Oak Bowl"
                        productPrice = "87.49 &#36;"
                        />
                    <Slogan
                        styleWrapperSlogan = {{ maxWidth: "230px", paddingTop: "75px", paddingBottom: "58px"}}
                        imgSrc={karina}
                        imgAlt="BY KARINA KAPOOR"
                        nameProduction="BY KARINA KAPOOR"
                        sloganOne="Back"
                        sloganTwo="to Basics"
                    />
                </div>
            </div>
            <div className={s.footer} >
                <div className={`${s.container} ${s.footerContainer}`}>
                    <div className={s.footerInformation} >
                        <div className={s.footerImages} >
                            <img className={s.footerImg} src={potFooter} alt="Pot"/>
                            <img  className={s.footerImg} src={shakerFooter} alt="Shaker"/>
                            <img  className={s.footerImg} src={plateFooter} alt="Plate"/>
                        </div>
                        <p className={s.footerInfo}>2014 WARE HOUSE, USA based company. Image right belong to their respective owners.</p>
                    </div>
                    <div className={s.footerLogo}>
                        <img className={s.imgLogo} src={logo} alt="Logo"/>
                        <h2 className={s.titleLogo}>warehouse</h2>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Main;