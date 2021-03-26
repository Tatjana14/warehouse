import s from'./Slogan.module.scss';

function Slogan(props) {
    return (
        <div style={props.styleWrapperSlogan} className={s.wrapper}>
            <div className={s.iconWrapper}>
                <img className={s.img} src={props.imgSrc} alt={props.imgAlt}/>
                <span style={props.style} className={s.subtitleImg}>{props.nameProduction}</span>
            </div>
            <div style={props.styleSlogan}  className={s.sloganWrapper} >
                <h3 className={s.titleSlogan} >{props.sloganOne}</h3>
                <h3 className={s.titleSlogan}>{props.sloganTwo}</h3>
            </div>
        </div>
    );
}

export default Slogan;