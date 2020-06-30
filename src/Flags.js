import React, { Component } from "react";
import { data } from "./maal";
class Flags extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  render() {
    return (
      <div className="row mx-0 bg-dark">
        {data.map((c, i) => (
          <img
            src={`https://www.countryflags.io/${c.code}/shiny/64.png`}
            alt={`${c.code}`}
            className="m-0 p-0"
            title={c.name}
            key={i}
                onClick={() => this.setState({ index: i })}
                style={{width:"32px"}}
          ></img>
        ))}
      </div>
    );
  }
}

export default Flags;
