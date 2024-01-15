
import './icons.css'

function FooterIcons ({className, id, imgSrc, onClick}){
    return (
        <img className={`icon ${className ?? ""}`} id={id} src={imgSrc} onClick={onClick}onContextMenu={(e) =>{
            e.preventDefault();
        }}/>
    )
} export default FooterIcons