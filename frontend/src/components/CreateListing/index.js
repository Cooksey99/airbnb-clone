import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { createListing } from "../../store/spot";
// import axios from 'axios';

export default function CreateListing() {
    const history = useHistory();
    const dispatch = useDispatch();
    // these will store the input values, which will be sent to the backend and handled
    const [title, setTitle] = useState();
    const [guestCount, setGuestCount] = useState();
    const [staySize, setStaySize] = useState();
    const [roomCount, setRoomCount] = useState();
    const [bathCount, setBathCount] = useState();
    const [nightlyCost, setNightlyCost] = useState();
    const [description, setDescription] = useState();

    // const getUserId = () => {
    //     axios.get('/', { withCredentials: true })
    //         .then(res => res)
    //         .then(data => console.log(data))
    // }

    const submitListing = async (e) => {
        e.preventDefault();
        // getUserId();
        // req.user.id
        const listingData = {
            title,
            guestCount,
            staySize,
            roomCount,
            bathCount,
            nightlyCost,
            description
        }

        const newListing = await dispatch(createListing(listingData));
        // console.log('Listing:   ' + newListing)
        if (newListing) {
            history.push(`/spots/${newListing.id}`);
        }
        return dispatchEvent(createListing(listingData))
    }

    return (
        <>
            <h1>Create a Listing</h1>
            <form
            id="create-listing"
            onSubmit={submitListing}>
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
                <button>Submit</button>
            </form>
        </>
    )
}
