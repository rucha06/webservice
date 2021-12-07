import ReactDOM from "react-dom";
import Nav from "./nav";
import Footer from "./footer";

const tableStyle = {
  border: "1px solid black",
  borderCollapse: "collapse",
  textAlign: "center",
  width: "100%",
  paddingLeft: "500",
  paddingRight: "500",
};

const tdStyle = {
  border: "1px solid black",
  background: "white",
  padding: "5px",
};

const thStyle = {
  border: "1px solid black",
  background: "rgb(201, 199, 195)",
  color: "black",
  padding: "5px",
};

const App = () => {
  const students = [
    // { id: 1, name: 'Tom',  age: 25, favFruit: '🍏' },
    // { id: 2, name: 'Adam', age: 43, favFruit: '🍌' },
    // { id: 3, name: 'Mark', age: 16, favFruit: '🍊' },
    // { id: 4, name: 'John', age: 29, favFruit: '🍒' }
    {
      environment: "ab",
      src_comp: "hj",
      src_host: "js",
      src_ip: 54,
      dest_comp: "sb",
      dest_ip: 54,
      dest_host: "yg",
      dest_port: "ih",
      stat: 52,
    },
    {
      environment: "ab",
      src_comp: "hj",
      src_host: "js",
      src_ip: 54,
      dest_comp: "sb",
      dest_ip: 54,
      dest_host: "yg",
      dest_port: "ih",
      stat: 52,
    },
    {
      environment: "ab",
      src_comp: "hj",
      src_host: "js",
      src_ip: 54,
      dest_comp: "sb",
      dest_ip: 54,
      dest_host: "yg",
      dest_port: "ih",
      stat: 52,
    },
    {
      environment: "ab",
      src_comp: "hj",
      src_host: "js",
      src_ip: 54,
      dest_comp: "sb",
      dest_ip: 54,
      dest_host: "yg",
      dest_port: "ih",
      stat: 52,
    },
    {
      environment: "ab",
      src_comp: "hj",
      src_host: "js",
      src_ip: 54,
      dest_comp: "sb",
      dest_ip: 54,
      dest_host: "yg",
      dest_port: "ih",
      stat: 52,
    },
    {
      environment: "ab",
      src_comp: "hj",
      src_host: "js",
      src_ip: 54,
      dest_comp: "sb",
      dest_ip: 54,
      dest_host: "yg",
      dest_port: "ih",
      stat: 52,
    },
    {
      environment: "ab",
      src_comp: "hj",
      src_host: "js",
      src_ip: 54,
      dest_comp: "sb",
      dest_ip: 54,
      dest_host: "yg",
      dest_port: "ih",
      stat: 52,
    },
  ];
  return (
    <div>
      <Nav />
      <Footer />
      <h1 style={{ paddingLeft: 60 }}>Connectivity Matrix</h1>
      <div style={{ paddingLeft: 60, paddingRight: 180 }}>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <th style={thStyle}>Environment</th>
              <th style={thStyle}>Source Component</th>
              <th style={thStyle}>Source Hostname</th>
              <th style={thStyle}>Source IP Address</th>
              <th style={thStyle}>Destination Component</th>
              <th style={thStyle}>Destination IP Address</th>
              <th style={thStyle}>Destination Host Name</th>
              <th style={thStyle}>Destination Port Number</th>
              <th style={thStyle}>Status</th>
            </tr>
            {students.map(
              ({
                environment,
                src_comp,
                src_host,
                src_ip,
                dest_comp,
                dest_ip,
                dest_host,
                dest_port,
                stat,
              }) => (
                <tr key={src_ip}>
                  <td style={tdStyle}>{environment}</td>
                  <td style={tdStyle}>{src_comp}</td>
                  <td style={tdStyle}>{src_host}</td>
                  <td style={tdStyle}>{src_ip}</td>
                  <td style={tdStyle}>{dest_comp}</td>
                  <td style={tdStyle}>{dest_ip}</td>
                  <td style={tdStyle}>{dest_host}</td>
                  <td style={tdStyle}>{dest_port}</td>
                  <td style={tdStyle}>{stat}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
