//routes.js

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import Login from "./pages/Login";
import Stream from "./pages/Stream";

const PrivateRoute = ({ component : Component, ...rest }) =>(
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props} />
      ) : (
      <Redirect to={{ pathname: '/', state: {from:props.location } }} />
    )
  )}/>
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/board" component={Dashboard} />
      <Route exact path="/stream" component={Stream} />
      <Route exact path="/" component={Login}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;

//---------------------------------------------------------------------------------------------------



// services/auth.js

export const isAuthenticated = () => true;

//exemplo:
/*
export const isAuthenticated = () => {
    const tokenAuth = localStorage.getItem('@central-de-falhas-greenwave/tokenAuth');
    if((tokenAuth !==null) && (tokenAuth !== undefined)){
        return true;
    } 
};

*/


