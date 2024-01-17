
import './icons.css'

function FooterIcons ({className, id, imgSrc, onClick, socialMedia}){
    return (<div className='icon-container'>
        <img className={`icon ${className ?? ""}`} id={id} src={imgSrc} onClick={onClick}onContextMenu={(e) =>{
            e.preventDefault();
        }}/>
        {socialMedia && <div className='tooltiptext'>{socialMedia}</div>}
        </div>
    )
} export default FooterIcons