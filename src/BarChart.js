import React, { Component } from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { randomColor } from "randomcolor";
import pattern from "patternomaly";
import getSymbolFromCurrency from "currency-symbol-map";
class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labels: [],
      data: [],
      bgColors: [],
      brColors: [],
      hvColors: [],
      hrColors: [],
    };
  }

  componentDidMount() {
    const rates = Object.keys(this.props.rates);
    rates.forEach((k, i) => {
      this.state.labels.push(k);
      this.state.data.push(this.props.rates[k]);
      this.state.bgColors.push(randomColor());
      this.state.brColors.push(randomColor({ format: "rgba" }));
      //   this.state.hvColors.push(randomColor());
      //   this.state.hrColors.push(randomColor());
    });
    this.state.bgColors.forEach((c, i) => {
      this.state.hvColors.push(`${c}90`);
    });
    console.log(this.state.bgColors[0]);
    console.log(this.state.hvColors[0]);
  }

  render() {
    const data = {
      labels: this.state.labels,
      datasets: [
        {
          //   backgroundColor: this.state.bgColors.map((c,i)=>pattern.draw("square",c)),
          backgroundColor: pattern.generate(this.state.bgColors),
          borderColor: this.state.brColors,
          borderWidth: 1,
          hoverBackgroundColor: this.state.hvColors,
          hoverBorderColor: this.state.hrColors,
          data: this.state.data,
        },
      ],
    };
    const titleText = `Currencies  w.r.t    ${getSymbolFromCurrency(this.props.base)} 1 ${this.props.baseName}       on    ${this.props.date}`;
    const options = {
      title: {
        display: true,
        text: titleText,
        fontSize: 20,
        fontColor: "lightblue",
      },
      legend: {
        display: false,
        position: "right",
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 10,
          bottom: 0,
        },
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: true,
            },
            //   barPercentage: 0.5,
          },
        ],
        yAxes: [
          {
            gridLines: {
              offsetGridLines: true,
            },
            //   barPercentage: 0.4,
          },
        ],
      },
    };
    const NoLabeloptions = {
      title: {
        display: true,
        text: titleText,
        fontSize: 20,
        // fontColor:randomColor({luminosity:"dark",hue:"blue"})
      },
      label: "test",
      labels:{display:false},
      legend: {
        display: false,
        position: "right",
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 50,
          bottom: 0,
        },
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
            display: false
            //   barPercentage: 0.5,
          },
        ],
        yAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
            display: false
            //   barPercentage: 0.4,
          },
        ],
      },
    };
    return (
      <div className="bg-dark" style={{ color: randomColor() }}>
        <div
          style={{
              color: randomColor({
              luminosity: "dark",
              format: "rgba",
              }),
            backgroundColor:"#11111195"
          }}
        >
          <Bar width={100} height={23} data={data} options={options}></Bar>
        </div>
        <div className="row mx-0">
          <div
            className="col-sm-6"
            style={{
              backgroundColor:"#11111195"
            }}
          >
            <Pie width={10} height={5} data={data} options={NoLabeloptions}></Pie>
          </div>
          <div
            className="col-sm-6"
            style={{
              backgroundColor:"#11111195"
            }}
          >
            <Doughnut
              width={10}
              height={5}
              data={data}
              options={NoLabeloptions}
            ></Doughnut>
          </div>
        </div>
        <div
          style={{
            backgroundColor:"#11111195"
          }}
        >
          <Line width={100} height={20} data={data} options={options}></Line>
        </div>
      </div>
    );
  }
}

export default BarChart;
