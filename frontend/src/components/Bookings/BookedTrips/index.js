import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { fetchBookings, fetchDeleteBooking } from "../../../store/booking";
import { findSpot, getSpots } from "../../../store/spot";
import './BookedTrips.css';

export const BookedTrips = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user.id);
    console.log('sessionUser:       ' + sessionUser)
    // get info for logged in user
    const bookingsObj = useSelector(state => state.booking);
    const bookings = Object.values(bookingsObj);

    // const sessionUser = useSelector(state => state.session.user);

    const spotsObj = useSelector(state => state.spots);
    const spots = Object.values(spotsObj);

    // checks if there are any trips
    const [noTrips, setNoTrips] = useState(false)




    // console.log(bookingsObj)

    const validBookings = bookings.slice();

    useEffect(() => {
        getBookedStays()
    }, [dispatch])

    useEffect(() => {
        checkForTrips()
    }, [])

    useEffect(() => {
        createListData()
    }, [])

        const createListData = () => {
            return validBookings.forEach(book => {
                return spots.forEach(spot => {
                    if (book.spotsId === spot.id) {
                        book.spotInfo = spot;
                    }
                })
            })
        }

    const getBookedStays = () => {
        dispatch(fetchBookings(sessionUser.id));
        dispatch(getSpots());
        dispatch(findSpot(1));
    }

    // const grabSpotInfo = (spotId) => {
    //     dispatch(findSpot(spotId))
    // }

    const checkForTrips = () => {
        if (bookings) setNoTrips(true);
    }

    const cancelBooking = (book) => {
        console.log(book)
        dispatch(fetchDeleteBooking(book.id))
    }

    return (
        <>
            <div className="all-content">
                <h1>Trips</h1>
                {validBookings.map(book => {
                    validBookings.forEach(book => {
                        spots.forEach(spot => {
                            if (book.spotsId === spot.id) {
                                book.spotInfo = spot;
                            }
                        })
                    })
                    return (
                        <div className="booking-card" key={book.id}>
                        <div className="full-data">
                            <div className="main-image">
                                    <img src={book.spotInfo.image1} alt='' />
                                    <h2>{book.spotInfo.title}</h2>
                            </div>
                                <p>{book.startDate}</p>
                                <p>{book.endDate}</p>
                        </div>
                            <div className="div-buttons">
                                <NavLink key={book.spotId} to={`/spots/${book.spotInfo.id}`} className='redirect-button'>
                                    <button>Take me there</button>
                                </NavLink>
                                <button className="cancel-button"
                                onClick={() => cancelBooking(book)}
                                >Cancel booking</button>
                            </div>
                        </div>
                    )

                })}
            </div>

            {!noTrips && (
                <section>
                    <div>
                        <h2>No trips booked...yet!</h2>
                        <p>Time to dust off your bags and start planning your next adventure</p>
                    </div>
                    <button
                        // onClick={() => grabSpotInfo()}
                    >Start searching</button>
                </section>
            )}
        </>
    )

}
