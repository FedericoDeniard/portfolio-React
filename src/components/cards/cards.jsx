import './cards.css'


function Card ({project, evenOrOdd, link, imgSrc, text}) {
    return(
        <a className={`card ${project} ${evenOrOdd}`}
            href={link}
            target='_blank'
            onContextMenu={(e) =>{
                e.preventDefault();
            }}
        >
            <h5 className="title cardTitle">{project}</h5>
            <img src={imgSrc} className='image' />
            <p className='text'>{text}</p>
        </a>
    )
} export default Card
