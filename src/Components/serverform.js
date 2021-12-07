import { useState } from "react";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import Footer from "./footer";
import Nav from "./nav";

function MyServerForm() {
  const [name, setName] = useState("");
  const [environment, setEnvironment] = useState("");
  const [hostname, setHostname] = useState("");
  const [hosttype, setHosttype] = useState("");
  const [ipaddress172, setIpaddress172] = useState("");
  const [ipaddress192, setIpaddress192] = useState("");
  const [operatingsystem, setOperating] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("The name you entered was: ${name}");
  };

  return (
    <div>
      <Nav />
      <Footer />

      <form onSubmit={handleSubmit}>
        <h2 style={{ paddingLeft: 170 }}>Add server details</h2>
        <div class="row" style={{ paddingLeft: 50 }}>
          {/* <div class="row"> */}

          <div class="column" style={{ backgroundColor: "white" }}>
            <label class="required">
              {" "}
              <b>Component Name</b>{" "}
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
              placeholder="Enter Component Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <label class="required">
              <b> Environment</b>{" "}
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
              placeholder="Select environment"
              value={environment}
              onChange={(e) => setEnvironment(e.target.value)}
            />
            <br />
            <br />
            <label>
              <b> Host name</b>{" "}
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
              placeholder="E.g. Bil001"
              value={hostname}
              onChange={(e) => setHostname(e.target.value)}
            />
            <br />
            <br />
            <label>
              <b> Host type</b>{" "}
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
              placeholder="E.g. Application Server"
              value={hosttype}
              onChange={(e) => setHosttype(e.target.value)}
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
              }}
            />
          </div>
          <div class="column" style={{ backgroundColor: "white" }}>
            {/* <h2>Column 2</h2> */}
            <label>
              {" "}
              <b>IP address (172.XX)</b>{" "}
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
              placeholder="Enter IP address"
              value={ipaddress172}
              onChange={(e) => setIpaddress172(e.target.value)}
            />
            <br />
            <br />

            <label>
              <b> IP adresss (192.XX)</b>{" "}
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
              placeholder="Enter IP address"
              value={ipaddress192}
              onChange={(e) => setIpaddress192(e.target.value)}
            />
            <br />
            <br />

            <label>
              <b> Operating system</b>{" "}
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
              placeholder="E.g. Sun Solaris"
              value={operatingsystem}
              onChange={(e) => setOperating(e.target.value)}
            />
            {/* <p>E.g. Sun Solaris </p> */}
            <br />
            <br />

            <label>
              <b> Location</b>{" "}
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
              placeholder="E.g. Birmingham"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            {/* <p>E.g. Birmingham</p> */}
            <br />
            <br />
          </div>
        </div>

        {/* <h2>Add New Component </h2> */}
      </form>
    </div>
  );
}

ReactDOM.render(<MyServerForm />, document.getElementById("root"));
