import { useState } from "react";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import Footer from "./footer";
import Nav from "./nav";

function MyConnectivityrequest() {
  const [name, setName] = useState("");
  const [connectivitytype, setConnectivitytype] = useState("");
  const [environment, setEnvironment] = useState("");
  const [componentname, setComponentname] = useState("");
  const [sourceip, setSourceip] = useState("");
  const [destinationcomp, setDestinationcomp] = useState("");
  const [destinationip, setDestinationip] = useState("");
  const [destinationport, setDestinationport] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("The name you entered was: ${name}");
  };

  return (
    <div>
      <Nav />
      <Footer />

      <form onSubmit={handleSubmit}>
        <h2 style={{ paddingLeft: 40, paddingBottom: 2, marginBottom: 0 }}>
          New Connectivity request
        </h2>
        <h4 style={{ paddingLeft: 40, paddingBottom: 2, marginTop: 0 }}>
          Provide required details to implement connectivity
        </h4>
        <table>
          <tr>
            <div class="row" style={{ paddingLeft: 50 }}>
              <div
                class="column"
                style={{ backgroundColor: "white", paddingLeft: 25 }}
              >
                <label class="required">
                  {" "}
                  <b>Project Name</b>{" "}
                </label>
                <br />

                <input
                  required
                  type="text"
                  style={{
                    marginTop: 8,
                    paddingRight: 25,
                    width: 200,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 5,
                    fontSize: 15,
                    border: "1.5px solid black",
                  }}
                  placeholder="Enter Project Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
                <label class="required">
                  <b> Connectivity Type</b>{" "}
                </label>
                <br />

                <input
                  required
                  type="text"
                  style={{
                    marginTop: 8,
                    paddingRight: 25,
                    width: 200,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 5,
                    fontSize: 15,
                    border: "1.5px solid black",
                  }}
                  placeholder="E.g. 3rd Party"
                  value={connectivitytype}
                  onChange={(e) => setConnectivitytype(e.target.value)}
                />
                <br />
                <br />
              </div>

              <div
                class="column"
                style={{ backgroundColor: "white", paddingLeft: 300 }}
              >
                {/* <h2>Column 2</h2> */}
                <label>
                  {" "}
                  <b>Environment</b>{" "}
                </label>
                <br />
                <input
                  type="text"
                  style={{
                    marginTop: 8,
                    paddingRight: 25,
                    width: 200,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 5,
                    fontSize: 15,
                    border: "1.5px solid black",
                  }}
                  placeholder="Select environment"
                  value={environment}
                  onChange={(e) => setEnvironment(e.target.value)}
                />
                <br />
                <br />
              </div>
            </div>
          </tr>

          <tr>
            <div class="row" style={{ paddingLeft: 60 }}>
              {/* <div class="row"> */}

              <div
                class="column"
                style={{ backgroundColor: "white", paddingLeft: 15 }}
              >
                <h3 style={{ marginTop: 0 }}>Source Details</h3>

                <label class="required">
                  {" "}
                  <b>Source Component name</b>{" "}
                </label>
                <br />

                <input
                  required
                  type="text"
                  style={{
                    marginTop: 8,
                    paddingRight: 25,
                    width: 200,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 5,
                    fontSize: 15,
                    border: "1.5px solid black",
                  }}
                  placeholder="Select Component Name"
                  value={componentname}
                  onChange={(e) => setComponentname(e.target.value)}
                />
                <br />
                <br />
                <label class="required">
                  <b> Source IP address</b>{" "}
                </label>
                <br />

                <input
                  required
                  type="text"
                  style={{
                    marginTop: 8,
                    paddingRight: 25,
                    width: 200,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 5,
                    fontSize: 15,
                    border: "1.5px solid black",
                  }}
                  placeholder="Enter source IP address"
                  value={sourceip}
                  onChange={(e) => setSourceip(e.target.value)}
                />
                <br />
                <br />

                <input
                  type="submit"
                  style={{
                    fontWeight: "bold",
                    width: 110,
                    paddingLeft: 25,
                    paddingRight: 25,
                    fontSize: 15,
                    marginTop: 18,
                  }}
                />
              </div>
              <div
                class="column"
                style={{
                  backgroundColor: "white",
                  paddingLeft: 300,
                }}
              >
                <h3 style={{ marginTop: 0 }}>Destination Details</h3>
                <label>
                  {" "}
                  <b>Destination Component name</b>{" "}
                </label>
                <br />
                <input
                  type="text"
                  style={{
                    marginTop: 8,
                    paddingRight: 25,
                    width: 200,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 5,
                    fontSize: 15,
                    border: "1.5px solid black",
                  }}
                  placeholder="Enter Destination component name"
                  value={destinationcomp}
                  onChange={(e) => setDestinationcomp(e.target.value)}
                />
                <br />
                <br />

                <label>
                  {" "}
                  <b>Destination IP address</b>{" "}
                </label>
                <br />
                <input
                  type="text"
                  style={{
                    marginTop: 8,
                    paddingRight: 25,
                    width: 200,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 5,
                    fontSize: 15,
                    border: "1.5px solid black",
                  }}
                  placeholder="E.g. 172.1.1.2"
                  value={destinationip}
                  onChange={(e) => setDestinationip(e.target.value)}
                />
                <br />
                <br />

                <label>
                  {" "}
                  <b>Destination Port Number</b>{" "}
                </label>
                <br />
                <input
                  type="text"
                  style={{
                    marginTop: 8,
                    paddingRight: 25,
                    width: 200,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 5,
                    fontSize: 15,
                    border: "1.5px solid black",
                  }}
                  placeholder=".E.g. 2040"
                  value={destinationport}
                  onChange={(e) => setDestinationport(e.target.value)}
                />
                <br />
                <br />
              </div>
              {/* </div>
</div>      */}
            </div>
          </tr>
        </table>
      </form>
    </div>
  );
}

ReactDOM.render(<MyConnectivityrequest />, document.getElementById("root"));
