import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch("http://localhost:9000/server")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.text();
      })
      .then(res => this.setState({ apiResponse: res }))
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <p className="App-intro">;{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
