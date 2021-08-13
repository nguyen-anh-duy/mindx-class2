import React, {Component} from "react";
import "./Car.css";
export default class Car extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedCar: 'assets/img/red-car.png'
        };
    }
    changeCarColor = (color) => {
        this.setState({
            selectedCar: color,
        })
    }
    render() {
        return <div className="car">
            <div className="carLeft">
                <h2>choose your car's color</h2>
                <img src={this.state.selectedCar} />
            </div>
            <div className="carRight">
                <button className="btn red" onClick={() => this.changeCarColor('assets/img/red-car.png')} >red</button>
                <button className="btn black" onClick={() => this.changeCarColor('assets/img/black-car.png')} >black</button>
                <button className="btn white" onClick={() => this.changeCarColor('assets/img/white-car.png')} >white</button>
            </div>
        </div>
    }
}