import { useState } from "react"


export default function CreateListing() {

    // these will store the input values, which will be sent to the backend and handled
    const [title, setTitle] = useState();
    const [guestCount, setGuestCount] = useState();
    const [staySize, setStaySize] = useState();
    const [roomCount, setRoomCount] = useState();
    const [bathCount, setBathCount] = useState();
    const [nightlyCost, setNightlyCost] = useState();
    const [description, setDescription] = useState();

    return (
        <>
            <h1>Create a Listing</h1>
            <form id="create-listing">
                <label>Title</label>
                <input value={title}></input>
                <label>Guest quantity</label>
                <input value={guestCount}></input>
                <label>Size of spot</label>
                <input value={staySize}></input>
                <label>Number of rooms</label>
                <input value={roomCount}></input>
                <label>Number of bathrooms</label>
                <input value={bathCount}></input>
                <label>Nightly cost</label>
                <input value={nightlyCost}></input>
                <label>Tell us about your place!</label>
                <textarea value={description}></textarea>
            </form>
        </>
    )
}
