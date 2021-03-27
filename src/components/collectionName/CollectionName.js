import s from './Collection.module.scss';

function CollectionName(props) {
    return (
            <div style={props.style} className={s.wrapper} >
                <img className={s.img} src={props.src} alt={props.alt}/>
            </div>
    );
}

export default CollectionName;