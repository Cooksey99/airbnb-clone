import React, { useState } from "react";
import './HomeDateBar.css'

export default function HomeDateBar() {

    return (
        <>
            <section id="date-bar">
                <div>
                    <label>Location</label>
                    <input className="location"></input>
                </div>
                <div>
                    <label>Check in</label>
                    <input type='date'
                    className="check-in"></input>
                </div>
                <div>
                    <label>Check out</label>
                    <input type='date'
                    className="check-out"></input>
                </div>
                <div>
                    <label>Guests</label>
                    <select
                    className="guests">
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                    </select>
                </div>
            </section>
        </>
    )
}
