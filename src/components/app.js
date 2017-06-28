import "../styles/main.scss";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import TestComponent from "./component";

//create a new component. This component should generate HTML
export default class App extends Component {
    constructor(props) {
        //set props
        super(props);
    }

    //render
    render() {
        return (
            <div>
               React is working!
               <TestComponent />
            </div>
        )
    }
}
