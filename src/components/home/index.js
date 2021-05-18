
import React, { Component } from "react";
// import FancyButton from '../Button'
// function FancyButton(props) {
//     return(
//         <button className="FancyButton">
//             {props.children}
//         </button>
//     )
// }

export default class Home extends Component {
    
  render() {
    return (
      <div>
        <h3
          style={{
            color: "yellow",
            width: 1000,
            height: 500,
            backgroundColor: "blueviolet",
          }}
        >
          home组件内容
          {/* <FancyButton>点我</FancyButton> */}
        </h3>
      </div>
    );
  }
}
