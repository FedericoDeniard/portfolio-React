import { useState } from 'react';
import './cards.css'


function Card ({project, evenOrOdd, link, imgSrc, text}) {
    const [touch, setTouch] = useState(false);
    return(
        <a className={`card ${project} ${evenOrOdd} ${touch ? "cardTouch" : ""}`}
            href={link}
            target='_blank'
            onContextMenu={(e) =>{
                e.preventDefault();
            }}
            onTouchStart={(e) => setTouch(true)}
      onTouchEnd={(e) =>{
          setTouch(false);
      }}
        >
            <h5 className="title cardTitle">{project}</h5>
            <img src={imgSrc} className='image' />
            <p className='text'>{text}</p>
        </a>
    )
} export default Card
