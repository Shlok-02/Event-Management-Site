import "./styles.css";
import data from "./data";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Album from "./Album";
import delete1 from "./delete1";
import create from "./create";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/data/:rowIndex" component={data} />
          <Route exact path="/delete1" component={delete1}></Route>
          <Route exact path="/create" component={create}></Route>
          <Route exact path="/" component={Album}></Route>
        </Switch>
      </div>
    </Router>
  );
}
