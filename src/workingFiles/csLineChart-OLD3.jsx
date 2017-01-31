import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import SVGElement from './saveImg/svg_todataurl.js'; // eslint-disable-line no-unused-vars

export default class CSLineChart extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      input1: 1000,
      input2: 2500,
      nameOne: 'Name One',
      theDataMin: 0,
      theDataMax: 10000,
      data: [
        // {name: this.state.nameOne, uv: this.state.input1, pv: this.state.input2},
        {name: 'Page B', uv: 3000, pv: 1398},
        {name: 'Page C', uv: 2000, pv: 9800},
        {name: 'Page D', uv: 2780, pv: 3908},
        {name: 'Page E', uv: 1890, pv: 4800},
        {name: 'Page F', uv: 2390, pv: 3800},
    ],
    }
  }

  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);

  }

  doButterfly() {
    document.querySelector('svg.recharts-surface').id = 'svg';
    var svg = document.getElementById("svg");
    var img = document.getElementById("fromcanvas");

    svg.toDataURL("image/png", {
      // keepOutsideViewport: true,
      // keepNonSafe: true,

      // adjust sizing of output, only works after DOM render
      callback: function(data) {
        img.setAttribute("src", data);
        // var a = document.querySelector("#fromcanvas");
        // a.style.width = '1500px';
      }
    })
  }

  addRow() {
    // data.push(this.row);
    this.setState({
      data: data.push({name: 'Page G', uv: 3490, pv: 4300})
    })
    // this.state.data.push({name: 'Page G', uv: 3490, pv: 4300});
  }

  // addRow(newRow) {
  //   this.setState({});
  // var newData = this.state.data.slice();
  // }

  // componentDidMount() {
  //
  // }

  render(data) {

    // var valueOne = this.state.input1;
    // var valueTwo = this.state.input2;
    // var nameOne = this.state.nameOne;
    var DataMin = this.state.theDataMin;
    var DataMax = this.state.theDataMax;


    // var rowOne = {name: 'Page G', uv: 3490, pv: 4300};



    // let dataExtraOne = [
    //   data.push(...data, {name: 'Page G', uv: 3490, pv: 4300})
    // ];



    // var addRow = function() {
    //   var row = {name: 'Page G', uv: 3490, pv: 4300};
    //   data.push(row);
    // }

    // Working but needs event
    // var addRow = data.push({name: 'Page G', uv: 3490, pv: 4300});


    // var dataRef = React.findDOMNode(this.refs[chartID]);

    return (
      <div>

        <div className="chartWrap">
        <ResponsiveContainer>
        <LineChart  data={this.state.data} width={1600} height={1300}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis type="number" dataKey="1000000000000" domain={[parseInt(DataMin), parseInt(DataMax)]} allowDataOverflow={true} />
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>


      <div className="controls">
      {/* {valueOne}<br/>
      {valueTwo}<br/> */}
        <button onClick={this.addRow}>ADD ROW</button>
        <input type="text" value={this.state.input1}
          onChange={this.handleChange.bind(this, 'input1')} placeholder="input1" />
        <input type="text" value={this.state.input2}
          onChange={this.handleChange.bind(this, 'input2')} placeholder="input2" />
        <input type="text" value={this.state.nameOne}
          onChange={this.handleChange.bind(this, 'nameOne')} placeholder="nameOne"/>
        <input type="text" value={this.state.theDataMin}
          onChange={this.handleChange.bind(this, 'theDataMin')} placeholder="theDataMin"/>
        <input type="text" value={this.state.theDataMax}
          onChange={this.handleChange.bind(this, 'theDataMax')} placeholder="theDataMax" /><br />

            <button onClick={this.doButterfly}>Get DataURL</button> <br />
            <img id="fromcanvas" alt="exported chart image" />
      </div> {/* controls end */}

      </div>









      </div>
    )
  }
}
