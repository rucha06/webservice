import { useState } from "react";
import ReactDOM from "react-dom";
import React, { Component } from "react";
import Footer from "./footer";
import Nav from "./nav";

function MyForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("The name you entered was: ${name}");
  };

  return (
    <div>
      <Nav />
      <Footer />

      <form onSubmit={handleSubmit}>
        <div style={{ paddingLeft: 50 }}>
          <h2>Add New Component </h2>

          <label>
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
          <label>
            <b> Component Description</b>{" "}
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
            placeholder="Enter Component Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
      </form>
    </div>
  );
}

ReactDOM.render(<MyForm />, document.getElementById("root"));

// export default MyForm;
