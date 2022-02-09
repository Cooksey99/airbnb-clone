import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './SingleSpot.css'
import { findSpot } from "../../store/spot";

export default function SingleSpot() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const oneSpot = useSelector(state => state.spots[id])

    console.log(oneSpot);

    useEffect(() => {
        dispatch(findSpot(id));
    }, [dispatch])

    // converts room to rooms, bath to baths, etc.
    // based on number being above 1
    const pluralText = (number, word) => {
        if (number > 1) {
            word = word + 's'
            return `${number} ${word}`;
        } else return `${number} ${word}`
    }

    if (!oneSpot) return '...loading'
    return (
        <div className="test">
            <h1>
                Spot title = { oneSpot.title }
            </h1>
            <div>
                <h2>Placeholder text</h2>
                <p>{ `${pluralText(oneSpot.guestCount, 'guest')}`}</p>
                <p>{ `${pluralText(oneSpot.staySize, 'bedroom')}`}</p>
                <p>{ `${pluralText(oneSpot.roomCount, 'bed')}`}</p>
                <p>{ `${pluralText(oneSpot.bathCount, 'bath')}`}</p>
            </div>

        </div>
    )
}
