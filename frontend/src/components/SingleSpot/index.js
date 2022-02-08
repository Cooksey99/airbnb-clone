import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './SingleSpot.css'
// import db from '../../../../backend/db/models/spot';

export default function SingleSpot({ guestCount, staySize }) {
    const { id } = useParams();

    useEffect(() => {
        fetch('/api/spots')
    })

    console.log(id);
    return (
        <div className="test">
            <h1>
                Spot ID = { id }
            </h1>
        </div>
    )
}
