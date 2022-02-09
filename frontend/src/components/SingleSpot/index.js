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

    if (!oneSpot) return '...loading'
    return (
        <div className="test">
            <h1>
                Spot ID = { id }
                Spot title = { oneSpot.title }
            </h1>
            {}
        </div>
    )
}
