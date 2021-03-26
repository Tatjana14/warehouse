import s from'./Product.module.scss';
import like from '../../assets/img/like.png';

function Product(props) {
    return (
        <div style={props.style} className={s.wrapper}>
            <p style={props.styleName} className={s.title}>{props.productName}</p>
            <span style={props.stylePrice} className={s.subtitle} >{props.productPrice}</span>
            <div style={props.styleLike} className={s.linkWrapper} >
                <a className={s.linkLike} href="#"><img src={like} alt="Like"/></a>
                <span style={props.linkActive} className={s.linkActive}>FAVED</span>
                <span style={props.linkDisabled} className={s.linkDisabled}>ADD TO FAVED</span>
            </div>
        </div>
    );
}

export default Product;