import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.scss";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

// * Components
import Spinner from "./components/spinner/spinner.component";

// * Page Components
import Header from "./components/header/header.component";
const Homepage = lazy(() => import("./pages/homepage/homepage.component"));
const RegisterNew = lazy(() =>
  import("./pages/register-new/register-new.component")
);
const AuthenticationPage = lazy(() =>
  import("./pages/authentication/authentication.component")
);
const PetCollectionPage = lazy(() =>
  import("./pages/pet-collection/pet-collection.component")
);

// * App component
const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/register-new" component={RegisterNew} />
          <Route
            exact
            path="/authentication"
            render={() =>
              currentUser ? <Redirect to="/" /> : <AuthenticationPage />
            }
          />
          <Route exact path="/pet-collection" component={PetCollectionPage} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
