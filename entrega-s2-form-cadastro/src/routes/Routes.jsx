import { Switch, Route } from "react-router-dom";

import Profile from "../pages/Profile/Profile";
import Signup from "../pages/Signup/Signup";
import { useState } from "react"


const Routes = () => {
  const [user, setUser] = useState([]);
   
  return (
    <Switch>
      <Route exact path="/">
        <Signup user={user} setUser={setUser}/>
      </Route>

         <Route path="/:id">
        <Profile user={user}/>
      </Route>
    </Switch>
  );
};

export default Routes;
