import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/login-signup/Login";
import Signup from "./containers/login-signup/Signup";
import AppliedRoute from "./components/AppliedRoute";
import NewNote from "./containers/notes/NewNote";
import Notes from "./containers/notes/GetNoteById";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
      <AppliedRoute
        path="/signup"
        exact
        component={Signup}
        appProps={appProps}
      />
      <AppliedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
      <AppliedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}
