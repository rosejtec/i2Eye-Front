import React, { Suspense, lazy } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/AppLayouts/NavBar";

const Stations = lazy(() => import("./Stations"));
const Queue = lazy(() => import("./Queue"));
const RegForm = lazy(() => import("./RegForm"));
const Station1 = lazy(() =>
  import("./Components/StationComponents/StationForms/Station1")
);
const Station2 = lazy(() =>
  import("./Components/StationComponents/StationForms/Station2")
);

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <NavBar className={classes} />
        <div className={classes.content}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={RegForm} />
              <Route exact path="/stations" component={Stations} />
              <Route
                exact
                path="/stations/station1/:patientID"
                component={Station1}
              />
              <Route
                exact
                path="/stations/station2/:patientID"
                component={Station2}
              />
              <Route exact path="/registration" component={RegForm} />
              <Route exact path="/queue" component={Queue} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    color: "white",
  },
  content: {
    marginLeft: 80,
    marginRight: 80,
    marginTop: 30,
  },
}));
