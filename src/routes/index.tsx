import { BrowserRouter, Route, Switch } from "react-router-dom";

import { DashboarWrapper } from "src/components/dashboard-wrapper";
import { DashboardHome } from "src/screens/dashboard-home";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <DashboarWrapper>
          <Route exact path="/"component={DashboardHome}/>
        </DashboarWrapper>
      </Switch>
    </BrowserRouter>
  )
}