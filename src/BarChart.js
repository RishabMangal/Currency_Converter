import React, { Component } from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { randomColor } from "randomcolor";
import pattern from "patternomaly";
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

    const options = {
      title: {
        display: true,
        text: "Currency",
            fontSize: 20,
          fontColor:randomColor({luminosity:"dark",hue:"blue"})
      },
      legend: {
        display: false,
        position: "right",
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
            //   barPercentage: 0.5,
          },
        ],
        yAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
            //   barPercentage: 0.4,
          },
        ],
      },
    };
    return (
      <div className="" style={{ backgroundColor: randomColor() }}>
        <div
          style={{
            backgroundColor: randomColor({
              luminosity: "dark",
              format: "rgba",
            }),
          }}
        >
          <Bar width={100} height={23} data={data} options={options}></Bar>
        </div>
        <div className="row mx-0">
          <div
            className="col-sm-6"
            style={{
              backgroundColor: randomColor({
                luminosity: "random",
                hue: "random",
              }),
            }}
          >
            <Pie width={10} height={5} data={data} options={options}></Pie>
          </div>
          <div
            className="col-sm-6"
            style={{
              backgroundColor: randomColor({
                luminosity: "bright",
                hue: "random",
              }),
            }}
          >
            <Doughnut
              width={10}
              height={5}
              data={data}
              options={options}
            ></Doughnut>
          </div>
        </div>
        <div
          style={{
            backgroundColor: randomColor({
              luminosity: "random",
              hue: "random",
            }),
          }}
        >
          <Line width={100} height={20} data={data} options={options}></Line>
        </div>
      </div>
    );
  }
}

export default BarChart;
