import './Card.modul.css';

const Card = ({children, ...props}) => {
    return (
        <div className='card'>{children}</div>
    );
}

export default Card;