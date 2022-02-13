import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupForm";
import LoginFormPage from "./components/LoginForm";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import SingleSpot from "./components/SingleSpot";
import ListSpots from "./components/ListSpots";
import CreateListing from "./components/CreateListing";
// import { SetBooking } from "./components/Bookings/SetBooking";
import { BookedTrips } from "./components/Bookings/BookedTrips";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/spots/create'>
            <CreateListing />
          </Route>
          <Route path='/spots/:id'>
            <SingleSpot />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/booking'>
            <BookedTrips />
          </Route>
          <Route path='/spots'>
            <ListSpots />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
