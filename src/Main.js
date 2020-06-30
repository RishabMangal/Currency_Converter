import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      loading: true,
    };
  }

  componentDidMount() {
    fetch(
      "http://data.fixer.io/api/latest?access_key=68a71656c8dbc1c3e46fc4e55b923445&format=1"
    )
      .then((res) => res.json())
      .then((resjson) => this.setState({ data: resjson, loading: false }));
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="bg-dark">
        <div className="text-warning text-cursive float-right">
          {this.state.data.date}
        </div>
      </div>
    );
  }
}

export default Main;
