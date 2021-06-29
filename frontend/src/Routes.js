import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Login from "./Componentes/Login";
import Ranking from "./Componentes/Ranking";
import Dashboard from "./Componentes/Dashboard";
import Niveles from "./Componentes/Niveles";
import Perfil from "./Componentes/Perfil";
import Registration from "./Componentes/Registration";
import Basico from "./Componentes/Basico";
import Primer_Basico from "./Componentes/Primer_Basico";

export const ProtectedComponent = () => {
  return <Redirect to="http://localhost:3000/" />;
};

const Routes = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/ranking">
            <Ranking />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/niveles">
            <Niveles />
          </Route>
          <Route path="/perfil">
            <Perfil />
          </Route>
          <Route path="/basico">
            <Basico />
          </Route>
          <Route path="/primero">
            <Primer_Basico />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
