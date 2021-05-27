import { BrowserRouter, Route, Switch } from "react-router-dom";

import { DashboarWrapper } from "src/components/dashboard-wrapper";
import { DashboardCreate } from "src/screens/dashboard-create";
import { DashboardHome } from "src/screens/dashboard-home";
import { DashboardProducts } from "src/screens/dashboard-products";
import { DashboardUpdate } from "src/screens/dashboard-update";
import { DashboardViewProduct } from "src/screens/dashboard-view-product";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <DashboarWrapper>
          <Route exact path="/"component={DashboardHome}/>
          <Route path="/new" component={DashboardCreate}/>
          <Route path="/update" component={DashboardUpdate}/>
          <Route path="/list" component={DashboardProducts}/>
          <Route path="/view" component={DashboardViewProduct}/>
        </DashboarWrapper>
      </Switch>
    </BrowserRouter>
  )
}