import './ListSpots.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSpots } from '../../store/spot';
import { NavLink } from 'react-router-dom'

export default function ListSpots() {

    const dispatch = useDispatch();

    const spotsObj = useSelector(state => state.spots);
    const spots = Object.values(spotsObj);
    console.log(spots);

    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch])

    const pluralText = (number, word) => {
        if (number > 1) {
            word = word + 's'
            return `${number} ${word}`;
        } else return `${number} ${word}`
    }

    return (
        <>
        <section id='cards-container'>
            {spots.map(spot => (
                <NavLink to={`/spots/${spot.id}`} className='card'>
                    <img src='https://a0.muscache.com/im/pictures/miso/Hosting-36767861/original/ffcc6215-0b1c-4e8c-b2e0-473b3c801014.jpeg?im_w=1200'></img>
                    <div className='card-info'>
                        <h3>{spot.title}</h3>
                        <ul id='stay-specifics'>
                            <p>{ `${pluralText(spot.guestCount, 'guest')}`}</p>
                            <p>{ `${pluralText(spot.staySize, 'bedroom')}`}</p>
                            <p>{ `${pluralText(spot.roomCount, 'bed')}`}</p>
                            <p>{ `${pluralText(spot.bathCount, 'bath')}`}</p>
                        </ul>
                    </div>
            <p>{`$${spot.nightlyCost} / night`}</p>
            </NavLink>))}
        </section>
        </>
    )
}
