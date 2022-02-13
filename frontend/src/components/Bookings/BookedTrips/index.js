import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchBookings } from "../../../store/booking";
import { findSpot, getSpots } from "../../../store/spot";
import './BookedTrips.css';

export const BookedTrips = () => {
    const dispatch = useDispatch();
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
        dispatch(fetchBookings());
        dispatch(getSpots());
        dispatch(findSpot(1));
    }

    // const grabSpotInfo = (spotId) => {
    //     dispatch(findSpot(spotId))
    // }

    const checkForTrips = () => {
        if (bookings) setNoTrips(true);
    }

    return (
        <>
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
                        <img src={book.spotInfo.image1} alt='' />
                        <h2>{book.spotInfo.title}</h2>
                        <p>{book.startDate}</p>
                        <p>{book.endDate}</p>
                    </div>
                )

            })}

            {noTrips && (
                <div>
                    <h2>No trips booked...yet!</h2>
                    <p>Time to dust off your bags and start planning your next adventure</p>
                </div>
            )}
            <button
                // onClick={() => grabSpotInfo()}
            >Start searching</button>
        </>
    )

}
