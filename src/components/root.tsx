// Root entry point

import React from "react";
import Helmet from "react-helmet";
import { hot } from "react-hot-loader/root";
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
  Redirect
} from "react-router-dom";
import { Global } from "@emotion/core";
// Components
import ScrollTop from "../components/helpers/scrollTop";
// Global styles
import globalStyles from "../global/styles";
// Local components
import Header from "../components/Header";
import HomePage from "../containers/HomePage";
import FlowerFestPage from "../containers/FlowerFestPage";
import RequestPage from "../containers/RequestPage";
import Footer from "./Footer/Footer";
import { useUserQuery } from "../graphql";
import AdminPage from "@/containers/AdminPage";
import AdminUserRequestPage from "@/containers/AdminUserRequestPage";

// ----------------------------------------------------------------------------

interface IProps {}

type RootProps = IProps & RouteComponentProps;

const Root: React.FunctionComponent<RootProps> = (props: RootProps) => {
  const { data, error, loading } = useUserQuery({
    variables: {
      search: null,
      sort: null,
      competitionId: null,
      page: null
    }
  });

  if (error) {
    return <h1>Error retrieving news stories! &mdash; {error.message}</h1>;
  }

  if (loading) {
    return <div className="loader"></div>;
  }

  const {
    startPage: { user }
  } = data;

  // function checkAdmin() {
  //   const check = user.roles.filter((item: any) => item === "admin");
  //   if (check.length === 0) {
  //     // return console.log('redirect')
  //     props.history.push("/");
  //     AdminPage;
  //   }
  // }
  function redirectAdminRequest(props: any) {
    if (
      user &&
      user.roles.filter((item: any) => item === "support").length !== 0
    ) {
      return <AdminUserRequestPage {...props} />;
    }
    return <Redirect to="/" />;
  }

  console.log(user);
  // console.log(checkAdmin());
  const pathname = props.location.pathname;
  return (
    <>
      <Global styles={globalStyles} />
      <Helmet>
        <title>Цветущая Казань</title>
        <link
          rel="icon"
          type="image/png"
          href="../images/favicon.png"
          sizes="16x16"
        />
      </Helmet>
      <ScrollTop>
        {/*  */}
        {pathname.indexOf("/admin") === -1 && <Header currentUser={user} />}
        <Switch>
          <Route
            path="/"
            exact
            render={props => <HomePage {...props} currentUser={user} />}
          />
          <Route path="/flowerfest" exact component={FlowerFestPage} />
          {/* <Route path="/admin" exact component={AdminPage} /> */}
          <Route path="/admin" exact>
            {user &&
            user.roles.filter((item: any) => item === "support").length !==
              0 ? (
              <AdminPage />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route
            path="/:id"
            exact
            render={props => <RequestPage {...props} currentUser={user} />}
          />
          <Route
            path="/admin/:id"
            exact
            render={props => redirectAdminRequest(props)}
          />
        </Switch>
        <Footer />
      </ScrollTop>
    </>
  );
};

export default withRouter(hot(Root));
