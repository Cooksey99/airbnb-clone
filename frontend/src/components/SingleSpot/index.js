import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './SingleSpot.css'
import { getSpots } from "../../store/spot";

export default function SingleSpot() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const spotsObj = useSelector(state => state.spots);
    const spots = Object.values(spotsObj);
    

    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch])

    console.log(id);
    return (
        <div className="test">
            <h1>
                Spot ID = { id }
            </h1>
        </div>
    )
}
