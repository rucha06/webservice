import { BrowserRouter, Link } from "react-router-dom";
import { Route } from "react-router-dom";
import MyForm from "./form";

// import {MyServerForm} from "./serverform";
// import {MyConnectivityrequest} from "./Components/connectivityrequest";

function MainRouter() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/form" component={MyForm} />
        {/* <Route path="/serverform" component={MyServerForm} /> */}
      </div>
    </BrowserRouter>
  );
}
export default MainRouter;
