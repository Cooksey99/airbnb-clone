import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { createListing } from "../../store/spot";
// import axios from 'axios';

export default function CreateListing() {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    // these will store the input values, which will be sent to the backend and handled
    const [title, setTitle] = useState('');
    const [guestCount, setGuestCount] = useState(null);
    const [staySize, setStaySize] = useState(null);
    const [roomCount, setRoomCount] = useState(null);
    const [bathCount, setBathCount] = useState(null);
    const [nightlyCost, setNightlyCost] = useState(null);
    const [description, setDescription] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');
    const [image5, setImage5] = useState('');
    // const [morePics, setMorePics] = useState(false);

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
            description,
            image1,
            image2,
            image3,
            image4,
            image5
        }
        console.log('user:      ' + sessionUser);
        await dispatch(createListing(listingData));
        // console.log('Listing:   ' + newListing)
        // if (newListing) {
        // }
        history.push('/')
        // return dispatchEvent(createListing(listingData))
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
                <label>Add images</label>
                <input placeholder="URL goes here"
                value={image1}
                onChange={(e) => setImage1(e.target.value)}
                required
                ></input>
                <input placeholder="URL goes here"
                value={image2}
                onChange={(e) => setImage2(e.target.value)}
            
                ></input>
                <input placeholder="URL goes here"
                value={image3}
                onChange={(e) => setImage3(e.target.value)}

                ></input>
                <input placeholder="URL goes here"
                value={image4}
                onChange={(e) => setImage4(e.target.value)}

                ></input>
                <input placeholder="URL goes here"
                value={image5}
                onChange={(e) => setImage5(e.target.value)}

                ></input>

{/*
                <button onClick={morePics}>Add more pics</button>
                {morePics && (
                    <>
                        <input placeholder="URL goes here"
                        value={image2}></input>
                        <input placeholder="URL goes here"
                        value={image3}></input>
                        <input placeholder="URL goes here"
                        value={image4}></input>
                        <input placeholder="URL goes here"
                        value={image5}></input>
                    </>
                )} */}

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
