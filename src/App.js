import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Stock from "./pages/Stock"
import Dashboard from "./pages/Dashboard"
import Nav from "./components/Nav"


function App() {
  
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/stock/:symbol"  render={(routerProps) => <Stock {...routerProps}/>}/>
      </Switch>
    </div> 
  );

}
export default App;
