import React, { Component } from 'react';
import PieChart from 'react-simple-pie-chart';
import DonutChart from "react-svg-donut";
import { render } from "react-dom";
import $ from 'jquery'
class PiChart extends Component {
    constructor() {
        super();
        this.state = {};
      }
      onHover(item) {
        const { active } = this.state;
        if (active !== item)
          this.setState({
            active: item
          });
      }   
      onClick(item) {
        alert(JSON.stringify(item))
     } 
  //    componentDidMount(){
  //     $('.donut-chart-arcs').on('click', function(){
  //        alert('Using Jquery');
  //      }); 
  // }
    render() {
        const data = [
          { name: "Ancellary",title: "Yasser", value: 1 },
          { name: "RX",title: "Yasser", value: 2 },
          { name: "ER",title: "Yasser", value: 3 },
          { name: "ZP",title: "Yasser", value: 4 },
          { name: "OP",title: "Yasser", value: 5 },
          { name: "LAB",title: "Yasser", value: 6 },
          { name: "IMAGE",title: "Yasser", value: 7 }
        ];
        const { active } = this.state;
        const props = {
          size: 250,
          onHover: this.onHover.bind(this),
          onClick:this.onClick.bind(this),
          title:'2018',
          label: "Yasser",
          active,
          data
        };
        return (
          <div>
            <DonutChart {...props} />
            <div className="chart-three">
              {data.map((item, index) => (
                <span
                  key={item.name}
                  onMouseEnter={() => this.onHover(index)}
                  onMouseLeave={() => this.onHover(-1)}
                  onClick={() => this.onClick(item)}
                 
                >
                  {item.name}
                </span>
              ))}
              <div className="active-guide"> Active :
             <span> {active >= 0 ? data[active].name : "none"}</span></div>
            </div>
          </div>
        );
      }
}
export default PiChart





