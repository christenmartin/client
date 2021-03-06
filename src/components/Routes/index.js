import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { HomePage } from '../../components'
import BookingConfirmation from '../BookingConfirmation';
import OwnerPortal from "../OwnerPortal";
import OwnerSettings from "../OwnerSettings";
import Slots from '../Slots';
import UserBookings from "../UserBookings";
import BookedSlot from "../BookedSlot";
import Test from "../Test";

class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component= { HomePage } />
        <Route exact path="/users/:userId/bookings" component= { UserBookings } /> 
        <Route exact path="/stores/:storeId/slots" component= { Slots } /> 
        <Route exact path ="/stores/:storeId/bookings" component= { OwnerPortal } /> 
        <Route exact path="/slots/:slotId" component={ BookedSlot } />
        <Route exact path ="/stores/:storeId/settings" component= { OwnerSettings } /> 
        <Route exact path="/bookingConfirmation" component= { BookingConfirmation } /> 
        <Route exact path="/test" component={ Test } /> 
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    )
    }
}

export default Routes; 
