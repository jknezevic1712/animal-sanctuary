import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.scss";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

// * Components
import Spinner from "./components/spinner/spinner.component";
import PetInformationPage from "./components/pet-information-page/pet-information-page.component";

// * Page Components
import Header from "./components/header/header.component";
const Homepage = lazy(() => import("./pages/homepage/homepage.component"));
const RegisterNew = lazy(() =>
  import("./pages/register-new/register-new.component")
);
const AuthenticationPage = lazy(() =>
  import("./pages/authentication/authentication.component")
);
const PetCollectionContainer = lazy(() =>
  import("./pages/pet-collection/pet-collection.container")
);
const MyProfileContainer = lazy(() =>
  import("./pages/my-profile/my-profile.container")
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
          <Route
            exact
            path="/pet-collection"
            component={PetCollectionContainer}
          />
          <Route
            path={`/pet-collection/:urlID`}
            component={PetInformationPage}
          />
          <Route exact path="/my-profile" component={MyProfileContainer} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
