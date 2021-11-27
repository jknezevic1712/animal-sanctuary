import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";

// * Components
import Spinner from "./components/spinner/spinner.component";

// * Page Components
import Header from "./components/header/header.component";
const Homepage = lazy(() => import("./pages/homepage/homepage.component"));

// * App component
const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={Homepage} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
