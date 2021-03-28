import s from'./Product.module.scss';
import like from '../../assets/img/like.png';
import { useState } from 'react';

function Product(props) {
    const [likeActive, setLikeActive] = useState(false);
    return (
        <div style={props.style} className={s.wrapper}>
            <p style={props.styleName} className={s.title}>{props.productName}</p>
            <span style={props.stylePrice} className={s.subtitle} >{props.productPrice}</span>
            <div style={props.styleLike} className={s.linkWrapper} >
                <button  onClick={() => setLikeActive(!likeActive)} className={likeActive? s.buttonLike : s.buttonLikeActive} href="#"></button>
                {likeActive ? <span style={props.linkActive} className={`${s.subtitle} ${s.linkActive}`}>FAVED</span> : <span style={props.linkDisabled} className={`${s.subtitle} ${s.linkDisabled}`}>ADD TO FAVED</span>}
            </div>
        </div>
    );
}

export default Product;