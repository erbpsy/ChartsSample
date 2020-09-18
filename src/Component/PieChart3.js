import React, { Component } from 'react';
import PieChart from 'react-simple-pie-chart';
import DonutChart from "react-svg-donut";
import { render } from "react-dom";
import $ from 'jquery'
class PieChart3 extends Component {
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
        debugger;
        alert(JSON.stringify(item));
    }
    componentDidMount(){
      
    }
    render() {       
        const data = [
            { name: "8 MONTHS", value: 1 },
            { name: "4 MONTHS", value: 2 }
        ];
        const { active } = this.state;
        const props = {
            size: 250,
            onHover: this.onHover.bind(this),
            onClick:this.onClick.bind(this),
            title: '2018',
            active,
            data
        };
        return (
            <div>
                <DonutChart {...props} />
                <div>
                    {data.map((item, index) => (
                        <div
                            key={item.name}
                            onMouseEnter={() => this.onHover(index)}
                            onClick={() => this.onClick(item)}
                            onMouseLeave={() => this.onHover(-1)}
                            className="chart-three"
                        >
                            <span>{item.name}</span>
                        </div>
                    ))}
                   <div className="active-guide"> Active :
             <span>{active >= 0 ? data[active].name : "none"}</span>
              </div>
                </div>
            </div>
        );
    }
}
export default PieChart3





