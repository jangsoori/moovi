import React from "react";
import { Route, Switch } from "react-router-dom";
import Favourites from "./Favourites";
import Home from "./Home";
import New from "./New";
import Saved from "./Saved";
import Top from "./Top";
import Upcoming from "./Upcoming";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={New} />
      <Route path="/top" component={Top} />
      <Route path="/upcoming" component={Upcoming} />
      <Route path="/saved" component={Saved} />
      <Route path="/favourites" component={Favourites} />
    </Switch>
  );
}
