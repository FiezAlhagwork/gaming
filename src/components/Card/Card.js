/* eslint-disable jsx-a11y/alt-text */
import './Card.css'


function Card(props) {
    return (
        <>
            <div className='most-poupular-item'>
                    <div className='card-wrapper'>
                        <img className='most-poupular-item-image' src={props.image}/>
                        <div className='most-poupular-item-title d-flex '>
                            <h4>
                                {props.title}<br/>
                                <span>{props.category}</span>
                            </h4>
                            <ul>
                                <li><span>{props.rate}</span></li>
                                <li><span>{props.download}</span></li>
                            </ul>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Card
