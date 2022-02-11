import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import './SingleSpot.css'
import { editListing, deleteListing, getSpots } from "../../store/spot";
import { SetBooking } from "../Bookings/SetBooking";

export default function SingleSpot() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const [sameUser, setSameUser] = useState(false);
    const [editPage, setEditPage] = useState(false);

    const sessionUser = useSelector(state => state.session.user);
    // console.log('session user:      ' + sessionUser.id);
    // contains the entire spot object
    const oneSpot = useSelector(state => state.spots[id])
    // console.log('oneSpot:      ' + oneSpot.userId);
    // sets sameUser to true if the user owns the listing

    const checkUser = () => {
        if (oneSpot.userId === sessionUser.id) setSameUser(true);
    };

    // data for editing the listing
    const [title, setTitle] = useState(oneSpot?.title || '');
    const [guestCount, setGuestCount] = useState(oneSpot?.guestCount || '');
    const [staySize, setStaySize] = useState(oneSpot?.staySize || '');
    const [roomCount, setRoomCount] = useState(oneSpot?.roomCount || '');
    const [bathCount, setBathCount] = useState(oneSpot?.bathCount || '');
    const [nightlyCost, setNightlyCost] = useState(oneSpot?.nightlyCost || '');
    const [description, setDescription] = useState(oneSpot?.description || '');


    // const [deleteButton, setDeleteButton] = useState(false);
    useEffect(() => {
        checkUser();
    }, [dispatch, checkUser])

    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch])

    useEffect(() => {
        if (oneSpot) {
            setTitle(oneSpot.title);
            setGuestCount(oneSpot.guestCount);
            setStaySize(oneSpot.staySize);
            setRoomCount(oneSpot.roomCount);
            setBathCount(oneSpot.bathCount);
            setNightlyCost(oneSpot.nightlyCost);
            setDescription(oneSpot.description);
        } else {
            return;
        }
    }, [oneSpot])

    // converts room to rooms, bath to baths, etc.
    // based on number being above 1
    const pluralText = (number, word) => {
        if (number > 1) {
            word = word + 's'
            return `${number} ${word}`;
        } else return `${number} ${word}`
    }

    const removeListing = (id) => {
        // console.log(id);
        dispatch(deleteListing(id))
        return history.push('/spots');
    }

    if (!oneSpot) return '...loading';


    const submitEdits = async (e) => {
        e.preventDefault();

        const listingData = {
            title,
            guestCount,
            staySize,
            roomCount,
            bathCount,
            nightlyCost,
            description
        }
        // const id = oneSpot.id;
        // console.log('spotId:        ' + id)
        // console.log('userId:   ' + sessionUser.id)
        await dispatch(editListing(listingData, id));
        // return dispatchEvent(editListing(listingData, id))
    }

    return (
        <>
        <div className="listing">
            <h1>
                { title }
            </h1>
            <div>
                <h2>Placeholder text</h2>
                <p>{ `${pluralText(oneSpot.guestCount, 'guest')}`}</p>
                <p>{ `${pluralText(oneSpot.staySize, 'bedroom')}`}</p>
                <p>{ `${pluralText(oneSpot.roomCount, 'bed')}`}</p>
                <p>{ `${pluralText(oneSpot.bathCount, 'bath')}`}</p>
            </div>
            {sameUser && (
                <>
                    <button
                    onClick={() => setEditPage(true)}
                    >Edit listing</button>
                    <button
                    onClick={() => removeListing(id)}
                    >Remove listing</button>
                </>
            )}
        </div>
        {/* only shows this option if you do know own the listing */}
        {!sameUser && (
            <SetBooking />
        )}
        {editPage && (
            <div>
                <h1>TEST THAT IT WORKS</h1>
                <form
                onSubmit={submitEdits}>
                    <label>Title</label>
                    <input value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    ></input>
                    <label>Guest quantity</label>
                    <input value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    required
                    ></input>
                    <label>Size of spot</label>
                    <input value={staySize}
                    onChange={(e) => setStaySize(e.target.value)}
                    required
                    ></input>
                    <label>Number of rooms</label>
                    <input value={roomCount}
                    onChange={(e) => setRoomCount(e.target.value)}
                    required
                    ></input>
                    <label>Number of bathrooms</label>
                    <input value={bathCount}
                    onChange={(e) => setBathCount(e.target.value)}
                    required
                    ></input>
                    <label>Nightly cost</label>
                    <input value={nightlyCost}
                    onChange={(e) => setNightlyCost(e.target.value)}
                    required
                    ></input>
                    <label>Tell us about your place!</label>
                    <textarea value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    ></textarea>
                    <button>Submit Changes</button>
                </form>
                <button
                onClick={() => setEditPage(false)}
                >Cancel</button>
            </div>
        )}
        </>
    )
}
