import React, { Component } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
// import { cur } from "./maal";
import { randomColor } from "randomcolor";

class Base extends Component {
  render() {
    const {
      date,
      base,
      baseName,
      fromCode,
      from,
      fromName,
      to,
      toCode,
      toName,
    } = this.props;
    var d = new Date(date).toUTCString();
    return (
      <div className="base-group">
        <div className="base" style={{backgroundColor:randomColor()}}>
          <span className="base-title"> Base Currency </span>:{" "}
          <span className="base-currency">
            <span className="base-currency-symbol">
              {getSymbolFromCurrency(base)}
            </span>
            {base} <span className="base-name">{`[${baseName}]`}</span>
          </span>
          <span className="btn btn-warning float-right date">{d}</span>
        </div>
        {fromCode ? (
          <div className="from" style={{backgroundColor:randomColor()}}>
            <span>
              <span className="base-currency">
                <span className="base-currency-symbol">
                  {getSymbolFromCurrency(base)} 1
                </span>
                {base}
                <span className="base-name">{`[${baseName}]`}</span>
              </span>
              =
              <span className="from-currency">
                <span className="from-currency-symbol">
                  {getSymbolFromCurrency(fromCode)} {from}
                </span>{" "}
                {fromCode}
                <span className="from-name">{`[${fromName}]`}</span>
              </span>
            </span>
          </div>
        ) : null}

        {toCode ? (
          <div className="to" style={{backgroundColor:randomColor({luminosity:"bright"})}}>
            <span>
              <span className="base-currency">
                <span className="base-currency-symbol">
                  {getSymbolFromCurrency(base)} 1
                </span>
                {base}
                <span className="base-name">{`[${baseName}]`}</span>
              </span>
              =
              <span className="to-currency">
                <span className="to-currency-symbol">
                  {getSymbolFromCurrency(toCode)} {to}
                </span>{" "}
                {toCode}
                <span className="to-name">{`[${toName}]`}</span>
              </span>
            </span>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Base;
