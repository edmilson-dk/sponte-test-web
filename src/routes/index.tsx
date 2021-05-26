import { BrowserRouter, Route, Switch } from "react-router-dom";

import { DashboarWrapper } from "src/components/dashboard-wrapper";
import { DashboardCreate } from "src/screens/dashboard-create";
import { DashboardHome } from "src/screens/dashboard-home";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <DashboarWrapper>
          <Route exact path="/"component={DashboardHome}/>
          <Route path="/new" component={DashboardCreate}/>
        </DashboarWrapper>
      </Switch>
    </BrowserRouter>
  )
}