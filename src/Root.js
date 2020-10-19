import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './Views/Home/home'
import IDCard from './Views/IDCard/IDCard';
import IDMain from './Views/IDMain/IDMain';
import Passport from './Views/Passport/passport'
import FaceLivness from './Views/FaceLivness/faceLivness'
import ResidentPermit from './Views/ResidentPermit/ResidentPermit'
import POADoc from './Views/POADoc/POADoc'
import Result from './Views/Result/Result'
import IDDocCamera from './Views/IDDocCamera/IDDocCamera'
import POADocCamera from './Views/POADocCamera/POADocCamera'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/idcard" component={IDCard} />
                <Route exact path="/idmain" component={IDMain} />
                <Route exact path="/passport" component={Passport} />
                <Route exact path="/residentpermit" component={ResidentPermit} />
                <Route exact path="/facelivness" component={FaceLivness} />
                <Route exact path="/result" component={Result} />
                <Route exact path="/iddoccamera" component={IDDocCamera} />
                <Route exact path="/poadoccamera" component={POADocCamera} />
                <Route exact path="/poadoc" component={POADoc} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;