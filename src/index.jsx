import React from "react"
import ReactDOM from "react-dom"
import "./library.scss"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import ResetPassword from "./pages/RecoverPassword"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/* Home page */}
        <Route path="/" exact>
          <Home />
        </Route>
        {/* Sign Up page */}
        <Route path="/signup">
          <SignUp />
        </Route>
         {/* Reset password page */}
         <Route path="/resetpassword" exact>
          <ResetPassword />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()
