import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Budgets from "../pages/Budgets";
import Contacts from "../pages/Contacts";
import Financial from "../pages/Financial";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/budgets" exact component={Budgets} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/financial" exact component={Financial} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;