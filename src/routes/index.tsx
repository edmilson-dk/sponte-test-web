import { BrowserRouter, Route, Switch } from "react-router-dom";

import { DashboardHome } from "../screens/dashboard-home";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"component={DashboardHome}/>
      </Switch>
    </BrowserRouter>
  )
}